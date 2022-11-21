// Html5QrcodePlugin.jsx

import { Html5QrcodeScanner } from "html5-qrcode";
import {Html5Qrcode} from "html5-qrcode"
import React, { useEffect, useState } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

export const Scanner = (props) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const createConfig = (props) => {
      var config = {};
      if (props.fps) config.fps = props.fps;
      if (props.qrbox)  config.qrbox = props.qrbox;
      if (props.aspectRatio) config.aspectRatio = props.aspectRatio; 
      if (props.disableFlip !== undefined) config.disableFlip = props.disableFlip;  
      // if (props.stop) config.stop = props.stop
      return config;
    }
    var config = createConfig(props)
     var verbose = props.verbose === true;

    // Suceess callback is required.
    if (!(props.qrCodeSuccessCallback )) {
      throw "qrCodeSuccessCallback is required callback.";
    }
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId, config, verbose)

    props.handleScan(html5QrcodeScanner)
            html5QrcodeScanner.render(
              props.qrCodeSuccessCallback,
              props.qrCodeErrorCallback)
    
              setStart(true)
   
  }, [])






  return (

      <div id={qrcodeRegionId} className="container" />

  );
};


