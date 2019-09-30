import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { endPoint } from './config/fetchClient';

//component
import HeaderUpper from './components/common/HeaderUpper/HeaderUpper';
import Header from './components/common/Header/Header';
import Home from './pages/Home/Home';
import Carpentry from './pages/Carpentry/Carpentry';
import Ac from './pages/Ac/Ac';
import ContactUs from './pages/ContactUs/ContactUs';
import Testimonies from './pages/Testimonies/Testimonies';
import Footer from './components/common/Footer/Footer';

export default class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
        carousel_images: [],
        contacts: [],
        home_data: []
    }
}

  componentDidMount() {
    fetch( endPoint + '/carousels' )
      .then( res => res.json() )
      .then( data => {
          console.log('images:', data);
          this.setState({
            ...this.state,
            carousel_images: data
          })
      } )
      .catch( error => console.log('error to load carousel images') );
    
    fetch( endPoint + '/contacts' )
      .then( res => res.json() )
      .then( data => {
          console.log('contacts:', data);
          this.setState({
            ...this.state,
            contacts: data
          })
      } )
      .catch( error => console.log('error to fetch contact') );

    fetch( endPoint + '/home' )
      .then( res => res.json() )
      .then( data => {
          console.log('home:', data);
          this.setState({
            ...this.state,
            contacts: data
          })
      } )
      .catch( error => console.log('error to fetch contact') );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <HeaderUpper contacts={ this.state.contacts } />
          <Header />
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} carousel={this.state.carousel_images} />} />
            <Route exact path='/carpentry' component={ Carpentry } />
            <Route exact path='/ac' component={ Ac } />
            <Route exact path='/contactus' component={ ContactUs } />
            <Route exact path='/testimonies' component={ Testimonies } />
            <Route path='*' render={ () => (<Redirect to="/" />) } />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}


function getAcf( array ) {
  
}