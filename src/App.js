import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

 class App extends Component {
  // constructor
 constructor (props){
  super(props);

this.state ={
  fontColor:"black",
  fontSize: 12,
  fontFamily:'monospace',
  allowEdit:'true'
}
this.updateColor=this.updateColor.bind(this);
this.updateSize=this.updateSize.bind(this);
this.updateFamily=this.updateFamily.bind(this);
this.updateEditStatus=this.updateEditStatus.bind(this);
//left part represents child component, right part represents parent
//bind creates new instance of function , if this keywor dis used in the method, it has to be used with bind inside the scope of consructor. can just create bind for method inside constructor . binding has to be inside constructor scope
}
  // updateColor
updateColor(val){
  this.setState({fontColor: val});
}
  // updateSize
  updateSize(val){
    this.setState({fontSize: val});
  }
  // updateFamily
  updateFamily(val){
    this.setState({fontFamily: val});
  }
 // updateEditStatus
 updateEditStatus(val){
  this.setState({allowEdit: val});
}
  //componentWillMount(){
    //mounting:component being loaded onto the dom, when it is being rendered. if something needs to be done befor ecomponent renders
  //  console.log('Me First');
 /// }
 // componentDidMount (){
  //  console.log ('Me third');

 // }
  //^after component renders, get data back
  //for updating properties in child components!!!


 // componentWillReceiveProps (nextProps) { 
    //parent telling child component to update^^, update props used in child components
 //   (console.log(`Numero uno: ${nextProps}`);
 //this.setstate{allowEdit: nextProps.allowEdit});
 // }

 //shouldComponentUpdate (nextProps, newState){
   //can tell child omponent if it should update, if returns true then it goes on to next lifecycle method, if falsr it will cancel the update
// }

// componentWillUpdate (nextProps, newState){
   //if set values set to the props, allows to override state value with updated props
   //almost nver used
 //}
//componentDidUpdate(){}

//

render() {
  return (
    <div>
      <div className="headerBar">
        <EditToggle update={ this.updateEditStatus } />
        <ColorChanger update={ this.updateColor } allowEdit={ this.state.allowEdit } />
        <SizeChanger update={ this.updateSize } allowEdit={ this.state.allowEdit } />
        <FamilyChanger update={ this.updateFamily } allowEdit={ this.state.allowEdit } />
      </div>
      <div className="textArea">
        <TextContainer 
          fontColor={ this.state.fontColor }
          fontSize={ this.state.fontSize }
          fontFamily={ this.state.fontFamily } />
      </div>
    </div>
  )
}
}
 // componentWillUnmount(){
  //  console.log("Fired Last");
 // }

//  componentDidCatch (){
    //allows the site to not crash if one of the components has an error, new to react 16
 // }

//unmounting component from the done after it has rendered and its no longer needed^^, after loging page for example, removing events or objects you dont want on page, probably not needed for small projects, removes custom build components if no onger needed

export default App;
