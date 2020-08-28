import React from 'react';
import './navbar.css'
import Home from "../ConteudoMiddle"
import Regras from "../Regras"
import Equipe from "../Equipe"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";




export default ()=>{
return (
<BrowserRouter>
    <nav id="backgroundColorId" className="navbar navbar-expand-lg" >
    <Link className="navbar-brand" to="/"><button id="logoSuperiorNavbarLeft"></button></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbarUL" className="navbar-nav ml-auto mr-auto">
        <li className="nav-item active">
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/">Inicio<span className="sr-only">(Inicio)</span></Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link"  to="/regras">Regras<span className="sr-only">(Inicio)</span></Link>
            </li>
            <li className="nav-item active">
                <a className="nav-link"  href="https://discord.gg/UdtAHnT" target="_blank">Discord<span className="sr-only">(Inicio)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link"  href="https://www.instagram.com/raiocityrp/" target="_blank">Instagram<span className="sr-only">(Inicio)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link"  href="https://www.facebook.com/raiocityrp" target="_blank">Facebook<span className="sr-only">(Inicio)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link"  href="https://five-m.store/loja/raiostore" target="_blank">Loja<span className="sr-only">(Inicio)</span></a>
            </li>
            <li className="nav-item active">
                <Link className="nav-link"  to="/equipe">Equipe<span className="sr-only">(Inicio)</span></Link>
            </li>
            <li className="nav-item active">
                <a className="nav-link" target="_blank"  href="https://docs.google.com/forms/d/e/1FAIpQLSc5eF0IUsbliasYk5YQpjjhmX5AblFbr20UT558YhjD5E05gw/viewform?ts=5ed87a91">White List<span className="sr-only">(Inicio)</span></a>
            </li>
        </ul>
    </div>
    </nav>
    <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/regras" component={Regras} />
        <Route path="/equipe" component={Equipe} />
    </Switch>

</BrowserRouter>
)
}