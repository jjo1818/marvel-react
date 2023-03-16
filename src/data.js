import MD5 from "crypto-js/md5";

// fetch api

export async function getHeroes (input) {
    let herodata;
    // let ts = Date.now().toString()
    let ts = Number(new Date())
    const keyPublic = process.env.REACT_APP_API_PUBLIC_KEY
    const keyPrivate = process.env.REACT_APP_API_PRIVATE_KEY
    let hash = MD5(ts+keyPrivate+keyPublic)
    // let hash = md5("200984654b75fa5249405c92bbc8ae6749e070cd1cfce50474be24a9adb292b931d38ea")
    let url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&ts=${ts}&apikey=${keyPublic}&hash=${hash}`

    try{
        let response = await fetch(url);
        herodata = await response.json();
        console.log(herodata)
    } catch(error) {
        console.log(error)
    } 
    return herodata 
}


