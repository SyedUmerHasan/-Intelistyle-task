import React, { useState } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import "./App.css"
import ProductRecommendation from './components/ProductRecommendation';
import Shop from './components/Shop';
const { Map, List, fromJS } = require('immutable');
var products = {};
var category = new Set();
var source = new Set();
var gender = new Set();

function App() {

  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetch("/shop-items.json", {})
      .then(response => response.json())
      .then(json => {
        
        json.map(element => {
          category.add(element.product_categories[0])
          source.add(element.source)
          gender.add(element.gender)
          products[element.product_id] = element
        });
        setLoading(true)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    <div>
      {loading ? <>
        <Header></Header>
        <Shop products={products} category={category} source={source} gender={gender}></Shop>
        <PhotoGallery></PhotoGallery>
        <ProductRecommendation></ProductRecommendation>
      </> : "loading..."}
    </div>
  );
}

export default App;
