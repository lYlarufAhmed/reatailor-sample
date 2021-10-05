import React from "react";
import getAllAddresses from "../api/property";
export default function useAddresses(){
    const [status, setStatus] = React.useState('loading')
    const [error, setError] = React.useState()
    const [addresses, setAddresses] = React.useState([])

    const refetch = async ()=>{
        try{
            setStatus('loading')
            let addresses = await getAllAddresses()
            setAddresses(addresses)
            setStatus('success')
        }catch (e) {
            setStatus('error')
            setError(e.message)
        }
    }
    React.useEffect(()=>{
        refetch()
    },[])

    return {
        addresses,
        status,
        error,
        fetchAddresses: refetch
    }
}