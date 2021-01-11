import React from "react";
import Header from "./component/Header";
import Search from "./component/Search";
import Table from "./component/Table";
import axios from "axios";
import "./style.css"
import { findAllByTestId } from "@testing-library/react";

let data;

class App extends React.Component {
  state = {
    loading: true,
    employeeList: {},
    filteredList: null,
    ascending: true
  }

  async componentDidMount() {
    let response = await axios({
      method: 'get',
      url: 'https://randomuser.me/api/?results=50',
      responseType: 'stream'
    })
    data = response.data.results;
    this.setState({
      loading: false,
      employeeList: response.data.results,
      filteredList: response.data.results
    })
  }

  search = (str) => {
    const filteredList = this.state.employeeList.filter(employee => {
      const fullName = (employee.name.first + " " + employee.name.last).toLowerCase();
      return fullName.startsWith(str);
    })
    this.setState({ filteredList: filteredList });
  }

  sort = (header) => {

    if (header === 'Name') {
      if (this.state.ascending === true) {
        this.sortAscending(this.state.filteredList)
        this.setState({ ascending: false })
      }
      if (this.state.ascending === false) {
        this.sortDecending(this.state.filteredList)
        this.setState({ ascending: true })
      }
    } else if (header === 'Email') {
      if (this.state.ascending === true) {
        this.sortAscending(this.state.filteredList)
        this.setState({ ascending: false })
      }
      if (this.state.ascending === false) {
        this.sortDecending(this.state.filteredList)
        this.setState({ ascending: true })
      }
    } else if (header === 'Age') {

    } else if (header === "State") {

    }
  }
  sortAscending = (arr) => {
    arr.sort(function (a, b) {
      var nameA = (a.name.first + a.name.last).toUpperCase(); // ignore upper and lowercase
      var nameB = (b.name.first + b.name.last).toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ filteredList: arr })
  }

  sortDecending = (arr) => {
    arr.sort(function (a, b) {
      var nameA = (a.name.first + a.name.last).toUpperCase(); // ignore upper and lowercase
      var nameB = (b.name.first + b.name.last).toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    this.setState({ filteredList: arr })
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
        <Search searchFunction={this.search} />
        <div class="card">
          <div class="card-body text-center">
            Click on the name column to sort the table by name.
          </div>
        </div>
        <Table employees={this.state.filteredList} sort={this.sort} />
      </div>
    );
  }
}

export default App;