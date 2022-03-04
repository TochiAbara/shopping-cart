import Button from '@material-ui/core/Button/Button';
import React from 'react';
import { ItemType } from '../../utils/types';
import { Wrapper } from './Item.styles';

type Props = {
  item: ItemType;
  addToBasket: (selectedItem: ItemType) => void;
}

const Item = ({item, addToBasket}: Props) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <h3>Price: £{item.price.toFixed(2)}p</h3>
      </div>
      <Button onClick={() => addToBasket(item)}> Add to basket</Button>
    </Wrapper>
  )
}

export default Item;