import ListGroup from "./components/ListGroup";
import { MouseEvent, useState } from "react";
function App() {
  let items = ["New York", "San Francissco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
