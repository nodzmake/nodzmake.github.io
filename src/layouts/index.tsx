import styled from 'styled-components'
import COLORS from '../utils/theme'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Header = styled.div`
  background-color: #f2f2f2;
  height: 60px;
  padding: 20px;
  display: flex;
  color: ${COLORS['@link-color']};
`

export const SideMenu = styled.div`
  width: 200px;
  background-color: ${COLORS['@primary-color']};
  padding: 20px;
`

export const HeaderMenu = styled.menu`
  display: flex;
`

export const PageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  padding: 10px;
  margin: 10px;
  scroll: auto;
  display: block;
  background-color: ${COLORS['@container-content-background']};
`

export const FlexContainer = styled.div`
  display: flex;
`

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
