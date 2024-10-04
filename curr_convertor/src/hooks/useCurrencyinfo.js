import {useState, useEffect} from 'react';

function useCurrencyinfo(currency){
    const [data, setData] = useState({});
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((val)=>{setData(val[currency])});
    },[currency])

    return data;
}
export default useCurrencyinfo;