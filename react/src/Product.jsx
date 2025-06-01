import ProductCard from "./component/ProductCard"
import bgImg from "./assets/1.jpg"
import InteractiveButtons from "./component/InteractiveButtons"

function Product() {
    return(
        <div>
            <div className="topic">
                <h1>product</h1>
                <h2>Product & Service</h2>
            </div>

            <div className="ProductCard-display">
                <ul>
                    <ProductCard imgSrc = {bgImg}>
                        <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi enim laboriosam aliquid.</p>
                        <InteractiveButtons />
                    </ProductCard>
                    <ProductCard imgSrc = {bgImg}>
                        <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi enim laboriosam aliquid.</p>
                        <InteractiveButtons />
                    </ProductCard>
                    <ProductCard imgSrc = {bgImg}>
                        <h3 className="text-xl font-bold mb-2">Lorem Ipsum</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi enim laboriosam aliquid.</p>
                        <InteractiveButtons />
                    </ProductCard>
                </ul>
            </div>
        </div>
    )
}
export default Product