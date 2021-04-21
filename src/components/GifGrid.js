import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const { data, loading } = useFecthGifs( category );

    console.log( data );
    console.log( loading );

    return (
        <div>

            <h3>{ category }</h3>

            { loading ? <h3 className="animate__animated animate__bounce">Cargando gifs</h3>: '' }
            {
                data.map( img => (
                    <GifGridItem 
                        key={img.id}
                        title={img.title}
                        url={img.url} 
                    />
                ))
            }
            
        </div>
    );
}

export default GifGrid;
