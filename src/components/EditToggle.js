import React from 'react';

//export default class EditToggle extends Component {
 //// render() {
  //  return (
    //function that return JSX, used instead of component, can pass parameters used in code below. if you using state, use constructor and class syntax, if just need to render JSX can use function
     
    const EditToggle =() => (
     
     <select className="dropDownContainer ml0" 
     onChange={ (event) => this.props.update(event.target.value) }
     >
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
     )
   // )
  //}
//}
export default EditToggle;