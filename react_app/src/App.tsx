import React from "react";
import ListGroup from "./components/ListGroup";

export const App = () => {
  const items = ['new york', 'manhattan', 'san francisco'];
  const heading = 'cities';
  
  const onSelectedItem = (selectedItem:string) => {
    console.log(`Selected item: ${selectedItem}`);
  };

  return (
    <div>
      <ListGroup items={items} heading={heading} onSelectItem={onSelectedItem} />
    </div>
  );
};

export default App;
