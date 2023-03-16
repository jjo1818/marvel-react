import { Link } from "react-router-dom";
import React from 'react'
import { Card } from "../components/Card";
import { useState, useEffect } from "react"
// import Grid from "./components/grid";
import { getHeroes } from "../data";
import HeroDetails from './HeroDetails';
import SearchBar from "../components/SearchBar";
// import Footer from "./components/Footer";

export default function Home() {
    let [heroes, setHeroes] = useState(null)
    let [input, setInput] = useState("spider")
    useEffect(() => {
        getData()
    }, [])

    function handleChange(evt) {
        setInput(evt.target.value)
    }
    async function getData() {

        let heroData = await getHeroes(input)
        console.log(heroData)
        setHeroes(heroData)

    }
    return (
        <div>
            <div className="header">

                <div className="SearchBar">
                    <h1>Discover Marvel Heroes</h1>
                    {/* <input type="search" placeholder='Search Here' value={input} onChange={handleChange} /> */}
                    <SearchBar input={input} handleChange={handleChange} />
                    <button onClick={getData}>Search</button>
                    
                </div>
                {/* <HeroDetails heroDetails={heroes} /> */}
                {/* nested objects */}
                {heroes?.data?.results?.map(x => {
                    return (
                        <div>
                            
                        {<Card x={x} />}
                    </div> )
                    
                })}

        </div>
        </div >
        
    )
}
