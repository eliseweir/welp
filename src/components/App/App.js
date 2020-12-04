import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';

const business = {
  imageSrc: './pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welp</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;