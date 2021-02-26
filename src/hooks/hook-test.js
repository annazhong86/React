import React from 'react';
import ReactDOM from 'react-dom';
imort { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

if ('can render and update a counter', () => {
    //测试首次渲染和effect
    act(() => {
        ReactDOM.render(<Counter />, container);
    });

    const button = container.querySelector('button');
    const label = container.querySelector('p');

    expect(label.textContent).toBe('You clicked 0 times');
    expect(document.title).toBe('Yuo clicked 0 times');

    //测试第二次渲染和 effect
    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(label.textContent).toBe('You clicked 1 times');
    expect(document.title).toBe('You clicked 1 times');
});