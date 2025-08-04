"use client"
import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return <div>
        <p>Current count is: {count}</p>
        <button onClick={ () => setCount(count + 1)}>Increase counter</button>
    </div>
}