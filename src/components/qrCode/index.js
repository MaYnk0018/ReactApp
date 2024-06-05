import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export default function QRgenerator() {
    const[input, setInput]= useState('');
    const[qrcode, setQrcode]= useState('');
    function handleClick(newinput){
      setQrcode(newinput)
    }

    // useEffect(()=>
    //     setQrcode(input)
    // ,[])
  return (
    <div>
      <input
        onChange={(e)=>setInput(e.target.value)}
        type="text"
        placeholder="Enter value"
        className="main"
        name="qr-code"
        />
      <button onClick={()=>handleClick(input)}>Generate</button>
      <div><QRCode
        id='react-qr-code'
        value={qrcode}
        size= '100'
        color='#ffff'
      /></div>
      
    </div>
  );
}
