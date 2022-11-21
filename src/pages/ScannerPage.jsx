import React, { useEffect, useState } from "react";
import { Scanner } from "../cmps/Scanner/Scanner"
import { scannerService } from "../services/scanner-service";

export function ScannerPage() {
  const [decodedText, setDecodedText] = useState('');
  const [isVegan, setIsVegan] = useState(null)
  const [startScan, setStartScan] = useState(false)

  

  useEffect(() => {
  
    // const barcodes = scannerService.getBarcodes()
    // setStartScan(false)
  }, [])





  const onNewScanResult = (decodedText, decodedResult) => {
   setDecodedText(decodedText)
    const isVegan = scannerService.checkIfVean(decodedText)
    setIsVegan(isVegan)
    setDecodedText("")
    setTimeout(() => { setIsVegan(null) }, 5000)
    
  }

  const handleScan = (val) => {
console.log(val);
  }
  
  const QrDimensions = { width: 230, height: 250 }
  
  const stopScan = (val) => {
    console.log(val);
  }

  return (
    <div className="scanner-page">
      <Scanner fps={7} qrbox={QrDimensions} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} handleScan={handleScan} stop={stopScan} aspectRatio="1/1"  /> 
      <p>ברקוד:</p> {decodedText}
      {isVegan === null ? ' ' : (isVegan ? <h3>המרכיב טבעוני! בתיאבון</h3> : <h3>המרכיב לא טבעוני</h3>)}
    </div>
  );
}