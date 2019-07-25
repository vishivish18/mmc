import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/menubar/Menubar'


import { Fragment } from 'react';
import { Button } from 'reactstrap';


class App extends React.Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log(this.state.contacts)
    })
    .catch(console.log)
  }
   render() {

    return (
      <Fragment>
        <MenuBar></MenuBar>
      </Fragment>
    );
  }
}

export default App;
