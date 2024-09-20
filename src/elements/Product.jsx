import './Product.css'

function Product(props) {
    return(
        <div className="products">
            <img src={ props.img } alt="product" />
            <div className='product-stats'>
                <h3 className='product-title'>{ props.title }<span className='product-price'>R${ props.price }</span></h3>
                <p className='product-desc'>{ props.desc }</p>
                <span className='product-id'>ID: #{ props.productId }</span>
                <button className='product-ordernow'><a href={ props.orderLink } target="_blank">Fazer pedido</a></button>
            </div>
        </div>
    )
}

export default Product