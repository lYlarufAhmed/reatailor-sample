import React from "react";

export default function useFilteredAddresses({addresses, searchTerm}) {
    const [filteredAddresses, setFilteredAddresses] = React.useState([])
    console.log(searchTerm)

    React.useEffect(() => {
        setFilteredAddresses(addresses.filter(val=>
        searchTerm && searchTerm.length > 2 ? new RegExp(`.*${searchTerm}.*`, 'i').test(val.full_address.split(',')[0]): false)

    )
    }, [searchTerm, addresses])
    return filteredAddresses
}