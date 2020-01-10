import React from 'react';
import './App.css';
import Login from './Login';
import Chat from './Chat';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            renderLogin: true,
            username: ''
        }

        this.loginSubmit = this.loginSubmit.bind(this);
        this.loginInputChange = this.loginInputChange.bind(this);
        this.chatBackButton = this.chatBackButton.bind(this);
    }

    loginSubmit(username) {
        this.setState({ username });

        if (username) this.setState({ renderLogin: false });
    }

    loginInputChange(e) {
        let username = e.target.value;
        this.setState({ username })
    }

    chatBackButton(username) {
        if (username) this.setState({ renderLogin: true });
    }

    render() {
        const router = this.state.renderLogin;
        const login = (
            <Login
                handleChange={this.loginInputChange}
                handleSubmit={this.loginSubmit}
                username={this.state.username}
            />)
        const chat = (
            <Chat
                backButton={this.chatBackButton}
                username={this.state.username}
            />
        )

        return (
            <div className="App">
                {router ? login : chat}
            </div>
        );
    }
}

export default App;