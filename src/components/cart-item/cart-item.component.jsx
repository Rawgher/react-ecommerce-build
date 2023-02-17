import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, amount } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{amount}</span>
    </div>
  );
};

export default CartItem;
