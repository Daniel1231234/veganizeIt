import React from 'react'
import { useState } from 'react'
import QrReader from 'react-qr-scanner'

export const ScannerCmp = (props) => {

    const previewStyle = {
      height: 240,
      width: 320,
    }
    // handleScan = this.handleScan.bind(this)
  

  
  const handleError = (err) => {
    console.error(err)
  }


    return(
      <div>
        <QrReader
          delay={props.delay}
          style={previewStyle}
          onError={handleError}
          onScan={props.handleScan}
          onLoad={props.onStartScan}
          />
     
      </div>
    )

}