import { CartItemContainer, CartItemImg, CartItemDetails, ItemName } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, amount, imageUrl, price } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <ItemName>{name}</ItemName>
        <span className="price">
          {amount} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
