import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sitebar/Sitebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <Header/>

            <section className="main">
                <Sidebar/>

                <div className="main_content">
                    <Route path='/Profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </section>

            <Footer/>
        </BrowserRouter>
    );
}


export default App;