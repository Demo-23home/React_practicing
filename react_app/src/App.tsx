import { useState } from "react";
import Button from "./components/Button/Button";

function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "Zeyad",
//     },
//   });

//   const hadleClick = () => {
//         setGame({ ...game, player:{ ...game.player, name:"Mohammed"}})
//   };


// const [pizza, setPizza] = useState({
//         name : 'Cheese Pizza',
//         toppings: ["Mashroom"],
// })


// const handleClick = () => {
//         setPizza({...pizza, toppings:[...pizza.toppings, "Cheese"]})
// }


const [cart, setCart] = useState({
        discount : .1,
        items : [
                {id:1 ,title:"Product1", quantity:1},
                {id:2 ,title:"Product2", quantity:2}
        ]
})


const handleClick = () => {
        setCart({...cart, items:cart.items.map(item => item.id === 1 ? {...item ,quantity :item.quantity +1}: item)})
}


}

export default App;
