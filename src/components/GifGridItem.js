import React from 'react'

export const GifGridItem = ( {id, title, url }) => {
    console.log();
    return (
        <div className="card">
           <img src={ url } alt={ title } />
           <p>{title}</p>
        </div>
    )
}
