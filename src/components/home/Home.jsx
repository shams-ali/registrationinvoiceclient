/* eslint max-len: 0 */

import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const Home = ({ applications }) => (
  <div className="row home">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-7">
          <h3>Welcome to the Registration Invoice Generator</h3>
        </div>
        <div className="col-md-5 text-center">
          <h3>What do you need help with?</h3>
          {_.map(applications, (appliction, index) => (
            <div key={appliction.title}>
              <Link to={`application/${appliction.link}`} className="btn btn-default btn-lg btn-block" key={index} >
                {appliction.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


Home.propTypes = { applications: React.PropTypes.array };
export default Home;
