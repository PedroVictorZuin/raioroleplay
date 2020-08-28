import React from 'react'
import Navbar from "./components/Navbar"
import TopoSuperior from './components/TopoSuperior'
import ConteudoMiddle from './components/ConteudoMiddle'


export default ()=>{
    return(
       <div>
        <TopoSuperior/>
        <Navbar/>
       </div>
    )
}