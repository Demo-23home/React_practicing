import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

export const App = () => {
  const [alertVisible, setAlertVisbilty]=useState(false)
  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisbilty(false)}>hello</Alert>}
      <Button onClick={() => setAlertVisbilty(true) }> myButton</Button>
    </div>
  );
};
export default App;
