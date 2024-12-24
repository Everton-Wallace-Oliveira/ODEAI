import React from "react"
import Carousel from "./Carousel"
import '../../styles/global.css'
import '../../styles/home.css'
import OndaNavbar from "../navbar/OndaNavbar.jsx";


/**
 * Componente Places
 *
 * Este componente representa a página de locais.
 * 
 */

export default function Places(){


 return(
    <>
    {/*<Header></Header>*/}
        <OndaNavbar></OndaNavbar>
        <Carousel></Carousel>
    </>
 )

}