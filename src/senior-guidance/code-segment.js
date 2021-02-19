import React, {Suspense}  from 'react';
//React.lazy接受一个函数， 这个函数需要动态调用import。 它必须返回一个Promise, 该Promise需要resolve一个default export的React组件。
const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent(){
    return(
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
                <AnotherComponent />
            </Suspense>
        </div>
    )
}