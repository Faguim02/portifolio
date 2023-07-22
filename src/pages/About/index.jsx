import { FaReact, FaNodeJs, FaGitAlt, FaGithubSquare } from 'react-icons/fa'
import style from './style.module.css'
import { SiTypescript } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'

export default function About(){
    return(
        <article className={style.container} id='about'>
            <article className={style.containerInf}>
                <h1>Sobre</h1>
                <p>
                Olá, me chamo Fagner Muniz de Sá, tenho 18 anos e faço análise e desenvolvimento de Sistemas. Tenho experiência em criação de web sites responsiveis, criação de API’s, criação de aplicativos mobiles e criação de jogos desktop. Busco constantemente aprimorar minhas habilidades técnicas e oferecer resultado.
                </p>
                <article className={style.experience}>
                    <div className={style.line}></div>
                    <ul>
                        <li>Experiência:</li>
                        <li>
                            <FaReact color='#FFFF'/>
                            <p>React.js</p>
                        </li>
                        <li>
                            <FaNodeJs color='#FFFF'/>
                            <p>Node.js</p>
                        </li>
                        <li>
                            <SiTypescript color='#FFFF'/>
                            <p>TypeScript</p>
                        </li>
                        <li>
                            <FaGitAlt color='#FFFF'/>
                            <p>Git</p>
                        </li>
                        <li>
                            <FaGithubSquare color='#FFFF'/>
                            <p>GitHUb</p>
                        </li>
                        <li>
                            <DiPostgresql/>
                            <p>PostgreSQL</p>
                        </li>
                    </ul>
                </article>
            </article>
        </article>
    )
}