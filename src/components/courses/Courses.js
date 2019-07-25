import React from 'react';

class Courses extends React.Component {

  render() {
    return(
      <div>
         <div className="static-holder tint t3">
                <img className="page-image" style={{height:309}} src="/headphones.jpg"/>
                <div className="centered page-header-text">
                  <p className="page-header-sub-text">Courses</p>
                  <img className="icon-image" src="/guitar.png"/>
                  <img className="icon-image" src="/drums.png"/>
                  <img className="icon-image" src="/microphone.png"/>
                  <img className="icon-image" src="/violin.png"/>
                  <img className="icon-image" src="/keyboard.png"/>
                </div>
          </div>

              <div className="row">
                <div className="col-md-3">
                    <h1 className="section-header">Guitar</h1>
                        <p className="page-content">
                        8 Classes/Month
                        Fee: 2200/Month or 5600/Quarter
                        </p>
                </div>
                <div className="col-md-3">
                <h1 className="section-header">Guitar</h1>
                        <p className="page-content">
                        8 Classes/Month
                        Fee: 2200/Month or 5600/Quarter
                        </p>
                </div>
                <div className="col-md-3">
                <h1 className="section-header">Guitar</h1>
                        <p className="page-content">
                        8 Classes/Month
                        Fee: 2200/Month or 5600/Quarter
                        </p>
                </div>
              </div>
      </div>
      )
  }

}
export default Courses