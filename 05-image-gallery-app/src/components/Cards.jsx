import React, { useState,useEffect, useCallback } from "react";
import Card from "./Card";
import FormularioBuscador from "./FormularioBuscador";

const Cards = () => {
    //const load = Loading();
    const [Imgs, setImgs] = useState([]);
    const [Search, setSearch] = useState("")

    const [Page, setPage] = useState(1)
    const [StatusLoading, setStatusLoading] = useState(false)
    
    const getImgs = useCallback(async () => {

        setStatusLoading(true)
        const apiKey = "client_id=da3mbfEiZewXXR5P19FOY_H_koSzP10nh9qIm49lG0c";
        let url = `https://api.unsplash.com/photos?page=${Page}&${apiKey}`;
        if (Search !== "") {
            url = `https://api.unsplash.com/search/photos?page=${Page}&query=${encodeURI(
                Search
            )}&per_page=50&${apiKey}`;
        }

       const response = await fetch(url);
       const data = await response.json();
       if (data.results) {
           setImgs(data.results);
       } else {
           setImgs(data);
       }
       setStatusLoading(false);
       
   },[Search,Page]);

    useEffect(() => {
        getImgs(Search);
    }, [Search, getImgs]);

   const handleSubmit = (e)=>{
       e.preventDefault();
       const text = e.target[0].value;
       setSearch(text)
   }

   const cambiarPage = (page) => {
       setPage(()=>{return page});
       getImgs();
   }

   const crearBotonPage = ()=>{

        let botones = []
        for (let index = 1; index < 6; index++) {
                botones.push(
                    <button
                        type="button"
                        onClick={()=>cambiarPage(index)}
                        class="btn btn-outline-primary"
                    >
                        {index}
                    </button>
                );
            }
        return botones;
    } 
        
    
    
    return (
        <>
            <FormularioBuscador
                handleSubmit={handleSubmit}
                StatusLoading={StatusLoading}
            />

            <div className="btn-group" role="group">
                {crearBotonPage()}
            </div>

            <div id="Images" className="row">
                {Imgs.map((img) => {
                    return <Card key={img.id} src={img.urls.regular} />;
                })}
            </div>
        </>
    );
};

export default Cards;
