import React, { Component } from 'react';

class EditPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSave(this.props.user.id, this.state.email);
  };

  render() {
    const { onCancel } = this.props;
    const { email } = this.state;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-slate-200 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Redigera Användare</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Spara
                </button>
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 bg-gray-500 text-black rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Avbryt
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  }
}

export default EditPopup;
