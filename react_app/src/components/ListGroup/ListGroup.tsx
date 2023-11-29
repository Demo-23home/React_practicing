import { useState } from "react";
import styles from './ListGroup.module.css'
// { items: [], heading: stirng }
import styled from "styled-components";

const List = styled.ul`
list-style: none;
padding:0%;
`;



interface listItemProps{
  active : boolean ;
}


const ListItem = styled.li<listItemProps>`
background: yellow;
background: ${(props) => props.active? 'blue':'none'}
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items = [];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no items found</p>}
      <List className={[styles.ListGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <ListItem
            active = {index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
