import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import ImageGallery from 'react-image-gallery';
import "../styles/PhotoGallery.css"
import { useHistory, useParams } from "react-router-dom";
import ProductRecommendation from './ProductRecommendation';

const _PhotoGallery = (props) => {
  const {
    products
  } = props
  let history = useHistory();
  let { id } = useParams();
  const product = products[id]
  let images = [{
    original: product.image_urls[0],
    thumbnail: product.image_urls[0],
  }]
  return (
    <div>
      <div className="product-promotion flexbox justify-content-center">
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/sns/ILM/XCM_Manual_1344152_1757214_US_us_pc_ilm_2x_us_en_3937419_650x45_1X_en_US._CB665623586_.jpg" />
      </div>
      <div id="product" className="flexbox flex-row gap-2">
        <div id="product-image">
          <ImageGallery items={images} thumbnailPosition="left" />
        </div>
        <div id="product-content" className="flexbox flex-column gap-1">
          <div>
            <div onClick={history.goBack}>Go Back</div>
          </div>
          <div className="product-heading">
            {product.product_title}
          </div>
          <a href="#">Visit the Amazon Basics Store</a>
          <div className="flexbox flex-row rating">
            <a><i className="fas fa-star"></i></a>
            <a><i className="fas fa-star"></i></a>
            <a><i className="fas fa-star"></i></a>
            <a><i className="fas fa-star"></i></a>
            <a><i className="fas fa-star-half-alt"></i></a>
          </div>
          <div className="product-left">
          {product.stock} Items Left
          </div>
          <div className="product-amount">
          {product.price} 
            <span className="currency">{product.currency_code}</span>
          </div>
          <div className="flexbox flex-row gap-2">
            <div className="select">
              <select>
                <option value="1">Size: S</option>
                <option value="2">Size: M</option>
                <option value="3">Size: L</option>
              </select>
            </div>
            <div className="quantity">
              <input type="number" min="1" max="9" step="1" value="1" />
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-description-heading">Description</div>
          <div className="product-description">
            {product.product_description}
          </div>
          <div className="social-share-heading">SHARE THIS</div>
          <div className="social-share flexbox flex-row">
            <div><i className="fab fa-facebook"></i></div>
            <div><i className="fab fa-instagram"></i></div>
            <div><i className="fab fa-twitter"></i></div>
            <div><i className="fab fa-google"></i></div>
          </div>
        </div>
      </div>
      <ProductRecommendation products={products}></ProductRecommendation>
    </div>
  )
}
export default React.memo(_PhotoGallery)
