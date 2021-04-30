import React from "react";
import "./styles.css";
import {icondata} from "./icondata.js";

function IconUnit(props) {
  return (
    <div class="iconunit"> {props.value} </div>
  );
}

function Board (props) {
  let iconset = Array(30).fill(<IconUnit value = ' ' texttip='' />);
  let chosenset;
  if (props.value === 0) {
    chosenset = icondata.icons0;
  } else {
    chosenset = (props.value === 1) ? icondata.icons1 : icondata.icons2;
  }
  for (let i = 0; i < chosenset.length; ++i) {
    let imgicon = <div>
      <img class="imgic" src = {chosenset[i]}/>
      <div class="icontip"> javascript </div>
      </div>;
    iconset[i] = <IconUnit value= {imgicon} />
  }
  let board = 
  <div class="mainboxitem" id="iconboard">
     {iconset} 
  </div>;
     return (
      board
    );
  }


function ToolItem(props) {
  return (
    <button class="toolitem" id = {props.name} 
    style = {props.style}
    onClick= {(props.onClick)}> 
    </button>
  );
}

class Logic extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle :[{display: 'none'},
    {display: 'block'},
    {display: 'none'}],
      pageSelected: 0,
    };
  }

  render () {
    let tools = Array(3).fill(null);
    let toolstyle = Array(3).fill({backgroundColor: 'transparent'});
    toolstyle[this.state.pageSelected] = {backgroundImage: 'url("icon-shade.png")', height: '55px'};
    for (let i = 0; i < 3; ++i) {
      let toolname = "tool"+i; 
      tools[i] = <ToolItem name= {toolname}
            style={toolstyle[i]}
            onClick = {() => this.setState({pageSelected: i})}/>;
    }
    console.log(this.state.pageSelected);
    let board = <Board value = {this.state.pageSelected} />;

    return (
      <div> 
        <div class="toolbar"> 
            <div> {tools} </div>
            <div style={{fontSize:'50px', marginLeft:'20px', marginTop:'7px'}}> 
            Languages </div> 
        </div>
        <div> {board} </div>
      </div>
      );
  }
}

function MainHTML () {
  return(
    <div class="mainbox">
         <Logic />
        <div class="mainboxitem">
            <img src="yakuza_idle.png" id="iconpic" />
            <div style= {{width:'500px'}}>
                <h1> Clarice Osmond </h1>
                <h2 > Education: University of Waterloo </h2>
                <h2> 3B Computer Science</h2>
                <div style= {{display:'flex', flexDirection:'row', maxWidth:'500px', justifyContent:'center'}}> 
                  <img src="ca-flag.png"  style= {{width:'50px', height:'35px'
                  , marginRight: '15px', marginTop:'20px'}} />
                  <h2> ON, Canada </h2>
                </div>
            </div>
          </div>
  </div>
  );
}
export default function App() {
  return (
    <MainHTML />
  );
}
