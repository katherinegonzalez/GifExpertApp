import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();  // Para prevenir el comportamiento por defecto del form, que en este caso serìa renderizar todo cuando se hace enter, pero no queremos que pase
        // console.log('Submit hecho');

        if(inputValue.trim().length > 2 ){
            setCategories(cats => [...cats, inputValue]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}