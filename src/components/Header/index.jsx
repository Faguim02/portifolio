import { useState } from 'react';
import style from './style.module.css'
import { AiOutlineMenu } from "react-icons/ai";

export default function Header(){

    const [openMenu, setOpenMenu] = useState(false)

    function handleMenu(){
        setOpenMenu(!openMenu)
    }

    return(
        <header className={style.container}>
            <div>
                <h1>&lt;/&gt;</h1>
            </div>
    
            <div style={{display: 'flex', flexDirection: 'column', alignItems:'end'}}>

                <button className={style.menu} onClick={handleMenu}>
                    <AiOutlineMenu size={30} />
                </button>

                {openMenu === true && (
                    <section className={style.menu}>
                        <a href="#home">Inicio</a>
                        <a href="#about">Sobre</a>
                        <a href="#projects">Projetos</a>
                        <a href="#contact">Contato</a>    
                    </section>
                )}

            </div>
    
            <nav>
                <a href="#home">Inicio</a>
                <a href="#about">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#contact">Contato</a>
            </nav>
        </header>
    )
}