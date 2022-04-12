import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BsDoorOpenFill} from 'react-icons/bs';
import {Footer} from './laydout/footer';
import {Header} from './laydout/header';
import {Content} from './laydout/content';

function App(){
    return(
        <div>
            <Header><BsDoorOpenFill/></Header>
            <Content/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;