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
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center header-content">
                <h1 className="display-3 mb-4">Local Network Hub</h1>
                <p className="lead">
                    {' '}
                  Provider - SignUp and creat a profile whereby seekers will view it and employ your services 
                  <br/>
                  Seekers - Search for the service you need through clicking on the providers profile link bar and browse through their profiles
                </p>
                <br/>
                <em className="d-none d-md-block">Pleas Note that this application is still under production, much changes are going to happen, functionalities like direct messages, followers, media upload, the user interface etc are still yet to be implimnted, they are already built, but they still need to be included in the project files</em> <strong>-Jabulani Setaka(Founder and Creator)</strong>
                <hr />
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
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
