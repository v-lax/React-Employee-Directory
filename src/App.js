import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";
import axios from "axios";
import "./style.css"

class App extends React.Component {
  state = {
    loading: true,
    employeeList: {}
  }

  async componentDidMount(){
    let response = await axios({
      method:'get',
      url:'https://randomuser.me/api/?results=50',
      responseType:'stream'
    })

    this.setState({
      loading: false,
      employeeList:response.data.results
    })
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
        <Search />
        <Table />
      </div>
    );
  }
}

export default App;