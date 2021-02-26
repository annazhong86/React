// React.Component
class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
//React.Component并未实现shouldComponentUpdate()

//React.PureComponent浅层对比prop和state的方式来实现shouldComponentUpdate()


//React.memo
const MyComponent = React.memo(function MyComponent(props) {
    /* 使用props渲染 */
})