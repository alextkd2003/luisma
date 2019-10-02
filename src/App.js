import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
        social: [],
        contacts: [],
        home: [],
        ac: [],
        testimonies: []
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

    fetch( endPoint + '/social' )
      .then( res => res.json() )
      .then( data => {
          console.log('social:', data);
          this.setState({
            ...this.state,
            social: data
          })
      } )
      .catch( error => console.log('error to load carousel images') );
    
    fetch( endPoint + '/contacts' )
      .then( res => res.json() )
      .then( data => {
          console.log('contacts: ', data);
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
            home: data
          })
      } )
      .catch( error => console.log('error to fetch home') );
    
    fetch( endPoint + '/ac' )
      .then( res => res.json() )
      .then( data => {
          console.log('ac:', data);
          this.setState({
            ...this.state,
            ac: data
          })
      } )
      .catch( error => console.log('error to fetch testimonies') );

    fetch( endPoint + '/testimonies' )
      .then( res => res.json() )
      .then( data => {
          console.log('testimonies:', data);
          this.setState({
            ...this.state,
            testimonies: data
          })
      } )
      .catch( error => console.log('error to fetch testimonies') );
  }

  render() {
    return (
      <div className="App">
        <Router>
          <HeaderUpper contacts={ this.state.contacts } />
          <Header social={ this.state.social } />
          <hr className="header-separator" />
          <Switch>
            <Route exact path='/' 
              render={(props) => 
                <Home {...props} 
                  carousel_images={this.state.carousel_images} 
                  home={this.state.home} />}/>
            
            <Route exact path='/carpentry' component={ Carpentry } />
            
            <Route exact path='/ac' 
              render={(props) => 
                <Ac {...props} 
                  ac={this.state.ac} />}/>

            <Route exact path='/contactus' 
              render={(props) => 
                <ContactUs 
                  contacts={ this.state.contacts }/>}/>
            
            <Route exact path='/testimonies'
              render={(props) => 
                <Testimonies 
                  {...props} 
                  testimonies={this.state.testimonies}
                />}/>
            <Route path='*' render={ () => (<Redirect to="/" />) } />
          </Switch>
          <Footer social={ this.state.social } />
        </Router>
      </div>
    );
  }
}