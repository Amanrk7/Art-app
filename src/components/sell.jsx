import React, { useState, useRef, useEffect } from "react";
// import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const SellPage = () => {
  const targetRef = useRef(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setLoading(true);
      const storageRef = ref(storage, `uploads/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          sendEmail(downloadURL);
          setLoading(false);
        });
      });
    }
  };

  const sendEmail = (downloadURL) => {
    // Call your Firebase Cloud Function endpoint to send the email
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toEmail: "amanrk00112@gmail.com",
        attachment: downloadURL,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Email sent successfully:", data))
      .catch((error) => console.error("Error sending email:", error));
  };

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
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
          backgroundColor: "#e7e7e7",
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
            height: "50%",
            alignContent: "center",
            justifyItems: "center",
            backgroundColor: "#f0f8ff69",
            backdropFilter: "blur(9px)",
            borderRadius: "33px",
          }}
        >
          <div>
            <h3>upload pdf docs here!!</h3>
          </div>

          {/* --img upload------ */}
          <div>img uplad</div>

          <div style={{ display: "flex", gap: "2px" }}>
            <div>
              <input type="file" onChange={handleChange} />
            </div>
            <div onClick={handleUpload} disabled={loading}>
              {loading ? (
                "Uploading..."
              ) : (
                <i class="fa-regular fa-paper-plane"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
