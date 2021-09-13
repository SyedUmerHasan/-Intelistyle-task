import React from 'react'
import "../styles/Shop.css"
import ProductItem from './ProductItem';

export default function Shop({ products, category, source, gender }) {
    console.log(products)
    return (
        <div id="shop-grid-top">
            <div id="shop-grid" className="grid gap-3">
                <div id="filter-area">
                    <div>
                        <h3>Category</h3>
                        <div className="select">
                            <select name="category">
                                {Array.from(category).map((value) => {
                                    return <option value={value}>{value}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Gender</h3>
                        <div className="select">
                            <select name="gender">
                                {Array.from(gender).map((value) => {
                                    return <option value={value}>{value}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Source</h3>
                        <div className="select">
                            <select name="source">
                                {Array.from(source).map((value) => {
                                    return <option value={value}>{value}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div id="shop-content">
                    <div className="grid grid-columns-4 grid-columns-mobile-1 justify-content-space-between gap-2">
                        {Array.from(Object.keys(products).slice(0, 20)).map((value) => {
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
            </div>
        </div>
    )
}
