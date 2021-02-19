// 参数为组件， 返回值为新组建的函数
const EnhancedComponent = higherOrderComponent(WrappedComponent);

//组件是将props转换为UI， 而高阶组件是将组件转换为另一个组件。

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // 假设"DataSource"是个全局范围内的数据源变量。
            comments: DataSource.getComment()
        };
    }

    componentDidMount(){
        //订阅更改
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        //清除订阅
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        //当数据更新时， 更新组件状态
        this.setState({
            comments:DataSource.getComments()
        });
    }

    render(){
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment={comment} key={comment.id} />
                ))}
            </div>
        );
    }
}

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange(){
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)
        });
    }

    render(){
        return <TextBlock text={this.state.blogPost} />
    }
}

const CommentListWithSubscription = withSubsription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
)

function withSubscription(WrappedComponent, selectData){
    return class extends React.Component{
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        DataSource.removeChangeListnener(this.handleChange);
    }

    handleChange(){
        this.setState({
            data: selectData(DataSource, this.props)
        });
    }

    render(){
        // ...并使用新数据渲染被包装的组件！
        //请注意，我们可能还会传递其他属性
        return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }
}

const ConnectedComment = connect(commentSelector, commentActions)
(CommentList);

const enhance = connect(commentListSelector, commentListActions);
const ConnectedComment  = enhance(CommentList);

