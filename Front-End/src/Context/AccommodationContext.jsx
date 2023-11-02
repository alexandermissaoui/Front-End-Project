import React, { Children, createContext, useState, useEffect, useContext } from 'react'
import Axios from 'axios'

const defaultState = {
    accommodations: [],
    detailAccommodation: null


}
const AccommodationContext = createContext(defaultState)


const AccommodationProvider = ({children}) => {
    const [accommodations, setAccommodations] = useState([]);

    useEffect(() => {
        getAccommodations()
     
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    const getAccommodations=()=>{
       // Fetch data from your backend API endpoint
       Axios.get('http://localhost:3030/api/accommodations') 
       .then(response => {
         console.log("Response from backend:", response.data);
         setAccommodations(response.data);
       })
       .catch(error => {
         console.error('Error fetching data:', error);
       });
    }
  
  return (
    <AccommodationContext.Provider value={{
        ...defaultState, accommodations
    }}>
        {children}
    </AccommodationContext.Provider>

  )

}

export const useAccommodations = () =>{
    return useContext(AccommodationContext)
}


export default AccommodationProvider