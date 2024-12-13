export default function FilterProduct({ product }) {
    return (
        <>
            <SearchComponents />
            <ProductComponent products={product} />
        </>
    )
}

function SearchComponents() {
    return (
        <>
            <form>
                <input type="text" placeholder="Search..." />
                <label >
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </label>
            </form>
        </>
    )
}

function ProductComponent({ products }) {
    const rows = []
    let isCategory = null

    products.forEach((product) => {
        if (isCategory !== product.category) {
            rows.push(
                <CategoryRow category={product.category} key={product.category} />
            )
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        )
        isCategory = product.category
    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </>
    )
}

function CategoryRow({ category }) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}