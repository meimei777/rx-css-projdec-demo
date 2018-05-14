import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from './context/';

import style from './assets/indexEmotion.rxless';

console.log('style111',style);



export default class TodoRoot extends React.Component {
    state = {
        todoList: [],
        addTodoItem: (itemWords) => {
            const item = { content: itemWords, isFinished: false };
            this.setState(state => ({
                todoList: [item].concat(state.todoList),
            }))
        },
        delTodoItem: (index) => this.setState(state => ({
            todoList: [].concat(state.todoList.slice(0, index), state.todoList.slice(index + 1)),
        })),
    };

    render() {
        return (
            <Provider value={this.state}>
                {/*<Style.Container1>
                    <p className={Style.myStyle1}>emotion</p>
                </Style.Container1>*/}

                <button onClick={this.add}>异步加载js</button>

            </Provider>
        );
    }
    add(){
        import('./add')
    }
}
