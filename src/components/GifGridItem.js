import React from 'react';

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={ url } className="img-grid" alt={ title }/>
            <p className="p-grid">{ title }</p>
        </div>
    )
}

export default GifGridItem;