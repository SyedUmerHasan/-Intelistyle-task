import React, { useState } from 'react'
import "../styles/Shop.css"
import ProductItem from './ProductItem';
const dataLimit = 20;
const pageLimit = 10;
var _category = ""
var _brand = ""
var _gender = ""
var _title = ""
var _min = ""
var _max = ""

const Shop = ({ products, category, source, gender }) => {
    const [page, setPage] = useState(1)
    const [update, setUpdate] = useState(0)
    let [currentProducts, updateCurrentProducts] = useState(products)

    React.useEffect(() => {
        if (products) {
            _category = new URLSearchParams(window.location.search).get("category")
            _brand = new URLSearchParams(window.location.search).get("brand")
            _gender = new URLSearchParams(window.location.search).get("gender")
            _title = new URLSearchParams(window.location.search).get("title")?.toLowerCase()
            _min = new URLSearchParams(window.location.search).get("min")
            _max = new URLSearchParams(window.location.search).get("max")

            updateCurrentProducts(() => {
                return Object.values(products)
                    .filter((eachProduct) => {
                        const titleArray = _title.split(" ")
                        const titleStatus = titleArray.find((eachTitle) => { return eachProduct.product_title.toLowerCase().includes(eachTitle) })
                        // return ((!_title || eachProduct.product_title.toLowerCase().includes(_title)) &&
                        return ((!_title || titleStatus) &&
                            (!_gender || (_gender == "All" || eachProduct.gender === _gender)) &&
                            (!_category || (_category == "All" || eachProduct.product_categories[0] === _category)) &&
                            (!_brand || (_brand == "All" || eachProduct.brand === _brand))) && 
                            (!_min || eachProduct.price > _min) &&
                            (!_max || eachProduct.price < _max)
                    })
            })
        }
    }, [update])

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = page * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return Object.keys(currentProducts).slice(startIndex, endIndex)
    };

    const getPaginationGroup = () => {
        let start = Math.floor((page - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div id="shop-grid-top">
            <div id="shop-grid" className="grid gap-3">
                <div id="filter-area">
                    <div>
                        <h3>Search</h3>
                        <input autocomplete="false" id="search-items"
                            type="text" name="search" placeholder="Search.."
                            onKeyUp={(e) => {
                                setTimeout(() => {
                                    let searchParams = new URLSearchParams(window.location.search);
                                    searchParams.set("title", e.target.value);
                                    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                                    window.history.pushState({ path: newurl }, '', newurl);
                                    setUpdate((update) => update + 1)
                                }, 1000)
                            }}
                        />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <div className="select">
                            <select name="category" onChange={(e) => {
                                let searchParams = new URLSearchParams(window.location.search);
                                searchParams.set("category", e.target.value);
                                let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                                window.history.pushState({ path: newurl }, '', newurl);
                                setUpdate((update) => update + 1)
                            }}>
                                {Array.from(category).map((value) => {
                                    return <option value={value} selected={_category == value ? true : false}>{value}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Gender</h3>
                        <div className="select">
                            <select name="gender" onChange={(e) => {
                                let searchParams = new URLSearchParams(window.location.search);
                                searchParams.set("gender", e.target.value);
                                let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                                window.history.pushState({ path: newurl }, '', newurl);
                                setUpdate((update) => update + 1)
                            }}>
                                {Array.from(gender).map((value) => {
                                    return <option value={value} selected={_gender == value ? true : false}>{value}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Brand</h3>
                        <div className="select">
                            <select name="brand" onChange={(e) => {
                                let searchParams = new URLSearchParams(window.location.search);
                                searchParams.set("brand", e.target.value);
                                let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                                window.history.pushState({ path: newurl }, '', newurl);
                                setUpdate((update) => update + 1)
                            }}>
                                {Array.from(source).map((value) => {
                                    return <option value={value} selected={_brand == value ? true : false}>{value}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        <h3>Price</h3>
                        <div className="flexbox flex-row gap-2">
                            <input autocomplete="false" className="amount-filter"
                                type="number" placeholder="Min"
                                onKeyUp={(e) => {
                                    let searchParams = new URLSearchParams(window.location.search);
                                    searchParams.set("min", e.target.value);
                                    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                                    window.history.pushState({ path: newurl }, '', newurl);
                                    setUpdate((update) => update + 1)
                                }}
                            />
                            <input autocomplete="false" className="amount-filter"
                                type="number" placeholder="Max"
                                onKeyUp={(e) => {
                                    let searchParams = new URLSearchParams(window.location.search);
                                    searchParams.set("max", e.target.value);
                                    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
                                    window.history.pushState({ path: newurl }, '', newurl);
                                    setUpdate((update) => update + 1)
                                }}
                            />

                        </div>
                    </div>
                </div>
                <div id="shop-content">
                    <div className="grid grid-columns-4 grid-columns-mobile-1 justify-content-space-between gap-2">
                        {getPaginatedData().length > 0 ? getPaginatedData().map((value) => {
                            const eachProduct = currentProducts[value]

                            return <ProductItem product_id={eachProduct.product_id || "000"}
                                price={eachProduct.price}
                                product_description={eachProduct.product_description}
                                image_urls={eachProduct.image_urls}
                                product_title={eachProduct.product_title}
                                currency_code={eachProduct.currency_code}
                                stock={eachProduct.stock}
                                brand={eachProduct.brand}
                                product_categories={eachProduct.product_categories}></ProductItem>
                        }) : "No products found"}
                        {console.log("getPaginatedData() => ", getPaginatedData())}
                        {console.log("currentProducts() => ", currentProducts)}
                    </div>
                </div>
            </div>
            <div className="flexbox justify-content-center pagination">
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${page === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default React.memo(Shop)
