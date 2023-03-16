import React from "react";


export default function SearchBar({ input, handleChange}) {
  
  return<input type="search" placeholder='Search Here' value={input} onChange={handleChange} />
}