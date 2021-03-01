import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

// useEffect -> me eprmite ejecutar cierto código de manera condicionada.

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=> {
        getGifs( category )
            .then(setImages);
    }, [ category ]); // Se ejecuta cuando el componente se renderiza por primera vez
    // Si la category cambia entonces vuelve a ejecutar este efecto. para eso la ponemos enntre los []
    

    

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
            <ol>
            { 
                images.map(img =>
                    <GifGridItem 
                        key={ img.id }
                        { ...img } />
                )
            }
                
            </ol>
        </div>
        </>
    )
}
