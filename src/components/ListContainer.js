import React from "react";

class ListContainer extends React.Component {


render(){
return (
    <>
      <h1 style={{color: "#f53aeb"}}>{this.props.nombre}</h1>
      <h1 style={{color: "#f53aeb"}}>{this.props.app}</h1>
    </>
  );
}
}


export default ListContainer;