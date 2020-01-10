import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validation: true,
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const { username, handleSubmit } = this.props;

        let validation = /^[a-zA-Z_-\s]{1,12}$/.test(this.props.username);

        this.setState({ validation })
        validation ? handleSubmit(username) : handleSubmit('');
    }

    render() {
        const validationMessage = <p>The Username must be between 1-12 and can only contain alphanumeric characters, spaces and the following characters: '-', '_'</p>;
        const validation = this.state.validation;
        const onValid = (
            <input
                id="username-input"
                type="text"
                placeholder="username"
                onChange={this.props.handleChange}
            />)
        const notValid = (
            <input
                id="username-input"
                type="text"
                placeholder="username"
                onChange={this.props.handleChange}
                style={{ borderColor: 'red' }}
            />)

        return (
            <div className="login-container">
                <div className="form-container">
                    <h1>Chat App</h1>
                    {validationMessage}
                    <form id="login-form" onSubmit={this.onSubmit}>
                        {validation ? onValid : notValid}
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