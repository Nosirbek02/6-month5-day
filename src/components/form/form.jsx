import React from "react";
import { request } from "../../config/request";

export const Form=()=>{
    const [value, setValue]=React.useState('')

    const submit=(e)=>{
        e.preventDefault
        request.post('/posts',{title:value}).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <form onSubmit={submit}>
            <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
            <button type="submit">Send</button>
        </form>
    )

}