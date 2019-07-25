import React from 'react';
import { Button } from 'reactstrap';

class Footer extends React.Component {

  render() {
    return(
      <div className="row footer">
              <div className="col-md-12"> 
              <p className="footer-text copyright"> Copyright &#9400; 2003-2019 | Maestro Music Club</p>
              <p className="footer-text"> Coded with &#10084;&#65039; by Vishal</p>
              </div>
        </div>
    )
  }

}
export default Footer