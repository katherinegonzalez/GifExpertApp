import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

// useEffect -> me eprmite ejecutar cierto código de manera condicionada.

export const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs( category );
    console.log(loading);
    


    

    return (
        <>
        <h3>{category}</h3>
        { loading && <p>Loading...</p>}
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
