import React from "react";

import ProductCard from './ProductCard';

class ProductsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.products.map(product => (
                    <div style={styles.item}> 
                      <ProductCard product={product} />
                    </div>
                ))}
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