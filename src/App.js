import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";

class App extends React.Component {
  state = {
    employeeList:{}
  }
  
  render(){
    return(
      <div className="App">
        <Header/>
        <Search/>
        <Table/>
      </div>
    );
  } 
}

export default App;
