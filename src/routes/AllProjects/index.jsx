import ProjectsComponents from '../../components/ProjectsComponent'

import style from './style.module.css'

import landpage from '../../assets/banners/landpage.png'
import landpage2 from '../../assets/banners/landpage2.png'
import landpage3 from '../../assets/banners/landpage3.png'
import filme from '../../assets/banners/filme.png'
import full from '../../assets/banners/full.png'
import game from '../../assets/banners/game.png'
import githubc from '../../assets/banners/githubconsultas.png'
import chat from '../../assets/banners/chat.png'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function AllProjects(){

    const navigate = useNavigate()

    return (
        <main className={style.container}>
            
            <header onClick={()=>navigate('/')}>
                <Button>Voltar</Button>
            </header>

            <h1>Projetos</h1>

            <article>
            <ProjectsComponents 
                    image={landpage}
                    github={'https://github.com/Faguim02/page-ecomerce-tenis'}
                    deploy={'https://landpage-tenis-ecomerce.netlify.app/'}
                    />

                    <ProjectsComponents
                    image={landpage2}
                    github={'https://github.com/Faguim02/landpage-product'}
                    deploy={'https://landpage-product-update.netlify.app/'}
                    />

                    <ProjectsComponents
                    image={filme}
                    github={'https://github.com/Faguim02/Prime-Flix'}
                    deploy={'https://primeflix-fgm.netlify.app/'}
                    />

                    <ProjectsComponents
                    image={landpage3}
                    deploy={'https://interior-consultan-page.netlify.app/'}
                    github={'https://github.com/Faguim02/interio-consultan'}
                    />

                    <ProjectsComponents
                    image={chat}
                    github={'https://github.com/Faguim02/chat-hub-react-firebase'}
                    deploy={'https://chat-e-hub.netlify.app/'}
                    />

                    <ProjectsComponents
                    image={githubc}
                    github={'https://github.com/Faguim02/GitHub-Consultas'}
                    deploy={'https://github-querys.netlify.app'}
                    />

                    <ProjectsComponents
                    image={full}
                    deploy={'https://github.com/Faguim02/api-bancaria'}
                    github={'https://github.com/Faguim02/api-bancaria'}
                    />

                    <ProjectsComponents
                    image={game}
                    deploy={'https://faguim.itch.io/'}
                    github={'https://faguim.itch.io/'}
                    />


            </article>
        </main>
    )
}