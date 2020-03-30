import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/projects/ProjectDetails'
import GameDream from './components/game/Game-Dream'
import Werewolf from './components/game/Werewolf'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import CreateUser from './components/werewolf/CreateUser'
import User from './components/werewolf/User'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={CreateUser}/>
                        <Route path='/project/:id' component={ProjectDetails}/>
                        <Route path='/gamedream/:id' component={GameDream}/>
                        <Route path='/mc' component={Werewolf}/>
                        <Route path='/user/:id' component={User}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        <Route path='/create' component={CreateProject}/>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
