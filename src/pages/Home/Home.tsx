
import Grid from '@material-ui/core/Grid/Grid';
import React, { useState } from 'react';
import { Wrapper } from '../../App.styles';
import Header from '../../components/Header/Header';
import { items } from '../../data/items';
import { ItemType } from '../../utils/types';
import Item from "../../components/Item/Item"

const Home = () => {
  const data = items;

  const [basketItems, setBasketItems] = useState([] as ItemType[]);

  const addItems = (selectedItem: ItemType) => {
    setBasketItems(prev => {
      const isItemInBasket = prev.find(item => item.id === selectedItem.id)

      if (isItemInBasket) {
        return prev.map(item => item.id === selectedItem.id ? { ...item, amount: item.amount + 1} : item)
      }
      return [...prev, {...selectedItem, amount: 1}];
    })

  }
  
  return (
    <Wrapper>
      <Header />
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} addToBasket={addItems} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home;