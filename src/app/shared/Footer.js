import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © {(new Date().getFullYear())} <a href="#" rel="noopener noreferrer">Record Agent</a>. All rights reserved.</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;