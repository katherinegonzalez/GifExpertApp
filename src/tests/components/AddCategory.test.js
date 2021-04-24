import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper;
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { target: { value: value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('No debe postear la información con submit', () => { 
        wrapper.find('form').simulate('submit', { preventDefault(){}});
      
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'Hola Mundo' }});
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        
        expect(setCategories).toHaveBeenCalled(); // ToHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //que se llama con cualquier tipo de función
        expect(input.props().value).toBe(''); // o input.prop('value')
    });
    
});



