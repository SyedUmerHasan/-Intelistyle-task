import React, { useState } from 'react';
import Header from './components/Header';
import PhotoGallery from './components/PhotoGallery';
import "./App.css"
import Shop from './components/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
        category.add("All")
        source.add("All")
        gender.add("All")
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
      <Router>
        {loading ? <>
          <Header></Header>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Shop products={products} category={category} source={source} gender={gender}></Shop>
            </Route>
            <Route path="/shop" exact>
              <Shop products={products} category={category} source={source} gender={gender}></Shop>
            </Route>
            <Route path="/details/:id"
              exact>
              <PhotoGallery products={products}></PhotoGallery>
            </Route>
          </Switch></> : "loading..."}
        {/* <ProductRecommendation products={products}></ProductRecommendation> */}
      </Router>
    </div>
  );
}

export default App;
