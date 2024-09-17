import './Product.css'

function Product(props) {
    return(
        <div id="products">
            <img src="https://github.com/dark1zinn.png" alt="product" />
            <br />
            <h3>This is the title</h3>
            <p>this is the description</p>
            <br /><br />
            <span>this is the product id</span>
            <button>buy/order button</button>
        </div>
    )
}

export default Product