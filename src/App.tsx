import './App.css'
import { APP_NAME } from './utils/constants'
import { useEffect, useState } from 'react'
import {
  Container,
  FlexContainer,
  Header,
  HeaderMenu,
  PageContainer,
  SideMenu
} from './layouts/'
import COLORS from './utils/theme'
import Splash from './components/Splash'
import NodzFormContainer from './containers/NodzForm'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = APP_NAME
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])
  return loading ? (
    <Splash />
  ) : (
    <Container>
      <SideMenu style={{ color: COLORS['@text-color'] }}>
        <h2>{APP_NAME}</h2>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </SideMenu>
      <FlexContainer
        style={{
          flexDirection: 'column',
          overflow: 'hidden',
          width: '100%',
          backgroundColor: COLORS['@container-background']
        }}
      >
        <Header>
          <HeaderMenu>
            <li>menu</li>
            <li>menu</li>
            <li>menu</li>
          </HeaderMenu>
        </Header>
        <PageContainer>
          <NodzFormContainer />
        </PageContainer>
      </FlexContainer>
    </Container>
  )
}

export default App
