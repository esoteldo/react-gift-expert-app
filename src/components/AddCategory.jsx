import { useState } from "react"


export const AddCategory=({onNewCategories})=>{
    const [inputValue,setInputValue]=useState('')

    const onInputChange=({target})=>{
        setInputValue(target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        console.log(inputValue);

        if(inputValue.trim().length <=1) return;

        onNewCategories(inputValue.trim());
        setInputValue('');
        
    }
    return(
        <form onSubmit={onSubmit}>
            
            <input
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={onInputChange}
            />
        </form>
    )
}