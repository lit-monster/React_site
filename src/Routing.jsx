import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Products from './Components/MainComponents/ProductComponent/products';
import Product from './Components/MainComponents/ProductComponent/productInfo';
import About from './Components/MainComponents/about';
import Company from './Components/MainComponents/company';

class Routing extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Products} />
                    <Route exact path='/product/:id' component={Product} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/company' component={Company} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routing;

