import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchbar';
import { render } from '@testing-library/react';
import DisplayContent from "./components/display";

function App() {
  const [searchTerm, setSearchTerm] = React.useState('stargazers');
  const handleSearchChange = key => {
    setSearchTerm(key);    
  };

  return (
    <div>
      <SearchBar initSearch={searchTerm} onSearchChange={handleSearchChange}></SearchBar>
      <div className="mainbox">
        <DisplayContent search={searchTerm}></DisplayContent>
        <hr className="my-4"></hr>
      </div>  
    </div>
  );
}

export default App;

