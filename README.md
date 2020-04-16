This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running
Clone repository.
Run npm install.
Run npm start.
Go to http://localhost:3000.

## Assignment instructions
In this exercise you will create a simple chat application using React. The backend server is
provided.<br/><br/>
A socket.io server is provided at: http://3.120.96.16:3000 (This URL could change).

## Events

The server sends the following events
<ul>
  <li><i>messages</i> - This event is sent automatically when a client connects and will give a list of all messages on the server</li>
  <li><i>new_message</i> - This event is sent to all clients (except the sender) when a new message is sent to the server</li>
</ul>

A message sent from the server has the following structure

```
{
username: “A username”,
content: “A message”,
timestamp: 1551191228686, // A timestamp in milliseconds
id: “message-120”, // A unique ID
}
```

To send a new message to the server an event called “message” is sent from the client. The message should have the following form:

```
{
username: “A username”,
content: “A message”,
timestamp: 1551191228686, // A timestamp in milliseconds
id: “message-120”, // A unique ID
}
```

## The client
Your task is to implement a client for this server. The client should be implemented using React and contain two views:
<ul>
  <li>A "login" screen where the user inputs a username</li>
  <li>A "chat" screen that shows all the messages and contains a text input field where the user can add new messages</li>
</ul>

## Validation
The server has some limitations on the username and content
<ul>
  <li>The username can only contain alphanumeric characters, "-", "_" and spaces and must be between 1 and 12 characters long</li>
  <li>The content must be between 1 and 200 characters long</li>
</ul>

This validation should be added to the client.

## Emojis
The client should handle emojis, similar to how it works in Slack.
E.g. if the message contains the string ":heart:" it should be replaced with a heart emoji :heart:. You are required to support at least three different emojis.

## Links
If a message contains a URL it should be automatically converted to a link.

## Requirements
The client has the following requirements
<ul>
  <li>It should contain a “login” screen with a text input and a button. This screen is shown when the app is opened.</li>
  <li>When a username is submitted the user is shown a "chat" screen with a text input for ending messages and a list of messages./li>
  <li>The message list should be populated with the messages received from the server and new messages should be added automatically (including messages sent from the client)</li>
  <li>The chat screen should contain a “close” button so the user can return to the "login" screen</li>
  <li>Support for emojis</li>
  <li>Automatically convert URLs into links</li>
</ul>
