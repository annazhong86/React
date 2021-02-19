class OuterClickExample extends React.Component {
    constructor(props){
        super(props);

        this.state = { isOpen: false};
        this.toggleContainer = React.createRef();
        
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount(){
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler(){
        this.setState( currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    onClickOutsideHandler(event){
        if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
            this.setState({isOpen: false});
        }
    }

    render(){
      return(
        <div ref={this.toggleContainer}>
            <button onClick={this.onClickHandler}>Select an option</button>
            {this.state.isOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </div>
      ) ; 
    }
}


class BlurExample extends React.Component {
    constructor(props){
        super(props);

        this.state = {isOpen: false};
        this.timeOutId = null;

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHndler = this.onFocusHandler.bind(this);
    }

    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }

    // 我们在下一个时间使用 setTimeout关闭弹窗。
    // 这是必要的， 因为失去焦点时间会在新的焦点事件前被触发
    // 我们需要通过这个步骤确认这个元素的一个子节点是否得到了焦点。
    onBlurHandler() {
        this.timeOutId = setTimeout(() => {
            this.setState({
                isOpen: false
            });
        });
    }

    // 如果一个子节点获得了焦点， 不要关闭弹窗
    onFocusHandler(){
        clearTimeout(this.timeOutId);
    }

    render() {
        // React 通过把失去焦点和获得焦点事件传输给父节点来帮助我们。
        return(
            <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
                <button onClick={this.onClickHandler}
                    aria-haspopup="true"
                    aria-expanded={this.state.isOpen}
                >
                    Select an Option
                </button>
                {this.state.isOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                 </ul>
                )}
            </div>
        )
    }

}