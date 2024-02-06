import './App.css';
import styled from 'styled-components';
import {Icon} from "./components/icons/icon";
import photo from './assets/images/photo.jpg'
import {Logo} from "./components/logo/logo";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/main";
import {TechStack} from "./layout/sections/tech-stack/TechStack";
import {Projects} from "./layout/sections/projects/Projects";

const skills = ["html", "css", "js", "typescript", "react", "redux", "git", "github", "react",]

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack skills={skills}/>
            <Projects/>
        </div>
    );
}

export default App;

