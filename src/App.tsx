import { ChangeEvent, useState } from 'react'
import { GameList } from './components/game.list'
import { FlexCointainer, SideItem, Sidebar } from './containers/template/Flex'
import { Icon } from './assets/svg.access' 
// import image from './assets/image/hamburger2.png'
import hamburger from './assets/hamburger-list.svg'
import { Tooltip } from './containers/tootip/Tooltip'

const App = () => {
  const [show, setShow] = useState(true)
  const changeShow = () => { setShow( !show ) }

  return (
    <FlexCointainer element='all'>
      <Sidebar sidehide={show}>
        <SideItem ><Tooltip data-tip="item a"><Icon name="chat-quote-fill" /></Tooltip><p>item a</p></SideItem>
        <SideItem ><Tooltip data-tip="item b"><Icon name="people-circle" /></Tooltip><p>item b</p></SideItem>
        <SideItem ><Tooltip data-tip="item c"><Icon name="table" /></Tooltip><p>item c item c</p></SideItem>
        <SideItem onClick={changeShow}><Tooltip data-tip="item d"><Icon name="grid" /></Tooltip><p>item d</p></SideItem>
        {/* <FlexItem element='sideitem' onClick={changeShow}>
          <svg viewBox="0 0 130 80" width="25" height="25">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </FlexItem> */}
      </Sidebar>
      <FlexCointainer element='main'>
        <FlexCointainer element='nav'>
          <SideItem>Sistema1</SideItem>
          {/* <FlexItem>2</FlexItem> */}
          <SideItem>3</SideItem>
        </FlexCointainer>
        <FlexCointainer element='content'>
          {/* <GameList></GameList> */}
        </FlexCointainer>
        {/* <FlexCointainer element='nav'>
          <div>Desenvolvido por <a href='https://www.chm.mb/'>CHM</a></div>
        </FlexCointainer> */}
      </FlexCointainer>
    </FlexCointainer>
  )
}

export default App
