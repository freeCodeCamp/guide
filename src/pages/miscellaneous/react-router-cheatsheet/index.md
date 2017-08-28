---
title: React Router Cheatsheet
---
Based on <a href='http://ricostacruz.com/cheatsheets/react-router.html' target='_blank' rel='nofollow'>http://ricostacruz.com/cheatsheets/react-router.html</a> but updated for v2.0.0 of React Router.

## Basic

    import { render } from 'react-dom'
    import { Router, Route, browserHistory } from 'react-router'

    // Import RootView and NoMatch

    render((
      <Router history={browserHistory}>
        <Route path="/" component={RootView} />
        <Route path="*" component={PageNotFound} />
      </Router>
    ), document.getElementById('app'))

## Nesting

    import React from 'react'
    import { render } from 'react-dom'
    import { Router, Route, browserHistory } from 'react-router'

    // Import About, Inbox and Messages

    class Chrome extends React {
      render () {
        return (
          <div>
            <h1>App</h1>
            <a href="/about">About</a>
            <a href="/inbox">Inbox</a>
            <a href="/messages">Messages</a>
            { this.props.children }
          </div>
        )
      }
    }

    render((
      <Router history={browserHistory}>
        <Route path="/" component={Chrome}>
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox} />
          <Route path="messages" component={Messages} />
        </Route>
      </Router>
    ), document.getElementById('app'))

## URL params

    class Message extends React {
      componentDidMount() {
        // from the path `/inbox/messages/:id`
        const id = this.props.params.id
        ...

## Link

    import { Link } from 'react-router'

    /* Nav Component */
      ...
      render() {
        ...
        const userId = 10;

        return (
          // Adding params is as simple as appending them to the route
          <Link to={`user/${userId}`}>User 10</Link>

          // Classes can be added to the link element if the current route is the one they link to
          <Link to="login"
            activeClassName="-active">Login</Link>
        )
      }

## Other config

    <Route path="/">
      <IndexRoute component={Home} />
      <Route path="*" handler={NotFound} />

      // arbitrary/url/login -> /arbitrary/url/sessions/new
      <Redirect from="login" to="sessions/new" />
      // arbitrary/url/about/1 -> /arbitrary/url/profile/1
      <Redirect from="about/:id" to="profile/:id" />

      <Route name="about-user" ... />
      ...