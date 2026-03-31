import React from "react";

import ProductCard from './ProductCard';

class App extends React.Component {
    render() {
        return (
            <>
                <header style={styles.header}>tnShop</header>
                <main style={styles.main}>
                    <ProductCard product={this.props.product} />
                </main>
                <footer style={styles.footer}>
                    &copy; {new Date().getFullYear()}, @thesmartmoover
                </footer>
            </>
        );
    }
}

export default App;

const styles = {
    header: {
        backgroundColor: '#222222',
        color: '#fff',
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
    main: {
        padding: '10px 10%'
    },
    footer: {
        padding: '0 10%',
        marginTop: '50px'
    }
};