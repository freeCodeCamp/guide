ReactDOM.render(
	React.createElement('h1', { title: 'hello world' }, 'Hello World'),
	document.getElementById('container')
);



var helloworld = React.createElement('a', { title: 'greetings', href: 'https://www.freecodecamp.org', target: '_blank' }, 'Hello World! Welcome to FFC');

ReactDOM.render(
	helloworld,
	document.getElementById('container')
);