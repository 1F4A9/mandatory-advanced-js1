import React from 'react';
import io from 'socket.io-client';
import Linkify from 'react-linkify';
import Emojify from 'react-emojione';
import ScrollToBottom from 'react-scroll-to-bottom';

class Chat extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            socket: '',
            userData: [],
            newMessages: [],
            currentInput: '',
        }

        this.backButton = this.backButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const socket = io('http://3.120.96.16:3000');
        this.setState({ socket });

        socket.once('messages', (data) => {
            this.setState({ userData: data })
        })

        socket.on('new_message', (data) => {
            let messages = this.state.newMessages;
            messages.push(data);
            this.setState({ newMessages: messages });
        })
    }

    componentWillUnmount() {
        let socket = this.state.socket;

        socket.off('new_message');
    }

    backButton() {
        this.props.backButton(this.props.username)
    }

    onChange(e) {
        let currentInput = e.target.value;

        this.setState({ currentInput });
    }

    onSubmit(e) {
        e.preventDefault();

        const username = this.props.username;
        const { currentInput, socket, newMessages } = this.state;
        const clientMessage = {
            username: username,
            content: currentInput,
            id: Math.random()
        }

        newMessages.push(clientMessage)

        this.setState({ newMessages })

        socket.emit('message', {
            username: username,
            content: currentInput,
        })

        this.setState({ currentInput: '' })
    }

    render() {
        const { newMessages, userData } = this.state;
        const username = this.props.username;

        // kopiera värden med rest: const copyOfA = {...a};

        // const { onChange, ...rest } = this.props; -> innehåller allting i this.props 
        // förutom onChange

        return (
            <>
                <div id="chat-container">
                    <div id="chat-box">
                        <header>
                            <h5>inloggad som: {username}</h5>
                            <button
                                id="btn-close"
                                onClick={this.backButton}>
                                x
                        </button>
                        </header>
                        <ScrollToBottom className="message-area">
                            <Linkify>
                                <Emojify>
                                    {userData.map(data => <p key={data.id}>{data.username} {data.content}</p>)}
                                    {newMessages.map(data => <p key={data.id}>{data.username} {data.content}</p>)}
                                </Emojify>
                            </Linkify>
                        </ScrollToBottom>
                        <div id="controls">
                            <form id="textbox" onSubmit={this.onSubmit}>
                                <input
                                    id="chat-input"
                                    type="text"
                                    placeholder="Message"
                                    minLength="1"
                                    maxLength="200"
                                    value={this.state.currentInput}
                                    onChange={this.onChange}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Chat;