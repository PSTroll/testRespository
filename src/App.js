import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

const allUsers = ['Martyna', 'Marcin', 'Dominika', 'Oliwia', 'Wojtek', 'Stefan'];

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterUsers: allUsers
        }
    }

    filterUsers(e) {
        const text = e.target.value;
        const filterUsers = this.getFilteredUsersFromText(text);
        this.setState({filterUsers})
    }

    getFilteredUsersFromText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
    }

    render() {
        return (
            <div>
                <input type = 'text' placeholder = 'Filtruj imię' onChange = {this.filterUsers.bind(this)} />
                <UserList users = {this.state.filterUsers} />
            </div>
        )
    }

}

const UserList = ({ users }) => {
    if(users.length > 0){
        return (
            <ul>
                {users.map(user => <li key={user}>{user}</li>)}
            </ul>
        )
    }
    return 'No results';
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
