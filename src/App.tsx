import "./App.css";

import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeReader() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err: any, result: any) => {
          console.log(result);
          console.error(err);
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <BarcodeReader />
    </div>
  );
}

export default App;
