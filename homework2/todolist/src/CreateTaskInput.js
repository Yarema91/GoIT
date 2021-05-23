import React, { Component } from 'react'

class CreateTaskInput extends Component{
    state = {
        value: '',

    };
    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    };
    handleTaskCreate = () => {
        this.props.onCreate(this.state.value)
        this.setState({
            value: ''
        })
        
    }

    render() {
        return (
            <div className="create-task">
                <input type="text"
                onChange={this.handleChange} className="create-task__input"/>
                <button className="btn create-task__btn"
                onClick={this.handleTaskCreate}>Create</button>
            </div>
        )
    }
}

export default CreateTaskInput

//algo:
// 1.  Take text from input 
// 2. Create text with this text
// 3. App in list(Arrray)

