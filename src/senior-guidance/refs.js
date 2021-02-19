function FancyButton(props){
    return (
        <button className="FancyButton">
            {props.clildren}
        </button>
    )
}
const FancyButton = React.forwardRef((props, ref) => {
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
});

//你可以直接获取DOM button的ref
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>

function logProps(WrappedComponent){
    class LogProps extends React.Component {
        componentDidUpdate(prevProps){
            console.log('old props:', prevProps);
            console.log('new props', this.props);
        }

        render(){
            return <WrappedComponent {...this.props} />;
        }
    }

    return LogProps;
}

export default logProps(FancyButton);

const ref = React.createRef();
<FancyButton
    label="Click Me"
    handleClick={handleClick}
    ref={ref}
/>;

function logProps(Component){
    class LogProps extends React.Component {
        componentDidUpdate(prevProps){
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render(){
            const {forwardedRef, ...rest} = this.props;
            // 将自定义的prop属性"forwardedRef"定义为ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

function logProps(Component){
    class LogProps extends React.Component {
        //...
    }
    function forwardRef(props, ref){
        return <LogProps {...props} forwardedRef={ref} />
    }   

    const name = Component.displayName || Component.name;
    forwardRef.displayName = `logProps(${name});`

    return React.forwardRef(forwardRef);
}
