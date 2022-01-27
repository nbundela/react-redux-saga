import React, { Component } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

class NewUser extends Component {
    state = {
        firstName :'',
        lastName: ''
    }
    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })
        this.setState({
            firstName: '',
            lastName: ''
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input placeholder="first name" onChange={this.handleFirstNameChange} value={this.state.firstName} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input placeholder="last name" onChange={this.handleLastNameChange} value={this.state.lastName} required/>
                </FormGroup>
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

export default NewUser
