import React from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';
import io from 'socket.io-client';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderLogin: true,
            username: ''
        }

        this.loginSubmit = this.loginSubmit.bind(this);
        this.loginChange = this.loginChange.bind(this);
    }

    loginSubmit(username) {
        this.setState({ username });

        if (username) this.setState({ renderLogin: false });
    }

    loginChange(e) {
        let username = e.target.value;
        this.setState({ username })
    }

    render() {
        const router = this.state.renderLogin;
        const login = (
            <Login
                handleChange={this.loginChange}
                handleSubmit={this.loginSubmit}
                username={this.state.username}
            />)

        return (
            <div className="App">
                {router ? login : <Chat />}
            </div>
        );
    }
}

export default App;
























        // socket.on('messages', (data) => {
        //     console.log(data)
        // });

        // socket.on('new_message', (data) => {
        //     console.log(data)
        // });

        // socket.emit('message', {
        //     username: 'Emil',
        //     content: 'hej, från chat-app',
        // });