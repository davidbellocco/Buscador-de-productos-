import { data } from "autoprefixer";
import { useState } from "react";


function useApi(){
    const [item, setData] =useState([])
    const [cargando, setCargando] =useState(false)

     
    

    const searchresults =async(initial)=>{
        setCargando(true)
        try {
            const query = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${initial}`)
            let data = await query.json()
            //el results es por el nombre de la api de mercado libre no cambiar
            setData(data.results)
           
        }catch(error){
            console.log("algo salio mal", error)
        }finally{
            setCargando(false)
        }

    }

    return {item,searchresults,cargando}


}


export default useApi;

