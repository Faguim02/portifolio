import ProjectsComponents from '../../components/ProjectsComponent'
import style from './style.module.css'

import landpage from '../../assets/banners/landpage.png'
import landpage2 from '../../assets/banners/landpage2.png'
import landpage3 from '../../assets/banners/landpage3.png'
import filme from '../../assets/banners/filme.png'
import full from '../../assets/banners/full.png'
import game from '../../assets/banners/game.png'
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'

export default function Projects(){

    const navigate = useNavigate()

    return(
        <div className={style.container} id="projects">
            <main className={style.mainContainer}>
                <div className={style.title}>
                    <h1>Projetos</h1>
                </div>


                <article className={style.projects}>
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
                </article>

                <Button className={style.btn} onClick={()=>navigate('/projects')}>Ver todos os projetos</Button>
            </main>
        </div>
    )
}