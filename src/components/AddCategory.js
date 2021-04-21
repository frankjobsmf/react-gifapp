import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { categories, setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evita que la pagina se recargue al presionar enter en un formulario

        if (inputValue === ''){
            return;
        }

        if (categories.includes(inputValue) === true){
            setInputValue('');
            return ;
        }

        setCategories([ inputValue, ...categories ]); //agregando valor obtenido a arreglo
        setInputValue(''); //reset para inputValue
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="input-group mb-3">
                <button 
                    onClick={ handleSubmit }
                    className="btn btn-primary"
                    type="button" 
                    id="button-addon1"
                    > Agregar 
                </button>
                <input 
                    type="text" 
                    className="form-control" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                    placeholder="Buscar gifs"
                />
            </div>
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.isRequired
}

export default AddCategory;
