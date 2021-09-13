import React from 'react'
import "../styles/ProductRecommendation.css"
import ProductItem from './ProductItem'

export default function ProductRecommendation() {
    return (
        <div id="recommendation">
            <div className="grid grid-columns-3 justify-content-space-between gap-2 ">
                <h3>Matching with</h3>
            </div>
            <div className="grid grid-columns-3 grid-columns-mobile-1 justify-content-space-between gap-2">
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
                <ProductItem></ProductItem>
            </div>
        </div>
    )
}
