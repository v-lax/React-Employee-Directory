import React from "react";
import TableRow from "./TableRow";

function Table(props) {
    return (
        <table className="table table-dark justify-content-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">State</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {/* {this.state.friends.map((friend) => <FriendCard key={friend.id} removeFriend={this.removeFriend} {...friend} />)} */}
                {props.employees.map(((employee) => {
                    return <TableRow key={employee.login.uuid} {...employee} />
                }))}
            </tbody>
        </table>
    )
}

export default Table;