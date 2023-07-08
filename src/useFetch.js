import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState()

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }).then(res => {
            if (!res.ok) {
                throw Error("could not fetch the data for the resource");
            }

            return res.json();

        }).then(data => {
            console.log(data);
            setData(data);
            setError(null);
            setIsPending(false);
        }).catch((e) => {
            if (e.name === 'AbortError') {
                console.log("fetch aborted");
            }
            else {
                setIsPending(false);
                setError(e.message);
            }
        });

        return () => abortCont.abort();
    }, [])
    return { data, isPending, error }
}

export default useFetch;