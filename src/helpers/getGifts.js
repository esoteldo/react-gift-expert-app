export const getGifs=async(category)=>{

    const url=`https://api.giphy.com/v1/gifs/search?api_key=ZYLjiGRM64bKRZQsW5EQnpAymWTki70w&q=${category}&limit=10`;

    try{
    const res = await fetch(url);
    const {data}=await res.json();
    const gift=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
      })
      );
      return gift;
    }catch(e) {
            console.log("Can't connect to backend try latter:",e);

        }

   /*  fetch (url)
    .then(res =>{ return res.json();})
    .then(res => { 
        const {data}=res;
         const gift=data.map(img=>({
          id:img.id,
          title:img.title,
          url:img.images.downsized_medium.url
        })
        );
      
    })
    .catch(function(e) {
      console.log("Can't connect to backend try latter:",e);
    }); */
    
    

  }