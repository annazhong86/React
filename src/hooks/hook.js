// 只能在函数最外层调用hook。 不要在循环、条件判断或者子函数中调用。
// 只能在React的函数组件中调用hook。
//  在自定义的hook中调用

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStateChange(status) {
        setIsOnline(status.isOnline);
    }

    //相当于 componentDidMount 和 componentDidUpdate, componentWillUnmount
    useEffect(() => {
        ChatAPI.subscribeToFriiendStatus(props.friend.id, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'offline';
}

function FriendStatusWithCounter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        return () => {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'offline';
}


// 在组件间重用一些状态逻辑。1. 高阶组件。 2. render props 。 3. 自定义Hook
// Hook的每次调用都是一个完全独立的state - 因此你可以在单个组件中多次调用同一个自定义Hook。
// 函数在名字以use开头并调用其他hook， 我们就说这是一个自定义Hook
// 表单处理、动画、订阅声明、计时器 // DEMO TODO

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...';
    }

    return isOnline ? 'Online' : 'offline';
}

function FriendListItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    );
}

function Example() {
    const locale = useContext(LocaleContext);
    const theme = useContext(ThemeContext);
}

function Todos() {
    const [todos, dispatch] = useReducer(todosReducer);
}