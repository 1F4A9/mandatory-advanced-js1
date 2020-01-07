import React from 'react';

class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="chat-container">
                <input id="chat-input" type="text"></input>
            </div>
        )
    }
}

export default Chat;