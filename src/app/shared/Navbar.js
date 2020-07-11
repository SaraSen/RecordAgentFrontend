import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  render() {
    return (
      <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
          <a className="navbar-brand brand-logo-mini align-self-center d-lg-none" href="!#" onClick={evt => evt.preventDefault()}><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={() => document.body.classList.toggle('sidebar-icon-only')}>
            <i className="mdi mdi-menu"></i>
          </button>
          <ul className="navbar-nav navbar-nav-left header-links">
            <li className="nav-item d-none d-xl-flex">
              <Link className="nav-link" to="/dashboard/Dashboard">
                <i className="mdi mdi-elevation-rise"></i>Workflow
            </Link>
            </li>
            <li className="nav-item d-none d-lg-flex">
              <Link className="nav-link" to="/form-elements/basic-elements">
                <i className="mdi mdi-bookmark-plus-outline"></i>Score
            </Link>
            </li>

          </ul>
          <ul className="navbar-nav navbar-nav-right ml-lg-auto">
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <i className="mdi mdi-bell-outline"></i>
                  <span className="count">7</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown preview-list">
                  <Dropdown.Item className="dropdown-item  d-flex align-items-center" href="!#" onClick={evt => evt.preventDefault()}>
                    <p className="mb-0 font-weight-medium float-left">You have 7 unread mails </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face10.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Sarala Udhamulla </p>
                      <p className="font-weight-light small-text"> How to create a lombok class </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face12.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Sarala Udhamulla </p>
                      <p className="font-weight-light small-text"> How to Create Object Map </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center" href="!#" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face1.jpg")} alt="profile" className="img-sm profile-pic" /> </div>
                    <div className="preview-item-content flex-grow py-2">
                      <p className="preview-subject ellipsis font-weight-medium text-dark">Janith Madhushanka </p>
                      <p className="font-weight-light small-text"> Onboarding applications to JIRA </p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
           
            <li className="nav-item  nav-profile border-0">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                  <span className="profile-text">Saroj Senadheera</span>
                  <img className="img-xs rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="Profile" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center border-bottom" href="!#" onClick={evt => evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2" onClick={evt => evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt => evt.preventDefault()}>
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt => evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt => evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
