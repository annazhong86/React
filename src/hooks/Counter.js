// 代码复用、代码管理、
//不编写class的情况下使用state以及其他的React特性。
// 1. 在组件之间复用状态逻辑很难; 2. 复杂组件变的难于理解
// React没有提供将可复用性行为“附加”到组件的途径。
// providers, consumers, HOC, render props等其他抽象层组成的组件会形成"嵌套地狱"
// Hook从组件中提取状态逻辑，使得逻辑可以单独测试并复用。使你在无需修改组件结构的情况下复用状态逻辑。
// Hook将组件中相互关联的部分分拆分成更小的函数（比如设置订阅或请求数据）
// class，无法理解JS中this的工作方式， 代码非常冗余


import React, { useEffect, useState } from 'react';

function Example() {
    //声明一个新的叫做"count"的state变量
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You cicked ${count} times`;
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

