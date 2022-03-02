import Button from '@material-ui/core/Button';
import { Props } from '../../utils/types';
import { Wrapper } from './Item.styles';



const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.img} alt={item.name} />
    <div>
      <h3>{item.name}</h3>
      <h3>£{item.price}p</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;