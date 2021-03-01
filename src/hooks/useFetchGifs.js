import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=> {
        getGifs( category )
            .then(imgs => setstate({
                data: imgs,
                loading: false
            })); // Los efectos no pueden ser async porque esperan algo síncrono, entonces uso .then
    }, [ category ]); // Se ejecuta cuando el componente se renderiza por primera vez
    // Si la category cambia entonces vuelve a ejecutar este efecto. para eso la ponemos enntre los []
    


    return state; // { data: [], loading: true }
}