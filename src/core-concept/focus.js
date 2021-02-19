class CustomTextInput extends React.Component{
    constructor(props){
        super(props);
        // 创建一个 textInput DOM 元素的ref
        this.textInput = React.createRef();
    }
    render(){
        // 使用 'ref' 回调函数以在实例的一个变量中存储文本输入DOM元素
        // 比如， this.textInput。
        return (
            <input 
                type="text"
                ref={this.textInput}
            />
        );
    }

    focus(){
        // 使用原始的 DOM API显式地聚焦在text input 上
        // 注意： 我们通过访问 "current" 来获取DOM节点。
        this.textInput.current.focus();
    }
}


function CustomTextInput(props){
    return(
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }
    render(){
        return(
            <CustomTextInput inputRef={this.inputElement} />
        );
    }
}

//现在你就可以在需要时设置焦点了
this.inputElement.current.focus();