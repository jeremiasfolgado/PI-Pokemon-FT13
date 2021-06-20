
import React,{useEffect} from 'react'
import {useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {getTypes} from '../../actions/index.js'
import './FirstPage.css'

export function FirstPage (){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTypes())
    })
    return (
        <div className="flex-container">
            <Link to='/pokemon' className="btn-main">
                <span >Start Pokemon Finder app</span>
            </Link>
            
        </div>
    )

}

export default FirstPage;