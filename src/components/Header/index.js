import React from 'react'
import './Header.css'

export default function Header({display}){
    return(
        <header className={display ? 'black' : ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo Netflix"/>
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Logo Usuário"/>
                </a>
                </a>
            </div>
        </header>
    );
}
