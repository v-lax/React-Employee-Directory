import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";
import axios from "axios";
import "./style.css"

let data; 

class App extends React.Component {
  state = {
    loading: true,
    employeeList: {},
    filteredList:null
  }

  async componentDidMount(){
    let response = await axios({
      method:'get',
      url:'https://randomuser.me/api/?results=50',
      responseType:'stream'
    })
    data = response.data.results;
    this.setState({
      loading: false,
      employeeList:response.data.results,
      filteredList:response.data.results
    })
  }

  search = (str) => {
    const filteredList = this.state.employeeList.filter(employee => {
      const fullName = (employee.name.first+" "+employee.name.last).toLowerCase();
      return fullName.startsWith(str);
    })
    this.setState({filteredList:filteredList});
  }

  sort = (int) =>{
    
    if(int===0){

    }else if(int===1){

    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    return (
      <div className="App">
        <Header />
        <Search searchFunction={this.search}/>
        <Table employees={this.state.filteredList} />
      </div>
    );
  }
}

export default App;