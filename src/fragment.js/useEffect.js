import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setdata] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setdata(data);
            })
    }, [url]
    )
    return { data };
}

export default useFetch;