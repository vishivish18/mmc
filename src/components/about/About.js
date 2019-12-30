import React from 'react';

class About extends React.Component {

  render() {
    return(
    <div>
      <div className="row">
            <div className="static-holder tint t3 col-12">
                <img className="page-image img-fluid" style={{maxHeight:309}} src="/about-cover2.png"/>
                <div className="centered">
                  <p className="page-header-sub-text">About</p>
                  <p className="page-header-sub-text">Maestro Music Club - Music Academy</p>
                </div>
            </div>
            <div className="page-content-wrapper col-12">
              <h1 className="section-header">Introduction</h1>
              <p className="page-content">
              Welcome to the Maestro Music Online! We appreciate your interest in us and hope to help you on this musical journey of yours!Maestro Music Club was founded by Jim's Guitar Classes, by Jimmon Joy in 2003. It is an institute focused at facilitating music lessons and creating artists our of every student. Basically, it is a place where any music lover can achieve his dream of learning to play a music instrument or performing in front of a crowd.We offer private one-to-one music lessons and group batches. We teach a variety of instruments - Guitar, Keyboard, Drums and Vocals. We also conduct annual concerts and in-house jamming sessions which instill in students a sense of pride and accomplishment.Our faculty comprises of accomplished musicians and music educators who serve  as positive role models for the students.
              </p>
              <h1 className="section-header">Vision and Philosphy</h1>
              <p>
                    We envision spreading awareness about music and benefits of learning to play an instrument. We use music as a way to unwind and relieve stress, and also to train your mind to focus. And we believe that there is no specific age to learn. So why not make your dream of becoming a rockstar come true?  Whether you're a student or a working professional, we accommodate everyone. We have always supported our students to help them discover and create their own music.We have chosen to keep our prices below that of most music schools; so that, students focus on their desire to learn. We also have special programs for the under-privileged who cannot afford the classes or even the instrument. We provide them with the instruments or classes at a very low cost or sometimes for free.
                </p>
            </div>
      </div>
  </div>
      )
  }

}
export default About