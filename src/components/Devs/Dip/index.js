import styled from 'styled-components'

const BackDrop = styled.div`
  background: #222;
  font-family: verdana, Tahoma, Arial;
  text-align: center;
`

const MessageText = styled.span`
  cursor: default;
  color: #ffffff;
  display: block;
  padding: 0.1em;
  white-space: nowrap;
`

const DipDiv = styled.div`
  font-size: 1rem;
  height: 1rem;
  background-image: -webkit-linear-gradient(0deg, #222, transparent, #222),
    linear-gradient(transparent 15%, #ff0 15%),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4%,
      #ff0 4%,
      #ff0 7%
    );
  background-image: -moz-linear-gradient(90deg, #222, transparent, #222),
    linear-gradient(transparent 15%, #ff0 15%),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4%,
      #ff0 4%,
      #ff0 7%
    );
  background-image: -o-linear-gradient(90deg, #222, transparent, #222),
    linear-gradient(transparent 15%, #ff0 15%),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4%,
      #ff0 4%,
      #ff0 7%
    );
  background-image: linear-gradient(90deg, #222, transparent, #222),
    linear-gradient(transparent 15%, #ff0 15%),
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 4%,
      #ff0 4%,
      #ff0 7%
    );
  background-size: auto, auto 132px, auto;
`

const Dip = ({message="Dev in progress",children}) => {
  return (
    <BackDrop>
      {children}
      <MessageText>{message}</MessageText>
      <DipDiv />
    </BackDrop>
  )
}

export default Dip
