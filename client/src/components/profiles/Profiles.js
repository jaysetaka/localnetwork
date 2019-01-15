import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profileActions';

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return <div className="profiles">
        <div className="container">
        
        <div className="card freelance-card mx-auto text-center shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h3 className="card-title">Freelancer Profiles</h3>
            <h6 className="card-subtitle mb-2 text-muted">
              Browse and connect with freelancers</h6>
          </div>
        </div>
          <div className="row profile-items">
            <div className="col">
              {profileItems}
            </div>
          </div>
        </div>
      </div>;
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
