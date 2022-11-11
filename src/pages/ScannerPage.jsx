import React, { useEffect, useState } from "react";
import Scanner from "../cmps/Scanner/Scanner"
// import { scanService } from "../services/scanner-service";


export function ScannerPage() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    console.log(result)
    setResult(result);
  }
  
  const handleScanBtn = () => {
    // const isMatch = scanService.getBarcodes()
    setCamera(!camera)
  }
  


  return (
    <div className="scanner-page">
      <button onClick={handleScanBtn}>
        {camera ? "די מיציתי" : "יאללה סרוק!"}
      </button>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      <hr />
        <p> ברקוד: {result ? result : " "}</p>
    </div>
  );
}