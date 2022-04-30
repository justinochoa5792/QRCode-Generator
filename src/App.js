import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrCode(url);
      }
    );
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={handleChange}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      {qrCode && (
        <>
          <img src={qrCode} alt="qr" />
          <a href={qrCode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
