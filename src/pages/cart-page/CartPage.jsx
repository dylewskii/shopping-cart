import { useContext } from "react";
import styles from "./CartPage.module.css";
import CartItem from "../../components/cart-item/CartItem";
import formatCurrency from "../../utils/formatCurrency";
import CartContext from "../../context/CartContext";

export default function CartPage() {
  const { cartItems, handleRemoveFromCart } = useContext(CartContext);

  const calculateCostOfCart = () => {
    const allPrices = cartItems.map((item) => parseInt(item.price));
    const total = allPrices.reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  const SHIPPING_COST = 15;
  const subTotal = calculateCostOfCart();
  const cartTotal = subTotal + SHIPPING_COST;

  return (
    <section className={styles.cartPageWrapper}>
      {cartItems.length === 0 ? (
        <h2 className={styles.cartHeading}>Your Cart is Empty</h2>
      ) : (
        <div className={styles.cartWrapper}>
          <div className={styles.cartSummary}>
            <header className={styles.cartHeader}>
              <h3 className={styles.cartHeading}>Your Cart</h3>
              <p className={styles.cartTotalPrice}>
                {formatCurrency(cartTotal)}
              </p>
            </header>
            <div className={styles.cartItems}>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id}>
                  <CartItem.ProductImage
                    src={cartItem.src.front}
                    alt={cartItem.alt}
                  />
                  <CartItem.Info>
                    <CartItem.Title>{cartItem.brand}</CartItem.Title>
                    <CartItem.Description>
                      {cartItem.description}
                    </CartItem.Description>
                    <CartItem.Color>Color: {cartItem.color}</CartItem.Color>
                    <CartItem.Size>Size: {cartItem.size}</CartItem.Size>
                    <CartItem.RemoveBtn
                      handleRemoveFromCart={() =>
                        handleRemoveFromCart(cartItem.id)
                      }
                    >
                      Remove
                    </CartItem.RemoveBtn>
                  </CartItem.Info>
                  <CartItem.Price>
                    {formatCurrency(cartItem.price)}
                  </CartItem.Price>
                </CartItem>
              ))}
            </div>
          </div>
          <div className={styles.orderSummary}>
            <h4 className={styles.orderSummaryHeading}>Order Summary</h4>
            <div className={styles.subtotalBox}>
              <p>Subtotal &#40;incl VAT&#41;</p>
              <p>{formatCurrency(subTotal)}</p>
            </div>
            <div className={styles.shippingBox}>
              <p>Shipping & Handling</p>
              <p>{formatCurrency(SHIPPING_COST)}</p>
            </div>
            <div className={styles.totalBox}>
              <p>Total</p>
              <p>{formatCurrency(cartTotal)}</p>
            </div>
          </div>
          <div className={styles.checkoutBox}>
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
}
