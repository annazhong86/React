function ListItem(props){
    const value = props.value;
    return (
        // 错误！ 你不需要在这里指定key
        //<li key={value.toString()}>{value}</li>
        <li>{value}</li>
    )
}

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
    //错误， 元素的key应该在这里指定：
    //<ListItem value={number} />
    // 正确， key应该在数组的上下文中被指定。
    <ListItem key={value.toString()} value={number} />
    //在map方法中的元素需要设置key属性。
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);
