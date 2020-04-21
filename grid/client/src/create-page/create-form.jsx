import React from 'react';

class createForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            jobPosition: '',
            department: ''
        };

    }

    firstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }
    lastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }
    emailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    jobPositionChange = (event) => {
        this.setState({ jobPosition: event.target.value });
    }
    departmentChange = (event) => {
        this.setState({ department: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
        console.log(this.state);
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> FirstName:</label>
                <input type="text" value={this.state.firstName} onChange={this.firstNameChange} />
                <label> LastName:</label>
                <input type="text" value={this.state.lastName} onChange={this.lastNameChange} />
                <label> Email:</label>
                <input type="text" value={this.state.email} onChange={this.emailChange} />
                <label> Job Position:</label>
                <input type="text" value={this.state.jobPosition} onChange={this.jobPositionChange} />
                <label> Department:</label>
                <input type="text" value={this.state.department} onChange={this.departmentChange} />
                <br/>
                <button type="submit" value="Submit" >Create</button>
            </form>
        );
    }
}

export default createForm