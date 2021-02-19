class SomePlugin extends React.Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.somePlugin();
    }

    componentWillUnmount() {
        this.$el.somePlugin('destory');
    }

    render(){
        return <div ref={el => this.el = el} />;
    }
}

function Example() {
    return(
        <Chosen onChange={ value => console.log(value)}>
            <option>vanilla</option>
            <option>chocolate</option>
            <option>strawberry</option>
        </Chosen>
    )
}

class Chosen extends React.Component {
    componentDidMount() {
      this.$el = $(this.el);
      this.$el.chosen();
      
      this.handleChange = this.handleChange.bind(this);
      this.$el.on('change', this.handleChange);
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.children !== this.props.children){
            this.$el.trigger("chosen:updated");
        }
    }
    
    componentWillUnmount() {
      this.$el.off('change', this.handleChange);
      this.$el.chosen('destroy');
    }
    
    handleChange(e){
      this.props.onChange(e.target.value);
    }
    
    render() {
      return (
        <div>
          <select className="Chosen-select" ref={el => this.el = el}>
            {this.props.children}
          </select>
        </div>
      );
    }
  }
  
  function Example() {
    return (
      <Chosen>
        <option>vanilla</option>
        <option>chocolate</option>
        <option>strawberry</option>
      </Chosen>
    );
  }
  
  ReactDOM.render(
    <Example />,
    document.getElementById('root')
  );


  function Button(props){
    return <button onClick={props.onClick}>Say Hello</button>
  }
  
  function HelloButton(){
    function handleClick(){
      alert('Hello!');
    }
    return <Button onClick={handleClick} />
  }
  
  ReactDOM.render(
    <HelloButton />,
    document.getElementById('container')
  );

  