import { io } from 'socket.io-client';

let socket;
export const initiateSocketConnection = (token) => {
	if(socket) return(true);
	socket = io(process.env.REACT_APP_SOCKET_ENDPOINT, {
		auth: {
			token
		},
		transports: ["websocket"]
	});
	console.log(`Connecting socket...`);
}

export const disconnectSocket = () => {
	console.log('Disconnecting socket...');
	if(socket) socket.disconnect();
}

export const sendMessage = (msg) => {
	socket.emit('newMessage', msg);
}

export const subscribeToMessages = (cb) => {
	if (!socket) return (true);
	socket.on('incomingMessage', msg => {
		return cb(msg);
	})
}

