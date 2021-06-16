import { useState } from "react"

export const useCounter = ( inicialState = 10 ) => {
  
    const [counter, setCounter] = useState(inicialState)// 10

    const increment = () => {
        setCounter( counter + 1 )
    }

    const decrement = () => {
        setCounter( counter - 1 )
    }

    const reset = () => {
        setCounter( inicialState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}

