export type CartItemType = {
	id: number
	img: string;
	price: number;
	name: string;
  amount: number;
};

export type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};