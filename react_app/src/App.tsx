
import Like from "./components/Like";


export const App = () => {

  return (
    <div>
  <Like onClick={()=> console.log("Clicked")}></Like>
    </div>
  );
};

export default App;
