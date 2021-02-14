// key只是在兄弟节点之间必须唯一。
function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post) => <li key = {post.id}>{post.title}</li>)}
        </ul>
    );

    const content = (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
    <Blog posts={posts} />,
    document.getEleementById('root')
)

//key会传递信息给React, 但不会传递给你的组件
const content = posts.map((post) => 
    <Post 
        key={post.id}
        id={post.id}
        title={post.title}
    />
)
//上面例子中， post组件可阅读出props.id， 但是不能读出props.key

function NumberList(props){
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) => 
                <ListItem key={number.toString()} 
                          value={number} />
            )}
        </ul>
    )
}