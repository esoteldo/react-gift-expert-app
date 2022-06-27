import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifts";

const obtenerImg=async (category,setImages,setIsLoading)=>{
    const getimages= await getGifs(category);
   setImages(getimages);
   setIsLoading(false);
   }

export const useFetchGifts = (category) => {
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

  useEffect(()=>{

    obtenerImg(category,setImages,setIsLoading);
   
  },[]);

  return {
    images,
    isLoading
  }
}
