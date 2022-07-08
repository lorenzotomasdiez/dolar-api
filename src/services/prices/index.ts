import axios from 'axios';
import {load} from 'cheerio';

export const createScrap = async() => {
    const url = "https://dolarhoy.com/cotizaciondolarblue";
    const response = await axios.get(url);
    const $ = load(response.data);
    const genre = $("h1").text(); 
    return genre;
}

/* 
const axios = require('axios');

const url = "https://dolarhoy.com/cotizaciondolarblue";

async function getGenre(){
    try {
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        const genre = $("h1").text(); 

        console.log(genre);

    } catch (error) {
        console.error(error);
    }
}

getGenre(); */