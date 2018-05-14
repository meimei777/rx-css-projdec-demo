import React        from 'react';
import * as Style from './assets/addEmotion';



export default class Add extends React.Component {

    render() {
        return (
            <Style.Container>
                <p className={Style.myStyle}>Hello World</p>
            </Style.Container>
        );
    }
}
