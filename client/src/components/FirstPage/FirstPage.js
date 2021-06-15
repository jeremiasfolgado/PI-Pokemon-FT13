import axios from 'axios'
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

export function FirstPage (){
    useEffect(()=>{
        return async ()=>{
            const call = await axios.get('http://localhost:3001/types/')
        }
    })
    return (
        <Link to='/pokemon'>
            <span>Start Pokemon Experience</span>
        </Link>
    )

}

export default FirstPage;