import React, { useEffect, useState } from "react";
import { Scanner } from "../cmps/Scanner/Scanner"
import { scannerService } from "../services/scanner-service";

export function ScannerPage() {
  const [decodedText, setDecodedText] = useState('');
  const [barcodes, setBarcodes] = useState([])
  const [isVegan, setIsVegan] = useState(null)

  useEffect(() => {
    const barcodes = scannerService.getBarcodes()
    setBarcodes(barcodes)
  }, [])


  const onNewScanResult = (decodedText, decodedResult) => {
   setDecodedText(decodedText)
    const isVegan = scannerService.checkIfVean(decodedText)
    setIsVegan(isVegan)
    setDecodedText("")
}

  return (
    <div className="scanner-page">
      <Scanner fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} /> 
      <p>ברקוד:</p> {decodedText}
           {isVegan === null ? ' ' : (isVegan ? <h3>המרכיב טבעוני! בתיאבון</h3> : <h3>המרכיב לא טבעוני</h3>)}
    </div>
  );
}