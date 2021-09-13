import React from 'react'

export default function ProductItem(props) {
    const {
        product_id,
        price,
        product_description,
        image_urls,
        product_title,
        currency_code,
        stock,
        brand,
        product_categories
    } = props
    return (
        <div className="product-item flexbox flex-column  justify-content-space-between">
            <div className="product-image">
                <img src={image_urls} />
            </div>
            <div className="product-item-content">
                <div className="product-item-heading">
                    { product_title || "Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"}
                </div>
                <div className="flexbox flex-row justify-content-space-between">
                    <div className="flexbox flex-row rating">
                        <a><i className="fas fa-star"></i></a>
                        <a><i className="fas fa-star"></i></a>
                        <a><i className="fas fa-star"></i></a>
                        <a><i className="fas fa-star"></i></a>
                        <a><i className="fas fa-star-half-alt"></i></a>
                    </div>
                    <div className="price">{price} <span>{currency_code}</span></div>
                </div>
            </div>
        </div>
    )
}
