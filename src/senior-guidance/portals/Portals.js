import React from 'react';
import ReactDOM from 'react-dom';
import './portals.css';


const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}


class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0, showModal: false };
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    handleHide() {
        this.setState(state => ({
            clicks: state.clicks + 1,
            showModal: false
        }));
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div>
                    <p>Number of clicks: {this.state.clicks}</p>
                    <p>
                        Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.
                    </p>
                    <button onClick={this.handleHide}>Hide modal </button>
                </div>
            </Modal>
        ) : null;

        return (
            <div className="app">
                this div has overflow: hidden.
                <button onClick={this.handleShow}>Show modal</button>
                {modal}
            </div>
        );
    }
}

function Portals() {
    return <Parent />
}


export default Portals;