import { useState } from 'react';
import data from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


function ProductPage() {
    const [products, setProducts] = useState(data);
    const [displayProducts, setDisplayProducts] = useState(data);

    const filterProduct = (value) => {
        const products0 = [...products];
        let filteredProducts = products0.filter(product => product.name.toLowerCase().includes(value));
        setDisplayProducts(filteredProducts);
    }

    const check = (input) => {
        if (input) {
            const products1 = [...products];
            let filteredProducts = products1.filter(product => product.inStock === true);
            setDisplayProducts(filteredProducts);
        } else {
            setDisplayProducts(products);
        }
    }
    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar filterProduct={filterProduct} check={check} />
            <ProductTable products={displayProducts} />
        </div>
    )
}

export default ProductPage