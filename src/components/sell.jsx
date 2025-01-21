import React, { useState, useRef, useEffect } from "react";
import { getDownloadURL } from "firebase/storage";
import { storage, ref, uploadBytes } from "./firebase";
import emailjs from "emailjs-com";
import { auth, db, setDoc, doc } from "./firebase";

export const SellPage = () => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [user, setUser] = useState(null); // Add user state

  const targetRef = useRef(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set the authenticated user
    });
    return () => unsubscribe();
  }, []);

  const correctFileType = (file) => {
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (file && allowedTypes.includes(file.type)) {
      console.log("File is valid. Proceed with upload.");
      return true;
    } else {
      console.error(
        "Invalid file type. Please upload a PDF, JPG, or PNG file."
      );
      return false;
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];
    const urls = [];
    let errorMessages = [];

    selectedFiles.forEach((file) => {
      if (correctFileType(file)) {
        validFiles.push(file);
        const url = URL.createObjectURL(file);
        urls.push(url);
      } else {
        errorMessages.push(
          "Invalid file type. Please upload a PDF, JPG, or PNG file."
        );
      }
    });

    setFiles(validFiles);
    setPreviewUrls(urls);
    if (errorMessages.length > 0) {
      setError(errorMessages.join(" "));
      e.target.value = "";
    } else {
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (files.length > 0 && user) {
      // Ensure user is authenticated
      setLoading(true);
      try {
        const uploadPromises = files.map(async (file) => {
          const storageRef = ref(storage, `uploads/${user.email}/${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);

          await setDoc(doc(db, "uploads", file.name), {
            userId: user.uid,
            fileName: file.name,
            fileUrl: downloadURL,
            uploadedAt: new Date(),
          });

          sendEmail(downloadURL);
        });
        await Promise.all(uploadPromises);
        setLoading(false);
        setFileUploaded(true);
        setTimeout(() => {
          setFileUploaded(false);
        }, 7000);
      } catch (error) {
        setLoading(false);
        console.error("Error uploading file: ", error);
      }
    }
  };

  const sendEmail = (downloadURL) => {
    const templateParams = {
      to_email: "amanrk00112@gmail.com",
      attachment: downloadURL,
    };
    emailjs
      .send(
        "service_40ncdqw",
        "template_u03b01e",
        templateParams,
        "Qx6jX1aoOdXJXq4BM"
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div>
      <div
        ref={targetRef}
        style={{
          width: "100%",
          display: "block",
          height: "3em",
          background: "transparent",
          transition: "3s ease-in",
        }}
      ></div>
      <div
        style={{
          color: "black",
          // backgroundColor: "#e7e7e7",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <h1 id="sellPage-header" style={{}}>
            {" "}
            SELL AT YOUR PRICE
          </h1>
        </div>
        <div
          style={{
            width: "50%",
            height: "40%",
            alignContent: "center",
            justifyItems: "center",
            borderRadius: "33px",
            boxShadow:"6px 5px 8px black",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "9px",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                paddingLeft: "42px",
                paddingBottom: "27px",
                fontFamily: "circular",
              }}
            >
              upload pdf docs here!!
            </h3>
            <span
              id="upload_btn_info_toggle"
              style={{
                paddingBottom: "30px",
                fontFamily: "circular",
              }}
            >
              <i
                id="upload_btn_info_toggle_i"
                class="fa-solid fa-info"
                style={{
                  fontSize: "11px",
                  padding: "7px",
                  borderRadius: "57%",
                }}
              ></i>
            </span>
          </div>

          {/* --img upload------ */}

          <div
            style={{
              display: "flex",
              gap: "2px",
              border: "0.9px solid",
              borderRadius: "33px",
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div>
              <input
                type="file"
                onChange={handleFileChange}
                style={{
                  background: "transparent",
                  border: "0",
                  color: "#615e5e",
                  fontWeight: "900",
                  fontFamily: "circular",
                  letterSpacing: " .3px",
                }}
              />
              {fileUploaded && <p style={{ color: "green" }}>Success</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
            <div onClick={handleUpload} disabled={loading}>
              {loading ? (
                <div className="loader"></div>
              ) : (
                <span id="btn_upload_file" class="material-symbols-outlined">
                  arrow_outward
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* -----recent-uploads--------- */}
      <div>
        {" "}
        <div>
          {" "}
          <h3>Your uploads</h3>{" "}
        </div>{" "}
        <div>
          {" "}
          {previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Uploaded file ${index + 1}`}
              style={{ maxWidth: "100%", maxHeight: "300px", margin: "10px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
