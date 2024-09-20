import Product from './Product'
import './Gallery.css'

function Gallery() {
    return(
        <div id="gallery">
            <Product title="Camisa" desc="É baratinho." price="12,99" productId="28653" img="https://github.com/dark1zinn.png" orderLink="https://google.com" />
            <Product />
        </div>
    )
}

export default Gallery