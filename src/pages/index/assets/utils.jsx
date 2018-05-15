import styled, { css } from 'react-emotion'


export default styles => Object.keys(styles).reduce((result, key) => {
    result[key] = css`${styles[key]}`;
    return result;
}, {})

// export default function (styles) {
//     let Styles={};
//     for (const key in styles) {
//         Styles[key] = css`
//       ${styles[key]}
//     `;
//     }
//     return Styles;
// }


