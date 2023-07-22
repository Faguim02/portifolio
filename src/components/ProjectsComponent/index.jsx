import { Button } from '@chakra-ui/react'
import style from './style.module.css'
import { GrFormView } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'

export default function ProjectsComponents({image, github, deploy}){
    return(
        <section className={style.container}>
            <img src={image} alt="image" />
            <div>
                <a href={deploy} target="_blank" rel="noopener noreferrer">
                    <Button leftIcon={<GrFormView size={30}/>} backgroundColor={'#BDD9BF'}>
                        Projeto
                    </Button>
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <Button leftIcon={<AiFillGithub size={30} color='#FFFF'/>} backgroundColor={'#2E4052'} color={'#FFFF'}>
                        GitHub
                    </Button>
                </a>
                
            </div>
        </section>
    )
}