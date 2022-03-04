import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React from "react";
import { Wrapper } from "../../App.styles";
import { ItemType } from "../../utils/types";

type Props = {
	item: ItemType;
	addToBasket: (selectedItem: ItemType) => void;
	removeFromBasket: (id: number) => void;
};

const BasketItem = ({ item, addToBasket, removeFromBasket }: Props) => {
	return (
		<Wrapper>
			<div>
				<h3>{item.name}</h3>
				<div className="item-information">
					<p>Price: £{item.price.toFixed(2)}p</p>
					<p>Total: £{(item.amount * item.price).toFixed(2)}</p>
				</div>
        <img className="image" src={item.image} alt={item.name} />
				<div>
					<Button
						size="small"
						variant="outlined"
						color="primary"
						onClick={() => removeFromBasket(item.id)}
					>
						<FontAwesomeIcon icon="minus" />
					</Button>
          <p>{item.amount}</p>
          <Button
						size="small"
						variant="outlined"
						color="primary"
						onClick={() => addToBasket(item)}
					>
						<FontAwesomeIcon icon="plus" />
					</Button>
				</div>
			</div>
		</Wrapper>
	);
};

export default BasketItem;
