import imgDecoration from '../../assets/Coding.gif'
import style from './style.module.css'
import { AiOutlineSend } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { Button } from '@chakra-ui/react'

export default function Home(){
    return(
        <main className={style.container} id="home">
            <article className={style.InfoCamp}>
                <section>
                    <a href="https://www.linkedin.com/in/fagner-muniz-de-s%C3%A1-6b1211215/">
                        <FiLinkedin size={30}/>
                    </a>
                </section>
                <h1>Fagner Muniz de Sá</h1>
                <h2>DESENVOLVEDOR FULLSTACK</h2>
                <a href="#contact">
                    <Button rightIcon={<AiOutlineSend size={20}/>} backgroundColor={'#2E4052'} color={'#FFFF'} width={'100%'}>
                        Entre em contato
                    </Button>
                </a>
            </article>
            <figure>
                <img src={imgDecoration} alt="decoration" />
            </figure>
        </main>
    )
}