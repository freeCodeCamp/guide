import React, { Component } from 'react';

export default class SideNavBar extends React.Component {
  render() {
    return (
      <div className="col-sm-3 col-md-3 col-lg-3 no-padding-left" id="navbar-side-container">
        <nav className={"navbar navbar-side" + (this.props.isOpened ? ' slide-in' : '') } id="navbar-side">
            <div className="container-fluid no-padding-left no-padding-right">
              <div id="navbar">
                <ul className="nav">
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link 3
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <span className="glyphicon glyphicon-plane" /> Active Link
                    </a>
                  </li>
                  <li className="panel" id="dropdown">
                    <a data-toggle="collapse" href="#dropdown-lvl1">
                      <span className="glyphicon glyphicon-user" /> Sub Level
                      {" "}<span class="caret" />
                    </a>
                    <div id="dropdown-lvl1" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul className="nav navbar-nav">
                          <li><a href="#">Link</a></li>
                          <li className="panel" id="dropdown">
                            <a data-toggle="collapse" href="#dropdown-lvl2">
                              <span className="glyphicon glyphicon-off" /> Sub
                              Level <span className="caret" />
                            </a>
                            <div id="dropdown-lvl2" className="panel-collapse collapse">
                              <div className="panel-body">
                                <ul className="nav navbar-nav">
                                  <li><a href="#">Link</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-send" /> Link
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="glyphicon glyphicon-signal" /> LAST
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    );
  }
}