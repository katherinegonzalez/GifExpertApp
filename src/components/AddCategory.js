import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        console.log('HandleInputChange llamado');
    }
    const handleSubmit = (event) => {
        event.preventDefault();  // Para prevenir el comportamiento por defecto del form, que en este caso serìa renderizar todo cuando se hace enter, pero no queremos que pase
        console.log('Submit hecho', inputValue);

        if(inputValue.trim().length > 2 ){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
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
