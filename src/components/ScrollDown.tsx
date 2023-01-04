import { keyframes, styled } from '@xstyled/styled-components'

const animation = keyframes`
0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const ScrollDown = styled.span`
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #ffffff;
  border-radius: 50px;
  box-sizing: border-box;

  &::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: #ffffff;
    border-radius: 100%;
    animation: ${animation} 2s infinite;
    box-sizing: border-box;
  }
`

export default ScrollDown
