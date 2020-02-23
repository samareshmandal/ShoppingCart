import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from "./hoc/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    
      
      <Layout>              
        <Switch>
            <Route path ="/search" render={()=> <Home />}></Route>
            <Route path ="/cart"render={()=> <Cart />} />            
            <Route path ="/" render={()=> <Home />}></Route>            
          </Switch>
      </Layout>      
   
  );
}

export default App;
