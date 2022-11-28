// import './App.css'
import { GameList } from './components/game.list'
import { FlexCointainer, FlexItem } from './containers/template/Flex'

function App() {
  return (
    <FlexCointainer element='all'>
      <FlexCointainer element='sidebar'>
        <FlexItem>a</FlexItem>
        <FlexItem>b</FlexItem>
        <FlexItem>c</FlexItem>
      </FlexCointainer>
      <FlexCointainer element='main'>
        <FlexCointainer element='nav'>
          <FlexItem>1</FlexItem>
          <FlexItem>2</FlexItem>
          <FlexItem>3</FlexItem>
        </FlexCointainer>
        <FlexCointainer element='content'>
          <GameList></GameList>
        </FlexCointainer>
        <FlexCointainer element='nav'>
          <FlexItem>I</FlexItem>
          <FlexItem>II</FlexItem>
          <FlexItem>III</FlexItem>
        </FlexCointainer>
      </FlexCointainer>
    </FlexCointainer>
  )
}

export default App
