import './App.css';
import styled from 'styled-components';
import {Icon} from "./components/icons/icon";
import photo from './assets/images/photo.jpg'
import {Logo} from "./components/logo/logo";
import {Header} from "./layout/header/header";
import {Main} from "./layout/sections/main/main";
import {TechStack} from "./layout/sections/tech-stack/TechStack";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
        </div>
    );
}

export default App;

