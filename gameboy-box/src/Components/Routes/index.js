import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../Landing'
import GameDetails from '../GameDetails'
import About from '../PageComponents/About'



const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/games/:id' render={props => <GameDetails {...props}/>}/>
            <Route exact path='/about' component={About}/>
        </Switch>
    )
}

export default Routes
