import React from 'react'
import "../styles/ProductRecommendation.css"
import ProductItem from './ProductItem'

export default function ProductRecommendation({products}) {
    return (
        <div id="recommendation">
            <div className="grid grid-columns-3 justify-content-space-between gap-2 ">
                <h3>Matching with</h3>
            </div>
            <div className="grid grid-columns-5 grid-columns-mobile-1 justify-content-space-between gap-2">
                {Array.from(Object.keys(products).slice(0, 10)).map((value) => {
                    const eachProduct = products[value]
                    return <ProductItem product_id={eachProduct.product_id}
                        price={eachProduct.price}
                        product_description={eachProduct.product_description}
                        image_urls={eachProduct.image_urls}
                        product_title={eachProduct.product_title}
                        currency_code={eachProduct.currency_code}
                        stock={eachProduct.stock}
                        brand={eachProduct.brand}
                        product_categories={eachProduct.product_categories}></ProductItem>
                })}
            </div>
        </div>
    )
}
