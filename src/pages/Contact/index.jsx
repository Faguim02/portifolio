import { Button, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react";
import { AiOutlineUser, AiOutlineSend, AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import style from './style.module.css'

export default function Contact(){
    return(
        <div className={style.container} id="contact">
            <h1>Fale comigo</h1>

            <form action="https://formsubmit.co/fagnermuniz12@gmail.com" method="post">
                <InputGroup backgroundColor={'#FFFF'} borderRadius={7}>
                    <InputLeftElement pointerEvents={'none'}>
                        <AiOutlineUser/>
                    </InputLeftElement>
                    <Input type="text" placeholder="Digite seu nome" name="name" required/>
                </InputGroup>

                <InputGroup backgroundColor={'#FFFF'} borderRadius={7}>
                    <InputLeftElement pointerEvents={'none'}>
                        <AiOutlineMail/>
                    </InputLeftElement>
                    <Input type="email" placeholder="Digite seu email" name="email" required/>
                </InputGroup>
                    
                    <Textarea placeholder="Digite sua mensagem" name="message" backgroundColor={'#FFFF'}/>

                    <Button rightIcon={<AiOutlineSend size={20}/>} backgroundColor={'#BDD9BF'} width={'100%'}>
                        Enviar
                    </Button>

                    <input type="hidden" name="_subject" value="Alguém quer te contratar"></input>
                    <input type="text" name="_honey" style={{ display : 'none' }}></input>
                    <input type="hidden" name="_captcha" value="false"></input>

                
            </form>

            <p>OU</p>

            <nav>
                <a href="https://api.whatsapp.com/send/?phone=5587981616637&text=Ol%C3%A1+Fagner%2C+eu+quero+te+contratar&type=phone_number&app_absent=0">
                    <AiOutlineWhatsApp color="#FFFF" size={30}/>
                </a>
                
                <a href="https://www.linkedin.com/in/fagner-muniz-de-s%C3%A1-6b1211215/">
                    <AiFillLinkedin color="#FFFF" size={30}/>
                </a>

                <a href="https://www.instagram.com/faguim_02/">
                    <AiFillInstagram color="#FFFF" size={30}/>
                </a>

                <a href="https://github.com/Faguim02">
                    <AiFillGithub color="#FFFF" size={30}/>
                </a>
            </nav>

        </div>
    )
}