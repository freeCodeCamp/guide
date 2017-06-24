import React, { Component } from 'react';

class TopNavBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3">
                <span className="visible-xs hidden-sm hidden-md hidden-lg">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar"
                    onClick={ () => this.props.handleClick() }
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </span>
                <a className="navbar-brand" href="#">
                  <img
                    className="svg-logo"
                    src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
                  />
                </a>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                <form className="navbar-form">
                  <div className="row">
                    <div className="col-xs-10 col-sm-10 col-md-11 col-lg-11 no-padding-left">
                      <input
                        type="text"
                        className="form-control full-width"
                        placeholder="Search"
                      />
                    </div>
                    <div className="col-xs-2 col-sm-2 col-md-1 col-lg-1 no-padding-left no-padding-right">
                      <button
                        type="submit"
                        className="btn btn-block btn-default"
                      >
                        <small>Submit</small>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNavBar;