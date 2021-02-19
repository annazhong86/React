// 组件可以接受任意props， 包括基本数据类型，React元素以及函数。
function FancyBorder(props){
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dailog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    );
}

function WelcomeDialog(){
    return(
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    )
}

class SignUpDialog extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state= {login: ''}
    }

    render() {
        return(
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        );
    }

    handleChange(e){
        this.setState({login: e.target.value});
    }
    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

}

function SplitePane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App(){
    return(
        <SplitPane 
            left={ <Contacts />}
            right={<Chat />}
        />
    )
}