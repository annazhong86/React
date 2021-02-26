import { useEffect } from "react";

function Timer() {
    const intervalRef = useRef();

    useEffect(() => {
        const id = setIntrval(() => {
            // ...
        });

        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    // ...
}

function handleCancelClick() {
    clearInterval(intervalRef.current);
}

// ...

function Box() {
    const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });

    useEffect(() => {
        function handleWindowMouseMove(e) {
            //  展开[...state]以确保我们没有[丢失]width 和 height
            setState(state => ({ ...state, left: e.pageX, top: e.pageY }));
        }
        //注意： 这是个简化版的实现
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => { window.removeEventListener('mousemove', handleWindowMouseMove); }
    }, []);
}

function Box() {
    const position = useWindowPosition();
    const [size, useSize] = useState({ width: 100, height: 100 });
}

function useWindowPosition() {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    useEffect(() => {

    }, []);
    return position;
}
