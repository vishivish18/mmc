import React from 'react';
import { Button } from 'reactstrap';
class JStudios extends React.Component {

  render() {
    return(
      <div>
         <div className="static-holder tint t3">
                <img className="page-image" style={{height:309}} src="/headphones.jpg"/>
                <div className="centered page-header-text">
                  <p className="page-header-sub-text">J Studios</p>
                </div>
                <div className="card-deck" style={{marginTop:40}}>
                <div className="card">
                <div className="card-block">
              <h4 className="card-title">Professional Audio Recording</h4>
              <p className="card-text"></p>
              <div className="fee-text">
              <p>Contact &nbsp;&nbsp;for &nbsp;&nbsp; professional &nbsp;&nbsp;studio &nbsp;&nbsp; recording</p>
              
              </div>
              
              <div className="card-footer-section">
              <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Call Now</a></Button>
              </div>
            </div>
            <img className="card-img-top" src="/recording.jpg" alt="Card image cap"/>
            
          </div>
                
            </div>
      
          </div>
      </div>
      )
  }

}
export default JStudios