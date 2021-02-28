import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];

    const [categories, setCategories] = useState(['One Punch']);

    /*const handleAdd = () => {
        // setCategories([...categories, 'HunterXHunter']); ó también se puede:
        setCategories(cats => [...cats, 'HunterXHunter']);
    }*/

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr />
            {/* <button onClick={()=> handleAdd()}>Agregar</button> */}
            <AddCategory setCategories={setCategories} />
            <ol>
                { 
                    categories.map(category =>
                        <GifGrid 
                            key={category}
                            category={category} />
                        )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;