import ListGroup from "./components/ListGroup";
import { MouseEvent, useState } from "react";
function App() {
  let items = ["New York", "San Francissco", "Tokyo", "London", "Paris"];

  return <div><ListGroup items={items} heading="Cities"/></div>
}

export default App;
