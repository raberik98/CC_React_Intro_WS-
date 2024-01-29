import { useEffect, useState } from "react"

export default function Test() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Mounted");
        const a = setInterval(() => {
            setCounter((prevState) => prevState+1)
        }, 500)
        return () => {
            clearInterval(a)
        };
    }, []);

    return (<h2>Test component: {counter}</h2>)
}