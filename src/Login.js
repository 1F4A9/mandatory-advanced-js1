import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.props.username);
    }

    render() {
        return (
            <>
                <h1>Chat-App</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        onChange={this.props.handleChange}>
                    </input>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}

export default Login;