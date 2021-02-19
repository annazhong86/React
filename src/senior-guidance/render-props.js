import React from 'react';

{/* <DataProvider render={data => (
    <h1>Hello {data.target}</h1>
)} /> */}

// class MouseTracker extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>移动鼠标</h1>
//                 <Mouse />
//             </>
//         )
//     }
// }


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 }
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                { this.props.render(this.state)}
            </div>
        );
    }
}

// class MouseWithCat extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }

//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }

//     render() {
//         return (
//             <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
//                 <Cat mouse={this.state} />
//             </div>
//         );
//     }
// }

class MouseTracker extends React.Component {

    renderTheCat(mouse) {
        return <Cat mouse={mouse} />
    }

    render() {
        return (
            <div>
                <h1>移动鼠标</h1>
                <Mouse render={this.renderTheCat} />
            </div>
        )
    }
}

export default MouseTracker;


// function withMouse(Component) {
//     return class extends React.Component {
//         render() {
//             return (
//                 <Mouse render={mouse => {
//                     <Component {...this.state.props} mouse={mouse} />
//                 }} />
//             );
//         }
//     }
// }