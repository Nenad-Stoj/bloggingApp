import { useEffect, useState } from "react";

const useFetch = (url) => {
   
    const [data, setData] = useState()

    const [isPending, setIsPending] = useState(true);
   
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url).then(res => {
            if(!res.ok)
            {
                throw Error("could not fetch the data for the resource");
            }
            
            return res.json();
            
        }).then(data => {
            console.log(data);
            setData(data);
            setError(null);
            setIsPending(false);
        }).catch ((e) => {
            setIsPending(false);
           setError(e.message);
        });


    }, [])
    return {data, isPending, error}
}

export default useFetch;