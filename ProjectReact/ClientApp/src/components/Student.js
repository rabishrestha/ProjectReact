import React, { Component } from 'react';

export class Student extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "Rabi"
        }

    };

    handleFirstname = (event) => {
        this.setState({ firstname: event.target.value });
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        let fn = this.state.firstname;
        if (fn == "")
            alert("firstname is required");
        else {
            console.log(fn);
            alert(`My Firstname is ${this.state.firstname}`);
        }
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Student</h1>
                    Firstname <input type="text" value={this.state.firstname} onChange={this.handleFirstname} />

                    <button className="btn btn-primary" >Submit</button>
                </div>
            </form>
        );

    }
}