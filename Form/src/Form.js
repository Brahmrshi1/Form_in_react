import React, { Component } from 'react'
//  import validatorjs from 'validatorjs';


export default class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
        usernmae: "",
        email: "",
        password: "",
    }

    change = e => {
        // this.props.onChange({[e.target.name]:e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {};


        if (this.state.firstname.length < 2) {
            isError = true;
            errors["firstname"] = "first name to be atleast 2 character long";
        }

        if (this.state.lastname.length < 2) {
            isError = true;
            errors["lastname"] = "Last name to be atleast 2 character long";
        }

        
        if (this.state.usernmae.length < 2) {
            isError = true;
            errors["usernmae"] = "Last name to be atleast 2 character long";
        }

        if (this.state.email.length === 0) {
            isError = true;
            errors["email"] = "email is not valid";
        }

        if (this.state.password.length < 8) {
            isError = true;
            errors["password"] = "password must be atleast 8 character long";
        }

        if (isError) {
            this.setState({
                ...this.state,
               ...errors 
            });
        }

        return isError;
    };
    


    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        // console.log(this.state);
        const err = this.validate();
        if(!err){
          this.setState({
            firstname: "",
            lastname: "",
            usernmae: "",
            email: "",
            password: "",

            
        });
        

        
    }else{
        this.setState({
            firstname: "",
            lastname: "",
            usernmae: "",
            email: "",
            password: "",
        });
    }
     
    // if(!err){
    // this.props.onChange({
    //         firstname: "",
    //         lastname: "",
    //         usernmae: "",
    //         email: "",
    //         password: "",

    //     });
    // }
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        name="firstname"
                        placeholder='First Name'
                        //  value={this.state.firstname}
                        // onChange={e => this.setState({ firstname: e.target.value })}
                        onChange={e => this.change(e)}
                        errorText={this.state.name}
                    />
                    <br />
                    <span style={{color: "red"}}>{this.state.firstname}</span>
                    <br/>
                    <input
                        name="lastname"
                        placeholder='Last Name'
                        //  value={this.state.lastname}
                        // onChange={e => this.setState({ lastname: e.target.value })}
                        onChange={e => this.change(e)}
                        errorText={this.state.lastname}
                    />
                    <br />
                    <span style={{color: "red"}}>{this.state.lastname}</span>
                    <br/>
                    <input
                        name="usernmae"
                        placeholder='User Name'
                    //     value={this.state.usernmae}
                        // onChange={e => this.setState({ username: e.target.value })}
                        onChange={e => this.change(e)}
                        errorText={this.state.usernmae}
                    />
                    <br />
                    <span style={{color: "red"}}>{this.state.usernmae}</span>
                    <br/>
                    <input
                        name="email"
                        placeholder='Email-Id'
                        //  value={this.state.email}
                        // onChange={e => this.setState({ email: e.target.value })}
                        onChange={e => this.change(e)}
                        errorText={this.state.email}
                    />
                    <br />
                    <span style={{color: "red"}}>{this.state.email}</span>
                    <br/>
                    <input
                        name="password"
                        placeholder='Password'
                        //  value={this.state.password}
                        // onChange={e => this.setState({ password: e.target.value })}
                        onChange={e => this.change(e)}
                        errorText={this.state.password}
                    />
                    <br />
                    <span style={{color: "red"}}>{this.state.password}</span>
                    <br />
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>

            </div>
        )
    }   
}
