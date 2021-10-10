import React from "react";
// import {getAllAddresses} from "../api";

export default function useAddresses() {
    const [status, setStatus] = React.useState('loading')
    const [error, setError] = React.useState()

    const postProperty = async (values) => {
        try {
            setStatus('loading')
            await postProperty(values)
            // setAddresses(addresses)
            setStatus('success')
            setError('')
        } catch (e) {
            setStatus('error')
            setError(e.message)
        }
    }

    const fetchProperty = (property_id) => {
    }
    // const [addresses, setAddresses] = React.useState([])

    // const refetch = async () => {
    //     try {
    //         setStatus('loading')
    //         let addresses = await getAllAddresses()
    //         setAddresses(addresses)
    //         setStatus('success')
    //     } catch (e) {
    //         setStatus('error')
    //         setError(e.message)
    //     }
    // }
    // React.useEffect(() => {
    //     refetch()
    // }, [])

    return {
        status,
        postProperty,
        fetchProperty,
        error,
    }
}