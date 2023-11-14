import Header from "../../components/Header";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";

export default function HomeRouter(){
    return(
        <>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    )
}