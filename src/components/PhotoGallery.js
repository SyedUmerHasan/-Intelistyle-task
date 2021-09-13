import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import ImageGallery from 'react-image-gallery';
import "../styles/PhotoGallery.css"
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function PhotoGallery() {
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
          <div className="product-heading">
            Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack
          </div>
          <a href="#">Visit the Amazon Basics Store</a>
          <div className="flexbox flex-row rating">
            <a><i class="fas fa-star"></i></a>
            <a><i class="fas fa-star"></i></a>
            <a><i class="fas fa-star"></i></a>
            <a><i class="fas fa-star"></i></a>
            <a><i class="fas fa-star-half-alt"></i></a>
          </div>
          <div className="product-left">
            10 Items Left
          </div>
          <div className="product-amount">
            277
            <span className="currency">$</span>
          </div>
          <div className="flexbox flex-row gap-2">
            <div class="select">
              <select>
                <option value="1">Size: S</option>
                <option value="2">Size: M</option>
                <option value="3">Size: L</option>
              </select>
            </div>
            <div class="quantity">
              <input type="number" min="1" max="9" step="1" value="1" />
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-description-heading">Description</div>
          <div className="product-description">
            IN THE BOX: 48-pack of 1.5 volt AA alkaline batteries for reliable performance across a wide range of devices
            DEVICE COMPATIBLE: Ideal for game controllers, toys, flashlights, digital cameras, clocks, and more
            DESIGNED TO LAST: 10-year leak-free shelf life; store for emergencies or use right away
            EASY USE & STORAGE: Ships in Certified Frustration-Free Packaging
            SINGLE USE: These batteries are NOT rechargeable; for rechargeable options, check out Amazon Basics rechargeable batteries
          </div>
          <div className="social-share-heading">SHARE THIS</div>
          <div className="social-share flexbox flex-row">
            <div><i class="fab fa-facebook"></i></div>
            <div><i class="fab fa-instagram"></i></div>
            <div><i class="fab fa-twitter"></i></div>
            <div><i class="fab fa-google"></i></div>
          </div>
        </div>
      </div>

    </div>
  )
}
