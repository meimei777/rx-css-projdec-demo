import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from './context/';

import style from './assets/indexEmotion.less.module';
import style2 from './assets/indexEmotion.sless';
import Transfer from './assets/utils';

const styles=Transfer(style2);


console.log('styles',styles);



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
                <div className={style.myStyle}></div>
                <div className={style.Container}></div>


                <div className={styles.myStyle}></div>
                <div className={styles.Container}></div>


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
