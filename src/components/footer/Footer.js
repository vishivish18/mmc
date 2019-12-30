import React from 'react';
import { Button } from 'reactstrap';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentyear: new Date().getFullYear().toString().substr(-2)
    };
  }

  render() {
    return(
      <div className="row footer">
              <div className="col-md-12"> 
              <p className="footer-text copyright"> Copyright &#9400; 2003-{this.state.currentyear} | Maestro Music Club</p>
              <p className="footer-text"> Coded with &#10084;&#65039; by <a href="https://vishalranjan.in" target="_blank">Vishal</a>
</p>
              </div>
        </div>
    )
  }

}
export default Footer
