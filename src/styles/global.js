// @flow

import { injectGlobal } from 'emotion';
import reset from './reset';
import { siteBgColor } from './colors';

export default injectGlobal`
    ${reset};
    
    * {
        box-sizing: border-box;
    }
    
    body {
        background-color: ${siteBgColor};
        font-size: 13px;
        line-height: 1.38;
        color: #3F4660;
        letter-spacing: 0.18px;
        font-family: 'Open Sans', sans-serif;
    }
    
    img {
        max-width: 100%;
        max-height: 100%;
    }
    
    strong {
        font-weight: 900;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
`;
