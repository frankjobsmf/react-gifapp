import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFecthGifs = ( category ) => {
    const [ value, setValue ] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category ).then( resp =>
            setTimeout( () => {
                setValue({
                    data: resp,
                    loading: false
                })
            }, 3000)
         );
    }, [category]);

    return value;
}