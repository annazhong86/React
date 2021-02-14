function WarningBanner(props){
    if(!props.warn){
        //在组件的render方法中返回null并不会影响组件的生命周期。componentDidUpdate依然会被调用
        //让render方法返回null， 而不进行任何渲染。
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarning: !this.state.showWarning
        }));
    }

    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <buton onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </buton>
            </div>
        );
    }

}