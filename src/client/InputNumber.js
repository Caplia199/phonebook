import React, { Component } from 'react'
import { Button, TextField, MenuItem, Select } from '@mui/material';
import postNumber from './api/addNumber';

class Input extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         input: "",
         items: [],
         value: ""
      };

    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChangeCode(event) {
        this.setState({
            value: event.target.value
        });
    };

    handleChangeNumber(event){
        this.setState({
            input: event.target.value
        });
    };

    handleSubmit(event){
        event.preventDefault()
        postNumber({
            "code": `${this.state.value}`,
            "number": `${this.state.input}`
        })    
        this.setState({
            input: this.state.input,
            items: [...this.state.items, '+' + this.state.value + ' ' + this.state.input]
        });
    };

  render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <Select className="input" label="+7" code="code" value={this.state.value} onChange={this.handleChangeCode} >
                <MenuItem value={7}>+7</MenuItem>
                <MenuItem value={90}>+90</MenuItem>
                <MenuItem value={594}>+594</MenuItem>
                </Select>
                <TextField className="input" label="Введите номер телефона:" variant="filled" nimber="nimber" value={this.state.input} onChange={this.handleChangeNumber}/>
                <Button variant="contained" type='submit'>Сохранить</Button>
            </form>
        </div>
        );
    };
    
};


export default Input 

