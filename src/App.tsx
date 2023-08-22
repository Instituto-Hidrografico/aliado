import { ChangeEvent, useState } from 'react'
import { GameSet } from './components/game.set'
import { FlexCointainer, SideItem, Sidebar } from './containers/template/Flex'
import { Icon } from './assets/svg.access' 
// import image from './assets/image/hamburger2.png'
import hamburger from './assets/hamburger-list.svg'
import { Tooltip } from './containers/tootip/Tooltip'

const App = () => {
  const [show, setShow] = useState(true)
  const changeShow = () => { setShow( !show ) }
  const vector: string[][] = [["tooltip a", "chat-quote-fill", "item a"], ["tooltip b", "people-circle", "item b"], ["tooltip c", "table", "item c"],["tooltip a", "chat-quote-fill", "item a"], ["tooltip b", "people-circle", "item b"]/*, ["tooltip c", "table", "item c"],["tooltip a", "chat-quote-fill", "item a"], ["tooltip b", "people-circle", "item b"], ["tooltip c", "table", "item c"],["tooltip a", "chat-quote-fill", "item a"], ["tooltip b", "people-circle", "item b"], ["tooltip c", "table", "item c"],["tooltip a", "chat-quote-fill", "item a"], ["tooltip b", "people-circle", "item b"], ["tooltip c", "table", "item c"],["tooltip a", "chat-quote-fill", "item a"], ["tooltip b", "people-circle", "item b"], ["tooltip c", "table", "item c"]*/]

  // const search_animal = () => {
  //   var input, filter, ul, li, a, i;
  //   input = document.getElementById("mySearch");
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById("myMenu");
  //   li = ul.getElementsByTagName("li");
  //   for (i = 0; i < li.length; i++) {
  //       a = li[i].getElementsByTagName("a")[0];
  //       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //           li[i].style.display = "";
  //       } else {
  //           li[i].style.display = "none";
  //       }
  //   }
  // }

  return (
    <GameSet ></GameSet>
    // <FlexCointainer element='all'>
    //   <Sidebar sidehide={show}>
    //     <>{vector.map((element) => {
    //       return <SideItem ><Tooltip data-tip={element[0]}><Icon name={element[1]} /></Tooltip><p>{element[2]}</p></SideItem>
    //     })}</>
    //     <SideItem onClick={changeShow}><Tooltip data-tip="hide items"><Icon name="grid" /></Tooltip><p>hide</p></SideItem>
    //   </Sidebar>
    //   <FlexCointainer element='main'>
    //     <FlexCointainer element='nav'>
    //       <SideItem>Sistema1</SideItem>
    //       {/* <FlexItem>2</FlexItem> */}
    //       <SideItem>3</SideItem>
    //     </FlexCointainer>
    //     <FlexCointainer element='content'>
    //       {/* <GameList></GameList> */}
    //     </FlexCointainer>
    //     {/* <FlexCointainer element='nav'>
    //       <div>Desenvolvido por <a href='https://www.chm.mb/'>CHM</a></div>
    //     </FlexCointainer> */}
    //   </FlexCointainer>
    // </FlexCointainer>
  )
}

export default App
