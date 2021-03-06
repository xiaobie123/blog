import { mediaEdge } from './styled-global/constant'

export default `
    #nprogress {
        pointer-events: none;
    }
    #nprogress .bar {
        background: #fff;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
    }
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #fff, 0 0 5px #fff;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 1em;
        right: 1em;
    }
    @media (max-width: ${mediaEdge}) {
        #nprogress .spinner {
            top: 10px;
            right: 10px;
        }
    }
    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: #fff;
        border-left-color: #fff;
        border-radius: 50%;
        animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }
    @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
