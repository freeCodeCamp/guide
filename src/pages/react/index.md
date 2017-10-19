---
title: React
---
## React

React is a JavaScript library for building user interfaces. React is declarative meaning simple views can be designed for different states and a different view is rendered each time the state changes. It is also component-based which means that we can create components that can manage their own state and these smaller components can be composed to build larger, more complex UIs.

React can be used with or without <a href="https://jsx.github.io/" target="_blank" rel="nofollow">JSX</a>. You can experiment with JSX <a href="http://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAEASCmIQHsCy8pgOb2vAHgC7wB2AJjAErxjCEB0AwsgLYAOyJph0A3gFABIAE6ky8YQAoAlHyEj4hAK7CS0ADxkAlgDcAfAiTI-hABZaI9NsORtLJMC3gBfdQHpt-gNxDn_P_zUtIQAIgDyqPSi5BKS6oYo6Jg40A5OALwARCHwOlokmdBuegA00CzISiSEAHLI4tJeQA&debug=false&circleciRepo=&evaluate=false&lineWrap=false&presets=react&prettier=true&targets=&version=6.26.0" target="_blank" rel="nofollow">here</a>.

#### A simple, reusable component

```
class WelcomeGreeting extends React.Component {
    render() {
        return (
            <div>Welcome, {this.props.name}</div>
        );
    }
}
ReactDOM.render(
    <WelcomeGreeting name="Alice" />,
    mountNode
);
```
In this code snippet, we have created a React Component called WelcomeGreeting that accepts an input and produces some display content. The input that is passed to the component can be used as this.props. You can learn more about props in '~~React/State and Props~~'

#### A component with state

```
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, mountNode);
```
In this code snippet, state is maintained and can be accessed via this.state. Whenever the state changes, the component is re-rendered by invoking render(). You can learn more about state in '~~React/State and Props~~'

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


