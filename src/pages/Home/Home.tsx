import { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { items } from '../../data/items';
import Basket from '../../components/Basket/Basket';
import Item from '../../components/Item/Item';
import { ItemType } from '../../utils/types';
import { StyledButton, Wrapper } from '../../App.styles';
import Header from '../../components/Header/Header';

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ItemType[]);

  const data = items;

  const getTotalItems = (items: ItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: ItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as ItemType[])
    );
  };


  return (
    <Wrapper>
      <Header />
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Basket
          basketItems={cartItems}
          addToBasket={handleAddToCart}
          removeFromBasket={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={6}>
        {data?.map(item => (
          <Grid item key={item.id} xs={10} sm={6}>
            <Item item={item} addToBasket={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Home;