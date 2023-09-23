import styled from 'styled-components'

export const HandwritingDiv = styled.div`
  font-size: 24px;
  font-family: cursive;
  white-space: nowrap;
  overflow: hidden;
  color: #e77d11;
  animation: typing 1s steps(40, end) @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`
