
import { useState } from "react";
import produce from "immer";

function App() {

        // const [game, setGame] = useState({
        //     id : 1,
        //     player : {
        //     name : "Zeyad",
        //       },
        //     });
        // const handleClick = () => {
        //   setGame({...game, player:{...game.player, name:"Mohammed"}})
        // }



        // const [pizza, setPizza] = useState({
        //   name : "cheese",
        //   toppings : ['mashroom']
        // });

        // const handleClick = () => {
        //   setPizza({...pizza, toppings:[...pizza.toppings, 'Cheese']});
        // }


        // const [cart ,setCart] = useState({
        //   discount : .1,
        //   items :[
        //     {id:1, title:"Product1", quantity:1},
        //     {id:2, title:"Product2", quantity:2}
        //   ]
        // })


        // const handleClick = () => {
        //   setCart({...cart, items:cart.items.map(item => item.id === 1? {...item, quantity:item.quantity+1}:item)})
        // }
      

//     const [tags, setTags] = useState(['happy','cheerful']);

//     const handleClick = () => {
//         // Add
//         setTags([...tags, 'sad'])
//         //Remove
//         setTags(tags.filter( (tag)=> tag !== 'happy'))

//         //update
//         setTags(tags.filter(tag => tag === 'happy'? 'happnies': tag))
// }




        // const [bugs, setBugs] = useState([
        //         {id : 1, title:"Bug1", fixed:false},
        //         {id : 2, title:"Bug2", fixed:false},
        // ]);

        // const handleClick = () => {
        //         // setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed : true} : bug))
        //         setBugs(produce(draft => {
        //                 const bug =draft.find(bug => bug.id === 1);
        //                 if (bug) bug.fixed = true;
        //         }))
        // }


        // console.log(bugs)
        // return <div><button onClick={handleClick}>Click Me</button> 
        //         {bugs.map(bug =><p key={bug.id}>{bug.title} {bug.fixed ?  'Fixed' : 'New'}</p>)}
        // </div>

        



}

export default App;
