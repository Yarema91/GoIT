import React, { Component } from 'react'


class ContactsList extends Component {
  state = {
    contacts: [
      { name: "Misha" , tel: "+38096",  id: 1},
      { name: "Yarema", tel: "+38098",  id: 2}
    ],
  }
  render() {
    return (
      <div className="contacts">
        <h1>Contacts:</h1>
        <ul className=".stat-list">
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}
              <button>x</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}



export default ContactsList;







