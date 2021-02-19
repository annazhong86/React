import React from 'react';

const ToDo = props => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createAt.toTimeString()}</label>
        </td>
    </tr>
);

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        const toDoCounter = 1;
        this.state = {
            list: [{ id: toDoCounter, createAt: date, }],
            toDoCounter: toDoCounter,
        }
    };

    sortByEarliest() {
        const sortedList = this.state.list.sort((a, b) => {
            return a.createAt - b.createAt;
        });
        this.setState({
            list: [...sortedList],
        });
    }

    sortByLatest() {
        const sortedList = this.state.list.sort((a, b) => {
            return b.createAt - a.createAt;
        });
        this.setState({
            list: [...sortedList],
        });
    }

    addToEnd() {
        const date = new Date();
        const nextId = this.state.toDoCounter + 1;
        const newList = [
            ...this.state.list, { id: nextId, createAt: date },
        ];
        this.setState({
            list: newList,
            toDoCounter: nextId,
        });
    }

    addToStart() {
        const date = new Date();
        const nextId = this.state.toDoCounter + 1;
        const newList = [
            { id: nextId, createAt: date },
            ...this.state.list,
        ];
        this.setState({
            list: newList,
            toDoCounter: nextId,
        });
    }

    render() {
        return (
            <div>
                <code>key=id</code>
                <br />
                <button onClick={this.addToStart.bind(this)}>Add New to Start</button>
                <button onClick={this.addToEnd.bind(this)}>Add New to End</button>
                <button onClick={this.sortByEarliest.bind(this)}>Sort by Earliest</button>
                <button onClick={this.sortByLatest.bind(this)}>Sort by Latest</button>
                <table>
                    <tr>
                        <th>ID</th>
                        <th />
                        <th>created at</th>
                    </tr>
                    {this.state.list.map((todo, index) => (
                        <ToDo key={todo.id} {...todo} />
                    ))}
                </table>
            </div>
        );
    }
}

export default ToDoList;