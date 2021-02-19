class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

Greeting.defaultProps = {
    name: 'Mary'
}

var createReactClass = require('create-react-class');
var Greeting = createReactClass({
    getDefaultProps: function () {
        return {
            name: 'Mary'
        }
    },
    render: function () {
        return <h1>Hello, {this.props.name}</h1>
    }
})


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initialCount };
    }
}

var Counter = createReactClass({
    getInitialState: function () {
        return { count: this.props.initialCount }
    },
})


class SayHello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Hello!' };
        //this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     alert(this.state.message);
    // }

    handleClick = () => {
        alert(this.state.message);
    }

    render() {
        return (
            // <button onClick={this.handleClick}>
            <button onClick={(e) => this.handleClick(e)}>
                Say Hello
            </button>
        )
    }
}

var SayHello = createReactClass({
    getInitialState: function () {
        return { message: 'Hello!' };
    },

    handleClick: function () {
        alert(this.state.message);
    },
    render: function () {
        return (
            <button onClick={this.handleClick}>
                Say Hello
            </button>
        );
    }
});

var SetIntervalMixin = {
    componentWillMount: function () {
        this.intervals = [];
    },
    setInterval: function () {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function () {
        this.intervals.forEach(clearInterval);
    }
};

var createReactClass = require('create-react-class');
var TickTock = createReactClass({
    mixins: [SetIntervalMixin],
    getInitialState: function () {
        return { seconds: 0 };
    },
    componentDidMount: function () {
        this.setInterval(this.tick, 1000);
    },
    tick: function () {
        this.setState({ seconds: this.state.seconds + 1 });
    },
    render: function () {
        return (
            <p>
                React has been running for {this.state.seconds} seconds.
            </p>
        );
    }
});

ReactDOM.render(
    <TickTock />,
    document.getElementById('example')
);



