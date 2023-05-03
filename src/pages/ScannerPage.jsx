import { useEffect, useState } from "react";

const ScannerPage = () => {
  const [value, setValue] = useState("No Barcode Scanner");
 


  return (
      <div>{value}</div>
  );
};

export default ScannerPage;
