import { ChangeEvent, useState } from 'react'
import { GameList } from './components/game.list'
import { FlexCointainer, FlexItem } from './containers/template/Flex'
import { Icon } from './assets/svg.access' 
// import image from './assets/image/hamburger2.png'
import hamburger from './assets/hamburger-list.svg'
import { Tooltip } from './containers/tootip/Tooltip'

const App = () => {
  const [show, setShow] = useState(true)
  const changeShow = () => { setShow( !show ) }

  return (
    <FlexCointainer element='all'>
      <FlexCointainer element='sidebar' sidehide={show}>
        <Tooltip data-tip="item a"><FlexItem element='sideitem'><Icon name="chat-quote-fill" /><p>item a</p></FlexItem></Tooltip>
        <Tooltip data-tip="item b"><FlexItem element='sideitem'><Icon name="people-circle" /><p>item b</p></FlexItem></Tooltip>
        <Tooltip data-tip="item c"><FlexItem element='sideitem' onClick={changeShow}><Icon name="table" /><p>item c item c</p></FlexItem></Tooltip>
        <FlexItem element='sideitem'><Tooltip data-tip="item d"><Icon name="grid" /></Tooltip><p>item d</p></FlexItem>
        {/* <FlexItem element='sideitem' onClick={changeShow}>
          <svg viewBox="0 0 130 80" width="25" height="25">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </FlexItem> */}
      </FlexCointainer>
      <FlexCointainer element='main' mainhide={show}>
        <FlexCointainer element='nav'>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
        </FlexCointainer>
        <FlexCointainer element='content'>
          <GameList></GameList>
          <Tooltip data-tip="Right, finally">1</Tooltip>
        </FlexCointainer>
        <FlexCointainer element='nav'>
          {/* <FlexItem>I</FlexItem>
          <FlexItem>II</FlexItem> */}
          <FlexItem float='right'>III</FlexItem>
        </FlexCointainer>
      </FlexCointainer>
    </FlexCointainer>
  )
}

export default App
