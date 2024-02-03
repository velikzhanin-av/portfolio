import './App.css';
import styled from 'styled-components';
import {Icon} from "./components/icons/icon";
import photo from './assets/images/photo.jpg'


function App() {
    return (
        <div className="App">
            <Title>hello world</Title>
            <Icon/>
            <Photo src={photo}/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    display: flex;
    font-size: 1.5em;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #e91e63;
`;


const Photo = styled.img`
  height: 430px;
  width: 350px;
  object-fit: cover;
`;