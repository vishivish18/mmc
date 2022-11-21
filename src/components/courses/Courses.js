import React from 'react';
import { Button } from 'reactstrap';
class Courses extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return(
    <div>
      <div className="row">
            <div className="static-holder tint t3 col-12">
                <img className="page-image hidden-sm" style={{maxHeight:309}} src="/headphones.jpg"/>
                <div className="centered">
                  <p className="page-header-sub-text">Courses</p>
                  <p className="page-header-sub-text">Maestro Music Club - Music Academy</p>
                  <img className="icon-image" src="/guitar.png"/>
                  <img className="icon-image" src="/drums.png"/>
                  <img className="icon-image" src="/microphone.png"/>
                  <img className="icon-image" src="/violin.png"/>
                  <img className="icon-image" src="/keyboard.png"/>
                </div>
            </div>
      </div>
      <div className="row text-center">
      <div className="container">
      <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="/guitar-course.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Acoustic Guitar</h4>
              <p className="card-text"></p>
              <div className="fee-text">
              <p className="card-text"><small className="text-muted">2 Classes per week</small></p>
              <p>8 classes</p>
              <p> &#8377; 2400/month</p>
              <p>or</p>
              <p>24 classes</p>
              <p> &#8377; 6400/quarter</p>
              <p>or</p>
              <p>48 classes</p>
              <p> &#8377; 12200/half yearly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/piano-courses.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Piano</h4>
              <p className="card-text"></p>
              <div className="fee-text">
              <p>4 classes per month</p>
              <p> &#8377; 2500/month</p>
              <p>or</p>
              <p>8 classes per month</p>
              <p> &#8377; 4200/month</p>
              <p>or</p>
              <p>12 classes in 3 months</p>
              <p> &#8377; 6400/quarterly</p>
              <p>or</p>
              <p>24 classes in 6 months</p>
              <p> &#8377; 12200/half yearly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block>Join Now</Button>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/keyboard-course.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Keyboard</h4>
              <p className="card-text"></p>
              <div className="fee-text">
              <p className="card-text"><small className="text-muted">2 Classes per week</small></p>
              <p>8 classes</p>
              <p> &#8377; 2400/month</p>
              <p>or</p>
              <p>24 classes</p>
              <p> &#8377; 6400/quarter</p>
              <p>or</p>
              <p>48 classes</p>
              <p> &#8377; 12200/half yearly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
            </div>
          </div>
      </div>
            <div className="card-deck" style={{marginTop:40}}>
                <div className="card">
                  <img className="card-img-top" src="violin-course.jpg" alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Violin/Ukulele</h4>
                    <p className="card-text"></p>
                    <div className="fee-text">
              <p>4 classes per month</p>
              <p> &#8377; 2500/month</p>
              <p>or</p>
              <p>8 classes per month</p>
              <p> &#8377; 4200/month</p>
              <p>or</p>
              <p>12 classes in 3 months</p>
              <p> &#8377; 6400/quarterly</p>
              <p>or</p>
              <p>24 classes in 6 months</p>
              <p> &#8377; 12200/half yearly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src="/harmonium-course.jpg" alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Indian Vocals</h4>
                    <p className="card-text"></p>
                    <div className="fee-text">
              <p className="card-text"><small className="text-muted">GST 18% extra on payments done via online transactions for Indian Vocals</small></p>                      
              <p>8 classes per month</p>
              <p> &#8377; 1800/month</p>
              <p>or</p>
              <p>12 classes per month</p>
              <p> &#8377; 2200/month</p>
              <p>or</p>
              <p>24 classes in 3 months</p>
              <p> &#8377; 5000/quarter</p>
              <p>or</p>
              <p>36 classes in 3 months</p>
              <p> &#8377; 6200/quarter</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
                  </div>
                </div>
                <div className="card">
                  <img className="card-img-top" src="/western-vocals-course.jpg" alt="Card image cap"/>
                  <div className="card-block">
                    <h4 className="card-title">Western Vocals</h4>
                    <p className="card-text"></p>
                    <div className="fee-text">
              <p>4 classes per month</p>
              <p> &#8377; 2400/month</p>
              <p>or</p>
              <p>8 classes per month</p>
              <p> &#8377; 3000/month</p>
              <p>or</p>
              <p>12 classes in 3 months</p>
              <p> &#8377; 6400/quarterly</p>
              <p>or</p>
              <p>24 classes in 3 months</p>
              <p> &#8377; 8500/quarterly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
                  </div>
                </div>
            </div>
            <div className="card-deck" style={{marginTop:40}}>
          <div className="card">
            <img className="card-img-top" src="electric-guitar-course.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Electric Guitar / Bass Guitar</h4>
              <p className="card-text"></p>
              <div className="fee-text">
              <p>4 classes per month</p>
              <p> &#8377; 2400/month</p>
              <p>or</p>
              <p>8 classes per month</p>
              <p> &#8377; 3000/month</p>
              <p>or</p>
              <p>12 classes in 3 months</p>
              <p> &#8377; 6400/quarterly</p>
              <p>or</p>
              <p>24 classes in 3 months</p>
              <p> &#8377; 8500/quarterly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/drums-course.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Drums</h4>
              <p className="card-text"></p>
              <div className="fee-text">
              <p>4 classes per month</p>
              <p> &#8377; 2400/month</p>
              <p>or</p>
              <p>8 classes per month</p>
              <p> &#8377; 3000/month</p>
              <p>or</p>
              <p>12 classes in 3 months</p>
              <p> &#8377; 6400/quarterly</p>
              <p>or</p>
              <p>24 classes in 3 months</p>
              <p> &#8377; 8500/quarterly</p>
              </div>
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="/trinity-course.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">Certifications</h4>
              <p className="card-text">Grade Exams - Trinity London / Rockschool</p>
              <div className="fee-text">
              <p className="card-text"><small className="text-muted">Guitar <br/>Keyboard <br/>Piano <br/>Bass <br/>Drums <br/>Violin</small></p>
              <p>Grade - 1 to 3 </p>
              <p> &#8377; 9000/ 24 classes</p>
              <p>Grade - 4 and 5 </p>
              <p> &#8377; 11000/ 24 classes</p>
              <p>Grade - 6 to 8 </p>
              <p> &#8377; 14000/ 24 classes</p>
              </div>
              
              <div className="card-footer-section">
                <Button color="primary" size="lg" block><a style={{color: "white"}} href="tel:9560641314">Join Now</a></Button>
              </div>
            </div>
          </div>
      </div>
      </div>
      <div className="card-deck" style={{marginTop:40}}>
                
                
            </div>
      </div>
  </div>
      )
  }

}
export default Courses