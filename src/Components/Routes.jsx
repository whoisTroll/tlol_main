import React from 'react'
import LoginPage from './Pages/LoginPage'
import TlolListPage from './Pages/TlolListPage'
import SearchPage from './Pages/SearchPage'
import AddTlolPage from './Pages/AddTlolPage'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
} from 'react-router-dom'
import MainPage from './Pages/MainPage'

const Routes = (props)=>{
    return(
            <Switch>
                <Route path='/' element={<MainPage/>} exact/>
                <Route path='/add' element={<AddTlolPage/>}/>
                <Route path='/login' element={<LoginPage handleLogin={props.handleLogin} isLogin={props.isLogin}/>} />
                <Route path='/tlollist' element={<TlolListPage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
            </Switch>
    )
}

export default Routes