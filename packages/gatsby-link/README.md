# gatsby-link

A `<Link>` component for Gatsby.

It's a wrapper around [React Router's Link
component](https://github.com/ReactTraining/react-router/blob/6eeb7ad358f987520f5b519e48bdd31f725cbade/docs/API.md#link)
that adds enhancements specific to Gatsby. All props are passed through
to React Router's Link.

Gatsby does per-route code splitting. This means that when navigating to
a new page, the code chunks necessary for that page might not be loaded.
This is bad. Any unnecessary latency should be avoided. So to avoid
that, by default, Gatsby utilizes a Service Worker that precaches code
chunks so navigating to new pages is quick. But as there are several
popular browsers that don't yet support Service Workers (Safari, IE,
Edge), this component will also preload code chunks on these browsers.

## Install

`npm install --save gatsby-link`

## How to use

In javascript:
```jsx
import Link from "gatsby-link"

render () {
  <div>
    <Link
      to="/another-page/"
      activeStyle={{
        color: 'red'
      }}
    >
    Another page
    </Link>
  </div>
}
```
