import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

interface Props {
  onClick : () => void;
}


export const Like = ({onClick}:Props) => {
  const toggle = ()=> {
    setStatus(!status);
    onClick();
  }
  const [status, setStatus] = useState(false);
  if (status) return <FaHeart color="red" size={200} onClick={toggle}/>
  return <CiHeart size={200} onClick={toggle}/>
}
export default Like;