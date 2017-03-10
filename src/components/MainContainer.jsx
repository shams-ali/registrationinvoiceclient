import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class MainContainer extends React.Component {

  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.applications = {
      walkin: { link: 'walkin', title: 'Walk-In Application' },
      dealer: { link: 'dealer', title: 'Dealer Application' },
      chart: { link: 'chart', title: 'Outstanding Chart' },
    };
  }

  componentDidMount() {
    console.warn('main container mounting');
  }

  signOut() {
    console.warn('signing out');
  }

  render() {
    const clonedChildren = React.cloneElement(this.props.children, {
      signOut: this.signOut,
      applications: this.applications,
    });
    return (
      <div>
        <Header signOut={this.signOut} />
        <div className="container">
          {clonedChildren}
        </div>
        <Footer />
      </div>
    );
  }
}

MainContainer.propTypes = { children: React.PropTypes.object };

export default MainContainer;
