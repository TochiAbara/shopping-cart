import React from "react";
import { ItemType } from "../../utils/types";
import BasketItem from "../BasketItem/BasketItem";
import { Wrapper } from "./Basket.styles";

type Props = {
	basketItems: ItemType[];
	addToBasket: (selectedItem: ItemType) => void;
	removeFromBasket: (id: number) => void;
};

const Basket = ({ basketItems, addToBasket, removeFromBasket }: Props) => {
	const getTotal = (items: ItemType[]) =>
		items.reduce((ack: number, item) => ack + item.amount * item.price / 2 , 0);

	return (
		<Wrapper>
			<h2>BASKET</h2>
			{basketItems.length === 0 ? <p>No items have been added.</p> : null}
			{basketItems.map((item) => (
				<BasketItem
					key={item.id}
					item={item}
					addToBasket={addToBasket}
					removeFromBasket={removeFromBasket}
				/>
			))}
			<h2>Total: £{getTotal(basketItems).toFixed(2)}</h2>
		</Wrapper>
	);
};

export default Basket;
