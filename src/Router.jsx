import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import Live from './components/live/Live'
import Funzone from './components/funzone/Funzone'
import Testimonials from './components/testimonials/Testimonials'
import VideoDetails from './components/utils/VideoDetails'

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/live" component={Live} />
        <Route path="/funzone" component={Funzone} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/video/:id" component={VideoDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
