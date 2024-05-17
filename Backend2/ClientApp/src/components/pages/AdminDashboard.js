import React, { Component } from "react";
import { } from "react-router-dom";
import axios from "axios";
import UserList from '../UserList';
import ConfirmationPopup from '../ConfirmationPopup';

export class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [], // Håller användardata
          selectedUserId: null, // Lagrar id för den användare som ska raderas
          showConfirmation: false, // Visar popup för raderingsbekräftelse
          successMessage: "", // Meddelande vid lyckad åtgärd
          errorMessage: "", // Meddelande vid fel
        };
    }
    
    componentDidMount() {
        // Funktion för att hämta användarlistan från backend när komponenten har monterats
        this.fetchUsers();
    }

    fetchUsers = async () => {
        try {
          // Anropa backend-API för att hämta användarlista med Axios
          const response = await axios.get('/auth/users');
          const users = response.data;
          this.setState({ users });
        } catch (error) {
          console.error('Error fetching users:', error);
          this.setState({ errorMessage: 'Kunde inte hämta användare.' });
        }
    };

    handleDelete = (userId) => {
        this.setState({ selectedUserId: userId, showConfirmation: true });
    };

    handleConfirmDelete = async () => {
        try {
          // Anropa backend-API för att radera användaren med Axios
          await axios.delete(`auth/delete/${this.state.selectedUserId}`);
          // Uppdatera användarlistan och dölj popupen
          this.setState(prevState => ({
            users: prevState.users.filter(user => user.id !== prevState.selectedUserId),
            selectedUserId: null,
            showConfirmation: false,
            successMessage: 'Användaren raderades framgångsrikt.',
          }));
        } catch (error) {
          console.error('Error deleting user:', error);
          this.setState({ errorMessage: 'Kunde inte radera användaren.' });
        }
    };

    handleCancelDelete = () => {
        // Avbryt raderingsoperationen och dölj popupen
        this.setState({ selectedUserId: null, showConfirmation: false });
      };
    
    

    render() {
        const { users, showConfirmation, successMessage, errorMessage } = this.state;

        return (
            <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
            <UserList users={users} onDelete={this.handleDelete} />
            {showConfirmation && (
              <ConfirmationPopup
                onDelete={this.handleConfirmDelete}
                onCancel={this.handleCancelDelete}
              />
            )}
          </div>
        );
    }
}
export default AdminDashboard;