import React from 'react'
import LoginPage from './Pages/LoginPage'
import BlackListPage from './Pages/BlackListPage'
import SearchPage from './Pages/SearchPage'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
} from 'react-router-dom'
import MainPage from './Pages/MainPage'

const Routes = ()=>{
    return(
        <Router>
            <Switch>
                <Route path='/' element={<LoginPage/>} exact/>
                {/* <Route path='/main' element={<MainPage/>} /> */}
                {/* <Route path='/blacklist' element={<BlackListPage/>}/> */}
                {/* <Route path='/search' element={<SearchPage/>}/> */}
            </Switch>   
        </Router>
    )
}

export default Routes