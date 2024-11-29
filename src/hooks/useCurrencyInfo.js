import { useEffect, useState } from "react";

function useCurrencyInfo(currency)
{
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(``)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])

    return data
}
export default useCurrencyInfo;