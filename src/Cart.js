import React from "react";

import ProductsList from "./ProductsList";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      shipping: true
    };

    this.removeFromCart = this.removeFromCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  removeFromCart (productId) {
    this.setState((state) => ({
      items: state.items.filter(item => item.Id != productId)
    }));
  }

  addToCart (product) {
    this.setState((state) => ({
      items: [...state.items, product]
    }));
  }


  render() {
    const { items } = this.state;
    const { products } = this.props;

    return (
      <div>
        <div>
        <h1>Cart</h1>
        <CartItems removeFromCart={this.removeFromCart} items={items} />
        </div>
        <div>
          <ProductsList addToCart={this.addToCart} products={this.props.products} />
        </div>
      </div>
    );
  }
}

export default Cart;

const CartItems = ({ items, removeFromCart }) => (
  items.length > 0 ?
  <table style={styles.table}>
    <tbody>
      {
        items.map(item => (
          <tr>
            <Column>{item.Title}</Column>
            <Column>${item.Price}</Column>
            <Column>
              <button onClick={() => removeFromCart(item.Id)}>Cancel</button>
            </Column>
          </tr>
        ))
      }
    </tbody>
  </table>
  : <div>Cart is empty</div>
);

const Column = ({ children }) => (
  <td style={styles.td}>{children}</td>
);

const styles = {
  table: {
    border: "1px solid #222",
    borderCollapse: "collapse"
  },
  td: {
    border: "1px solid #222",
    padding: "12px"
  }
}