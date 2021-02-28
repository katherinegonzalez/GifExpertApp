import React, { useState, useEffect } from 'react'

// useEffect -> me eprmite ejecutar cierto código de manera condicionada.

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=> {
        getGifs();
    }, []); // Se ejecuta cuando el componente se renderiza por primera vez

    const getGifs = async () => {
        
        const url = 'http://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=ehCxuH2BVdfrlfRwY0km2tRg2nwAw4LJ';
        const resp = await fetch(url);
        const { data } = await resp.json();

        
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        setImages( gifs );
    }

    

    return (
        <div>
            <h3>{category}</h3>
            <ol>
            { 
                images.map(({id, title}) =>
                    <li key= {id}> {title } </li>
                )
            }
                
            </ol>
        </div>
    )
}
