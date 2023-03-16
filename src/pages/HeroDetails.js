import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { getHeroes } from "../data";

import MD5 from "crypto-js/md5";

export default function HeroDetails({heroDetails}) {
    let [heroeDetails, setHeroeDetails] = useState(null)    
    let { id } = useParams()
    console.log(heroDetails)

    useEffect(() => {
        getDataDetails()
    }, [])

    async function getDataDetails() {
        
        // let ts = Date.now().toString()
        let ts = Number(new Date())
        const keyPublic = process.env.REACT_APP_API_PUBLIC_KEY
        const keyPrivate = process.env.REACT_APP_API_PRIVATE_KEY
        let hash = MD5(ts+keyPrivate+keyPublic)
        // let hash = md5("200984654b75fa5249405c92bbc8ae6749e070cd1cfce50474be24a9adb292b931d38ea")
        let url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${keyPublic}&hash=${hash}`

        try{
            let response = await fetch(url);
            const data = await response.json();
            console.log(data)
            setHeroeDetails(data?.data?.results[0])
        } catch(error) {
            console.log(error)
        } 
        

    }
    // let index = heroDetails?.data?.results?.findIndex((hero) => hero.id === id)
    // let hero = heroDetails?.data?.results[index]
    // console.log(hero)
    console.log(heroeDetails)
    return (
        
        <div>
            <h1>{heroeDetails?.name}</h1>
            <img
                                style={{ width: "300px" }}
                                src={`${heroeDetails?.thumbnail?.path}.${heroeDetails?.thumbnail?.extension}`}
                                alt={heroeDetails?.name}

                            />
                            <h2>{heroeDetails?.description}
                    </h2>
                    
        </div>
    )
}