import { css } from '@emotion/react'

const GlobalStyles = css`
  /*
1. Use a more-intuitive box-sizing model.
*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /*
2. Remove default margin
*/
  * {
    margin: 0;
  }
  /*
3. Allow percentage-based heights in the application
*/
  html,
  body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    background: #000;
    color: #fff;
  }

  .loader-container {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    margin: 0 auto;
  }

  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
  }
  .loader::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #ccc;
    animation: prixClipFix 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }

  /*
Typographic tweaks!
4. Add accessible line-height
5. Improve text rendering
*/
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
6. Improve media defaults
*/
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  /*
7. Remove built-in form typography styles
*/
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  /*
8. Avoid text overflows
*/
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  /*
9. Create a root stacking context
*/
  #root,
  #__next {
    isolation: isolate;
  }
`

export default GlobalStyles
