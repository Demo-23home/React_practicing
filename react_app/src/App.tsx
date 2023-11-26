import Buttom from "./components/Buttom";

export const App = () => {
  return (
    <div>
      <Buttom onClick={() => console.log("clicked")}>My Button</Buttom>
    </div>
  );
};
export default App;
