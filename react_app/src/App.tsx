
import { useState } from "react";
// import produce from "immer";
import Navbar from "./components/Navbar";
import { Cart } from "./components/Cart";
import { set } from "immer/dist/internal";



function App() {

        const [cartItems, setCartItems] = useState(["Product1", "Product2"]);


        return (
                <div>
                <Navbar cartItemsCount={cartItems.length}/>
                <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
                </div>
        )
        
}

export default App;
