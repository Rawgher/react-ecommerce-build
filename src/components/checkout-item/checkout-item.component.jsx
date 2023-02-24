import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CheckoutItemContainer, CheckoutImageContainer, CheckoutImage, CheckoutSpan, CheckoutQuantity, QuantityArrow, CheckoutValue, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, amount } = cartItem;
  const { addItemsToCart, removeItemsFromCart, clearItemFromCart } = useContext(CartContext);

  const addItemHandler = () => addItemsToCart(cartItem);
  const removeItemHandler = () => removeItemsFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>
      <CheckoutSpan>{name}</CheckoutSpan>
      <CheckoutQuantity>
        <QuantityArrow onClick={removeItemHandler}>&#10094;</QuantityArrow>
        <CheckoutValue>{amount}</CheckoutValue>
        <QuantityArrow onClick={addItemHandler}>&#10095;</QuantityArrow>
      </CheckoutQuantity>
      <CheckoutSpan>${price}</CheckoutSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
