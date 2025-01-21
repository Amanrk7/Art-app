export function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        height: "3em",
        alignItems: "center",
        bottom: "0",
        marginBottom: "-1px",
        borderTop: ".9px solid #8d8d8d",
        marginTop: "-4px",
        position: "fixed",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          fontFamily: "BOLDE",
          letterSpacing: "1.3px",
          fontSize: "18px",
        }}
      >
        2025 @ ARTIUM HIVE
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            fontFamily: "BOLDE",
            letterSpacing: "1.3px",
            fontSize: "18px",
          }}
        >
          Wirte to us @:
        </div>

        <div
          style={{
            fontFamily: "BOLDE",
            letterSpacing: "1.3px",
            fontSize: "18px",
            textTransform: "lowercase",
          }}
        >
          artiumhiveofficial@gmail.com
        </div>
      </div>
    </div>
  );
}
