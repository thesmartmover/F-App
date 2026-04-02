import React from "react";

import ProductCard from './ProductCard';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { onlyDiscounts: false };
    }
    
    toggleDiscounts() {
        this.setState({ onlyDiscounts: !this.state.onlyDiscounts });
    }

    render() {
        const { onlyDiscounts } = this.state;
        return (
            <div>
                <button
                    onClick={() => this.toggleDiscounts()}
                >
                    Show only discounts
                </button>
                {
                    this.props.products
                        .filter(p => p.Discount || !onlyDiscounts)
                        .map((product) => (
                            <div key={product.Id} style={styles.item}> 
                                <ProductCard product={product} />
                            </div>
                        ))
                }
            </div>
        );
    }
}

export default ProductsList;

const styles = {
    item: {
        marginBottom: '25px'
    }
}