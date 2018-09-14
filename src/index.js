import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.css'
import './assets/css/index.styl'
import {HashRouter,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import './mock/mockServer'

import Category from './views/Category/Category';
import Knowledge from './views/Knowledge/Knowledge';
import Msite from './views/Msite/Msite';
import Profile from './views/Profile/Profile';
import ShopCart from './views/ShopCart/ShopCart';

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/msite' component={Msite}/>
                <Route path='/knowledge' component={Knowledge}/>
                <Route path='/category' component={Category}/>
                <Route path='/shopCart' component={ShopCart}/>
                <Route path='/profile' component={Profile}/>
                <Route component={Msite}/>
            </Switch>
        </HashRouter>
    </Provider>
    ), document.getElementById('root'));
