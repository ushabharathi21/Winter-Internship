import {Button} from "@/components/ui/button"
import { useState } from "react"
const Count =() => {
    const[count,setCount]=useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Button onClick={()=>setCount(count+1)}>Increase</Button>
            <Button onClick={()=>setCount(0)}>Reset</Button>
        </div>
    )
}
export default Count