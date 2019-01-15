import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return <div className="card single-profile shadow p-3 mb-5 rounded">
        <div className="row">
          <div className="col-2 mx-auto">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
            <div className="card-body">
              <div className="card-text">
                <div className="lead text-center">{profile.user.name}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row center">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="card-text text-center">
                    <h4>Occupation&Location</h4>
                    <p>
                      {profile.status} {isEmpty(profile.company) ? null : <span>
                          at {profile.company}
                        </span>}
                    </p>
                    <p>
                      {isEmpty(profile.location) ? null : (
                        <span>{profile.location}</span>
                      )}
                    </p>
                    <Link to={`/profile/${profile.handle}`} className="btn btn-info btn-block">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="card-text text-center">
                    <h4>Skill Set</h4>
                    <ul className="list-group">
                      {profile.skills
                        .slice(0, 4)
                        .map((skill, index) => (
                          <li key={index} className="list-group-item">
                            <i className="fa fa-check pr-1" />
                            {skill}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;

      // <div className="card card-body mb-3">
      //     <div className="row">
      //       <div className="col-2">
      //         <img src={profile.user.avatar} alt="" className="rounded-circle" />
      //       </div>
      //       <div className="col-lg-6 col-md-4 col-8">
      //         <h3>{profile.user.name}</h3>
      //         <p>
      //           {profile.status}{' '}
      //           {isEmpty(profile.company) ? null : (
      //             <span>at {profile.company}</span>
      //           )}
      //         </p>
      //         <p>
      //           {isEmpty(profile.location) ? null : (
      //             <span>{profile.location}</span>
      //           )}
      //         </p>
      //         <Link to={`/profile/${profile.handle}`} className="btn btn-info">
      //           View Profile
      //         </Link>
      //       </div>
      //       <div className="col-md-4 d-none d-md-block">
      //         <h4>Skill Set</h4>
      //         <ul className="list-group">
      //           {profile.skills.slice(0, 4).map((skill, index) => (
      //             <li key={index} className="list-group-item">
      //               <i className="fa fa-check pr-1" />
      //               {skill}
      //             </li>
      //           ))}
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
