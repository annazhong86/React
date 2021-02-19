class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
);

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, { toWhat: 'world' }, null),
    document.getElementById('root')
);

const e = React.createElement;

ReactDOM.render(
    e('div', null, 'Hello World'),
    document.getElementById('root')
)