import { useState } from "react";
import styles from "./CartPage.module.css";
import CartItem from "../../components/cart-item/CartItem";
import formatCurrency from "../../utils/formatCurrency";

export default function CartPage() {
  const [cartItem, setCartItems] = useState(["shoes"]);
  return (
    <section className={styles.cartPageWrapper}>
      {cartItem.length === 0 ? (
        <h2 className={styles.cartHeading}>Your Cart is Empty</h2>
      ) : (
        <div className={styles.cartWrapper}>
          <div className={styles.cartBox}>
            <header className={styles.cartHeader}>
              <h3 className={styles.cartHeading}>Your Cart</h3>
              <p className={styles.cartTotalPrice}>{formatCurrency(1000)}</p>
            </header>
            <div className={styles.cartItems}>
              <CartItem>
                <CartItem.ProductImage src={"./sdc"} alt={"Test Img"}>
                  Testing Item 1
                </CartItem.ProductImage>
                <CartItem.Info>
                  <CartItem.Title>Testing Item 1</CartItem.Title>
                  <CartItem.Description>
                    Testing Description 1
                  </CartItem.Description>
                  <CartItem.Color>Color: Black</CartItem.Color>
                  <CartItem.Remove>Remove</CartItem.Remove>
                </CartItem.Info>
                <CartItem.Price>{formatCurrency(10)}</CartItem.Price>
              </CartItem>
            </div>
          </div>
          <div className={styles.orderSummary}>
            <h4>Order Summary</h4>
          </div>
        </div>
      )}
    </section>
  );
}