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
					<p>Price: {item.price}p</p>
					<p>Total: £{(item.amount * item.price).toFixed(2)}</p>
				</div>
				<div className="btn">
					<Button
						size="medium"
						variant="outlined"
						color="primary"
						onClick={() => removeFromBasket(item.id)}
					>
						<FontAwesomeIcon icon="minus" />
					</Button>
          <p>{item.amount}</p>
          <Button
						size="medium"
						variant="outlined"
						color="primary"
						onClick={() => addToBasket(item)}
					>
						<FontAwesomeIcon icon="plus" />
					</Button>
				</div>
			</div>
      <img className="image" src={item.image} alt={item.name} />
		</Wrapper>
	);
};

export default BasketItem;
