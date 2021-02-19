class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        //  更新 state 使下一次渲染能够显示降级后的UI
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo){
        //你同样可以将错误日志上报给服务器
        logErrorToMyService(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            //你可以自定义降级后的UI并渲染
            return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}

<ErrorBoundary>
    <Mywidget />
</ErrorBoundary>

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {error: null}
        this.handleChick = this.handleClick.bind(this);
    }

    handleClick(){
        try{
            // 执行操作， 如有错误则会抛出
        } catch(error){ 
            this.setState({error});
        }
    }

    render(){
        if(this.state.error){
            return <h1>Caught an error.</h1>
        }
        return <button onClick={this.handleClick}>Click Me</button>
    }
}