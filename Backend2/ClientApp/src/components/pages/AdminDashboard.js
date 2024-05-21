import React, { Component } from "react";
import axios from "axios";
import UserList from '../UserList';
import ConfirmationPopup from '../ConfirmationPopup';
import EditPopup from '../EditPopup';
import AddUserForm from "../AddUserForm";

export class AdminDashboard extends Component {
    //static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
          users: [], // Håller användardata
          selectedUserId: null, // Lagrar id för den användare som ska raderas
          selectedUserRoleId: null, //Lagrar roll för användare som ska raderas
          showConfirmation: false, // Visar popup för raderingsbekräftelse
          showEdit: false, //Visar popup för redigera
          showAddUserForm: false,
          successMessage: "", // Meddelande vid lyckad åtgärd
          errorMessage: "", // Meddelande vid fel
          userToEdit: null,
        };
    }
    
    componentDidMount() {
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

    handleDelete = (userId, role) => {
        this.setState({ selectedUserId: userId, selectedUserRoleId: role, showConfirmation: true });
    };

    handleConfirmDelete = async () => {
    
        try {
            // Hämta JWT-token från localStorage
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Ingen autentiseringstoken funnen.');
            }

            // Konfigurera Axios för att inkludera JWT-token i authorization-headern
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            // Skicka en DELETE-begäran till backend för att radera användare med det angivna användar-ID:et
            const response = await axios.delete(`/auth/delete`, {
                ...config,
                data: { id: this.state.selectedUserId, roleId: this.state.selectedUserRoleId } // Skicka användar-ID och roll i request body
            });

            // Uppdatera state efter framgångsrik borttagning
            if (response.status === 200) {
                this.setState(prevState => ({
                    users: prevState.users.filter(user => user.id !== prevState.selectedUserId),
                    successMessage: 'Användaren raderades framgångsrikt.',
                    errorMessage: ''
                }));
                this.handleCancelDelete();
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            this.setState({ errorMessage: 'Kunde inte radera användaren.' });
        }
    }
    

    handleCancelDelete = () => {
        // Avbryt raderingsoperationen och dölj popupen
        this.setState({ selectedUserId: null, selectedUserRoleId: null, showConfirmation: false });
    };

    handleEdit = (user) => {
        this.setState({ userToEdit: user, showEdit: true });
    };
    
    handleSaveEdit = async (userId, newEmail) => {
        try {
          // Skicka en PUT-begäran till backend för att uppdatera användarens e-postadress
          const response = await axios.put(
            `/auth/update`,
            { id: userId, email: newEmail },
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
          );
    
          if (response.status === 200) {
            // Uppdatera användarlistan efter framgångsrik uppdatering
            this.setState(prevState => ({
              users: prevState.users.map(user => {
                if (user.id === userId) {
                  return { ...user, email: newEmail };
                } else {
                  return user;
                }
              }),
              userToEdit: null,
              showEdit: false,
              successMessage: 'Användaren uppdaterades framgångsrikt.',
              errorMessage: ''
            }));
            this.handleCancelEdit();
          }
        } catch (error) {
          console.error('Error updating user:', error);
          this.setState({ errorMessage: 'Kunde inte uppdatera användaren.' });
        }
    };
    
    handleCancelEdit = () => {
        this.setState({ userToEdit: null, showEdit: false });
    };
    
    handleShowAddUserForm = () => {
        this.setState({ showAddUserForm: true });
    };
    
    handleHideAddUserForm = () => {
        this.setState({ showAddUserForm: false });
    };
    

    render() {
        const { users, showConfirmation, showEdit, showAddUserForm, successMessage, errorMessage, userToEdit } = this.state;

        return (
        <div class="bg-gray-400 w-96 h-96 relative z-0">
            {!showAddUserForm && (
            <button onClick={this.handleShowAddUserForm} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Lägg till användare</button>
            )}
            {successMessage && <div className="success">{successMessage}</div>}
            {errorMessage && <div className="error">{errorMessage}</div>}
            {showAddUserForm && (
            <AddUserForm onCancel={this.handleHideAddUserForm} onUserAdded={this.fetchUsers}/>
            )}
            <UserList users={users} onDelete={this.handleDelete} onEdit={this.handleEdit} />
            <div class="absolute inset-y-0 left-1/2 z-10 bg-green-400 w-1/3 md:invisible">
                <div class="flex h-full items-center justify-center text-4xl">
                {showConfirmation && (
                <ConfirmationPopup onDelete={this.handleConfirmDelete} onCancel={this.handleCancelDelete} />
                )}
                </div>
            </div>
            <div class="absolute inset-y-0 left-1/2 z-10 bg-green-400 w-1/3 md:invisible">
                <div class="flex h-full items-center justify-center text-4xl">
                {showEdit && userToEdit && (
                <EditPopup user={userToEdit} onSave={this.handleSaveEdit} onCancel={this.handleCancelEdit} />
                )}
                </div>
            </div>
        </div>
        );
    }
}
export default AdminDashboard;