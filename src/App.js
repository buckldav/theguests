import React from 'react';
import MainLayout from './layout/MainLayout';
import Music from './components/Music';
import Contact from './components/Contact';
import Home from './components/Home';

import { BrowserRouter, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPalette } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faBars, faPalette, faFacebookF, faInstagram)

function App() {
  return (
    <>
      <MainLayout>
        <BrowserRouter>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/shows" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </MainLayout>
    </>
  );
}

export default App;
