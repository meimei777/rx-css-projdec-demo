import React        from 'react';
import style2 from './assets/addEmotion.sless';
import Transfer from './assets/utils';

const styles=Transfer(style2);



export default class Add extends React.Component {

    render() {
        return (
            <div>
                <p className={styles.a}>Hello World</p>
            </div>
        );
    }
}
