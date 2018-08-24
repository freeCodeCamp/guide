---
title: Render React on the Server with renderToString
---
## Render React on the Server with renderToString

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/react/render-react-on-the-server-with-rendertostring/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
<!-- it really sucks  -->
<!-- documents tells that ReactDOMServer.renderToString(Element) will work  -->
<!-- while  ReactDOMServer.renderToString(App) -->
<!-- & ReactDOMServer.renderToString({App}) both failed -->
ReactDOMServer.renderToString(<App/>)
