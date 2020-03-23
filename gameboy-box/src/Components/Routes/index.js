import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../Landing'
import GameDetails from '../GameDetails'



const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/games/:id' render={props => <GameDetails {...props}/>}/>
        </Switch>
    )
}

export default Routes
