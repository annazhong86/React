import React from 'react';

class App extends React.Component{
    render(){
        return <Toolbar theme="dark" />
    }
}

function Toolbar(props){
    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    )
}

class ThemedButton extends React.Component{
    render(){
        return <Button theme={this.props.theme} />;
    }
}

const ThemeContext = React.createContext('light');

class App extends React.Component {
    render(){
        return(
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

function Toolbar() {
    return(
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render(){
        return <Button theme={this.context} />;
    }
}

const MyContext = React.createContext(defaultValue);
<MyContext.Provider value={/* 某个值 */} />


class MyClass extends React.Component {
    componentDidMount() {
        let value = this.context;
        // 在组件挂载完成后， 使用MyContext组件的值来执行一些副作用的操作。
    }
    componentDidUpdate(){
        let value = this.context;
    }

    componentWillUnmount() {
        let value = this.context;
    }

    render(){
        let value = this.context;
        // 基于 MyContext组件的值进行渲染
    }
}
MyClass.contextType = MyContext;

class MyClass extends React.Component {
    static contextType = MyContext;
    render() {
        let value = thiss.context;
        // 基于这个值进行渲染工作。
    }
}

<MyContext.Consumer>
    {value => /* 基于context 值进行渲染 */}
</MyContext.Consumer>

const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName' ;

// <MyContext.Provider> // "MyDisplayName.Provider" 在DevTools中
// <MyContext.Consumer>  // "MyDisplayName.Consumer" 在DevTool中