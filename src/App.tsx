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
import Output from './components/Output'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = APP_NAME
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

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
          flexDirection: 'row',
          overflow: 'hidden',
          width: '100%',
          backgroundColor: COLORS['@container-background']
        }}
      >
        <PageContainer
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Output />
        </PageContainer>
        <SideMenu
          style={{
            flex: 1,
            color: COLORS['@text-color'],
            height: '100%',
            maxWidth: '20%',
            justifyContent: 'flex-end'
          }}
        >
          <h2>{APP_NAME}</h2>
          <NodzFormContainer />
        </SideMenu>
      </FlexContainer>
    </Container>
  )
}

export default App
