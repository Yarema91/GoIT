import { Component } from "react";

class Form extends Component {
    state = {
        // contacts: [
        //     { name: "Misha" , tel: "+38096",  id: 1},
        //     { name: "Yarema", tel: "+38098",  id: 2}
        // ],
        name: '',
        tel: '',

    }
    handleChange = event => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSabmit = event => {
        event.prevent.defoult()
        console.log(this.state);

    }
    
   
    render() {
        return (
            <form className="login-form" onSabmit={this.handleSabmit}>
                 <h1 className="form-title">PHONEBOOK</h1>
                <div className="form-control">
                    <label className="form-label">Name</label>
                    <input className="form-input"
                    value={this.state.name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label className="form-label">Namber</label>
                    <input
                        value={this.state.tel}
                        type="text"
                        name="namber"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                    />
                </div>
    
                <button className='submit-button' >Add contact</button>
            </form>
        )

    }
    
}

export default Form;