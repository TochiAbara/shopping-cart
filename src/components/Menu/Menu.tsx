import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "@material-ui/core/Badge/Badge";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../App.styles";
import { ItemType } from "../../utils/types";
import Basket from '../../components/Basket/Basket';
import Drawer from '@material-ui/core/Drawer/Drawer';

const Menu = () => {
	const [open, setOpen] = useState(false);
	const [basketItems, setBasketItems] = useState([] as ItemType[]);

	const totalItems = (items: ItemType[]) =>
		items.reduce((acc: number, item) => acc + item.amount, 0);

    const addItems = (selectedItem: ItemType) => {
      setBasketItems(prev => {
        const isItemInBasket = prev.find(item => item.id === selectedItem.id)
  
        if (isItemInBasket) {
          return prev.map(item => item.id === selectedItem.id ? { ...item, amount: item.amount + 1} : item)
        }
        return [...prev, {...selectedItem, amount: 1}];
      })
  
    }

    const removeItems = (id: number) => {
      setBasketItems(prev =>
        prev.reduce((acc, item) => {
          if (item.id === id) {
            if (item.amount === 1) return acc;
            return [...acc, { ...item, amount: item.amount - 1 }];
          } else {
            return [...acc, item];
          }
        }, [] as ItemType[])
      );
    };

	return (
		<nav className="nav-wrapper">
			<div className="container">
				<Link to="/" className="brand-logo">
					FRUITS <FontAwesomeIcon icon="seedling" />
				</Link>
				<ul className="right">
					<li>
						<Link to="/">Items</Link>
					</li>
					<li>
          <StyledButton onClick={() => setOpen(true)}>
						<Badge badgeContent={totalItems(basketItems)} color="error">
							<FontAwesomeIcon icon="cart-plus" />
						</Badge>
					</StyledButton>
					</li>
					<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
						<Basket
							basketItems={basketItems}
							addToBasket={addItems}
							removeFromBasket={removeItems}
						/>
					</Drawer>
		
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
