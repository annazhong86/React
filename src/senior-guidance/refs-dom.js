import React from 'react';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        const node = this.myRef.current;
    }



    render() {
        return <div ref={this.myRef} />;
    }
}

//不能在函数组件上使用ref属性， 因为他们没有实例。


class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        //创建一个ref来存储textInput的DOM元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        //直接使用源生API使text输入框获得焦点。
        // 注意： 我们通过"current"来访问DOM节点
        this.textInput.current.focus();
    }

    render() {
        //告诉React我们想把<input> ref关联到构造器创建的`textInput`上
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
            </div>
        );
    }
}


class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}

//默认情况下你不能在函数组件上使用ref， 因为他们没有实例。
function MyFunctionComponent() {
    return <input />
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    render() {
        // This will not work
        return (
            <MyFunctionCompoennt ref={this.textInput} />
        )
    }
}

function CustomTextInput(props) {
    //这里必须声明textInput， 这样ref才可以引用它。
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input type="text" ref={textInput} />
            <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
    );
}

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            if (this.textInput) { this.textInput.focus(); }
        };
    }

    componentDidMount() {
        this.focusTextInput();
    }

    render() {
        <div>
            <input type="text" ref={this.setTextInputRef} />
            <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
        </div>
    }
}

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el} />
        );
    }
}