import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//component
import HeaderUpper from './components/common/HeaderUpper/HeaderUpper';
import Header from './components/common/Header/Header';
import Home from './pages/Home/Home';
import Carpentry from './pages/Carpentry/Carpentry';
import Ac from './pages/Ac/Ac';
import ContactUs from './pages/ContactUs/ContactUs';
import Testimonies from './pages/Testimonies/Testimonies';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderUpper />
      <Header />
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/carpentry' component={ Carpentry } />
                <Route exact path='/ac' component={ Ac } />
                <Route exact path='/contactus' component={ ContactUs } />
                <Route exact path='/testimonies' component={ Testimonies } />
                <Route path='*' render={ () => (<Redirect to="/" />) } />
              </Switch>
              <Footer />
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
