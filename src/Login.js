import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseOver() {
        console.log('hej')
    }

    onSubmit(e) {
        e.preventDefault();

        let validation = /^[a-zA-Z_-\s]{1,12}$/.test(this.props.username);

        validation ? this.props.handleSubmit(this.props.username) : this.props.handleSubmit('');
    }

    render() {
        let validation = <p>The Username must be between 1-12 and can only contain alphanumeric characters, spaces and the following characters: '-', '_'</p>;

        return (
            <div className="login-container">
                <div className="form-container">
                    <h1>Chat App</h1>
                    {validation}
                    <form id="login-form" onSubmit={this.onSubmit}>
                        <input
                            id="username-input"
                            type="text"
                            placeholder="username"
                            onChange={this.props.handleChange}
                        />
                        <input
                            id="login-btn"
                            value="Sign in"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;