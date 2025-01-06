import {  useState } from "react";
import useApi from "../../hooks/useApi";
import ListMap from "../ListMap/ListMap";


function ListContainer(){

    const {item,searchresults,cargando} =useApi();
    const [query,setQuery] =useState("")
    const [searched , setSearched] = useState(false)
  
   
   
    // manejar el formulario con 

    const prevenir_cambio =(event)=>{
        event.preventDefault()
        if (query){
            setSearched(true)
            searchresults(query)
        }

    }
    

    return(
        <>
        <div className="min-h-screen bg-gray-100 p-8">
         
            
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-center text-gray-20 mb-10">Buscar...</h1>
            </div>
            <form action="" onSubmit={prevenir_cambio}  className="flex justify-center mb-8">
                <input type="text" placeholder="Buscar Producto"
                // cada vez que el input cambie usamos onchange
                 onChange={(e)=>{setQuery(e.target.value)}}
                 className="w-full max-w-md border-gray-300 rounded p-3 focus:outline-none focus:ring-2"/>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg font-semibold">aceptar</button>
                
                
            </form>

            
            {cargando && searched && cargando ? (
                <p className="text-center text-gray-600 font-bold">cargando productos...</p>):
                    <ListMap products_filter={item} />
                    
                    
                }
                {!cargando && searched &&  item.length ===0 && (
                    <p className="text-center text-red-400 font-bold">No se encontro resultados</p>
                )

                }
            
            
        
        </div>
        </>
    )
}

export default ListContainer;