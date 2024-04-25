import Contact from "./contact";
import Intro from "./intro";
import Projects from "./projects";
import Skills from "./skills";

const Content = () =>
{
    return(
        <div className="content">
            <Intro />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Content;