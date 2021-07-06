import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    
    });
    

});
