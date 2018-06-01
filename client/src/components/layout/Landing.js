import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-3">LNH</h1>
                
                <hr/>
                 <button type="button" className="btn btn-dark btn-lg mb-5" id="modalView" data-toggle="modal" data-target="#exampleModal">
                  About
                </button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-dark" id="exampleModalLabel">About</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body text-dark">
                        <p className="lead">
                          {" "}
                          Provider - SignUp and creat a profile whereby seekers will view it and employ your services
                          <br />
                          Seekers - Search for the service you need through clicking on the providers profile link bar and browse through their profiles
                        </p>
                        <hr/>
                        <em className="text-danger">
                          Pleas Note that this application is still under
                          production, much changes are going to happen,
                          functionalities like direct messages, followers, media
                          upload, the user interface etc are still yet to be
                          implimnted, they are already built, but they still need to
                          be included in the project files
                        </em>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="lead d-none d-md-block">
                  {" "}
                  Provider - SignUp and creat a profile whereby seekers will view it and employ your services
                  <br />
                  Seekers - Search for the service you need through clicking on the providers profile link bar and browse through their profiles
                </p>
                <br />
                <em className="d-none d-md-block">
                  Pleas Note that this application is still under
                  production, much changes are going to happen,
                  functionalities like direct messages, followers, media
                  upload, the user interface etc are still yet to be
                  implimnted, they are already built, but they still need to
                  be included in the project files
                </em>

                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
