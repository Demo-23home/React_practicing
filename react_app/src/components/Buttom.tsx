interface Props{
    children : string ;
    color?: 'primary'| 'secondary'| 'danger';
    onClick: () => void;

}

const Buttom =({children, onClick, color = 'danger' }:Props) =>{
 return <button className={ "btn btn-" + color } onClick={onClick}>{children}</button>
}
export default Buttom;
