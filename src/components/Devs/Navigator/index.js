import { Link } from 'react-router-dom'
import { routes } from '../../../Routes'
import Dip from '../Dip'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  background-color: rgb(255, 255, 0);
  color: #000;
  border: 2px solid #222;
  margin: 0 0 0 0.1rem;
  padding: 0.1rem;
  font-size: 0.6rem;
`

const Navigator = () => {
  return (
    <Dip message='Dev in progress'>
      <nav style={{ margin: 0 }}>
        {routes.map(r => (
          <StyledLink to={r.path} key={r.path}>
            {r.path.slice(1) === '' ? 'HOME' : r.path.slice(1).toUpperCase()}
          </StyledLink>
        ))}
      </nav>
    </Dip>
  )
}

export default Navigator
