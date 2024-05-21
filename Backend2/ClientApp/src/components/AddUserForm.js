import React, { Component } from "react";
import axios from "axios";

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
  
    try {
      // Logga ut data som ska skickas
      console.log('Sending data:', { email, password });
      
      // Skicka en POST-begäran till backend för att lägga till en ny användare
      const response = await axios.post(
        `/auth/register`,
        { email: email, password: password },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
  
      if (response.status === 201) {
        this.setState({
          email: '',
          password: '',
          successMessage: 'Användaren lades till framgångsrikt.',
          errorMessage: ''
        });
        this.props.onUserAdded();
      }
       else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      console.log('Response data:', error.response.data);
      this.setState({ errorMessage: 'Kunde inte lägga till användaren.' });
    }
  };

  handleCancel = () => {
    this.setState({
      email: '',
      password: '',
    });
    this.props.onCancel();
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="p-6 rounded-md shadow-md">
        <h1 className="font-semibold mb-4">Lägg till användare</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium text-gray-700">Lösenord</label>
            <input type="password" id="password" name="password" value={password} onChange={this.handleChange} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Lägg till</button>
            <button type="button" onClick={this.handleCancel} className="px-4 py-2 bg-gray-400 text-black rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">Avbryt</button>
          </div>
        </form>
        {this.state.errorMessage && (
          <div className="mt-4 text-red-500">
            {this.state.errorMessage}
          </div>
        )}
        {this.state.successMessage && (
          <div className="mt-4 text-green-500">
            {this.state.successMessage}
          </div>
        )}
      </div>
    );
  }
}

export default AddUserForm;