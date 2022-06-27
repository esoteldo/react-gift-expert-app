import { useState } from "react"
import { AddCategory,GifGrid } from "./components";
 
 
 export const GiftExpertApp=()=>{

    const [categories, setCategories]=useState(['one punch']);

    const AgregarCategoria=(data)=>{
        
       /* let repetido=false;

       const seRepite=()=>{
            categories.map(cat=>{
            if (data==cat)
                repetido= true;
             });
        }
        seRepite();
        if(!repetido) setCategories(cat=>[...cat,data]); */

        if(categories.includes(data)) return;

        setCategories(cat=>[data,...cat]);

    }
    return(
        <>
        
        <h1>Gif Expert App</h1>
        
        <AddCategory onNewCategories={(data)=>AgregarCategoria(data)}/>

            {categories.map(category=>(
               <GifGrid 
                key={category} 
                category={category}
                />
            ))}
            
        </>
    )
}
