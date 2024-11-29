import { useEffect, useState } from "react";

function useCurrencyInfo(currency)
{
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(``)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
// first git repo
    return data
}
export default useCurrencyInfo;