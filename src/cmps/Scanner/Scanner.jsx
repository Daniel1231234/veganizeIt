// Html5QrcodePlugin.jsx

import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

export const Scanner = (props) => {
  const [config, setConfig] = useState(null)
    const [startScan, setStartScan] = useState(false)

       function createConfig(props) {
            var config = {};
            if (props.fps) {
            config.fps = props.fps;
            }
            if (props.qrbox) {
            config.qrbox = props.qrbox;
            }
            if (props.aspectRatio) {
            config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
            config.disableFlip = props.disableFlip;
            }
            return config;
        }
  
  useEffect(() => {
     setStartScan(true)
     var config = createConfig(props)
     var verbose = props.verbose === false;
     // console.log(config)
     setConfig(config)
     // Suceess callback is required.
     if (!(props.qrCodeSuccessCallback )) {
            throw "qrCodeSuccessCallback is required callback.";
          }
         
          const html5QrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, config, verbose);
            html5QrcodeScanner.render(
              props.qrCodeSuccessCallback,
              props.qrCodeErrorCallback);
            }, [])

   return <div id={qrcodeRegionId} className="container" />;
};


