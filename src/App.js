import React from 'react'
import GlobalStyles from './globalStyle'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import  Navbar from './component/Navbar/Navbar'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App
