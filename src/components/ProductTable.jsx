import ProductRow from "./ProductRow";

function ProductTable(props) {
    const { products } = props;

    return (
        <table className="table table-striped border-top border-bottom" >
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead >
            <tbody>
                {products.map(product => {
                    return <ProductRow product={product} key={product.id} />
                })}
            </tbody>
        </table >
    )
}

export default ProductTable