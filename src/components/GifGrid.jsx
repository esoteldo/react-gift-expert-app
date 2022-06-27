import {  useState } from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftItem } from "./GiftItem";



export const GifGrid =({category}) => {


  /* Hook peronalizado */
  const {images,isLoading}=useFetchGifts(category);
  
  
  return (
    <>
    {
    isLoading && (<h2>Cargando...</h2>)
    }
    {
    !isLoading && (<h3>{category}</h3>)
    }
    <div className="card-grid">
      {images.map(images=>(
        <GiftItem key={images.id} title={images.title} images={images.url}/>
      ))}
    </div>
    </>
  )
}
