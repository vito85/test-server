const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
	res.status(200).json(JSON.stringify({
		headers: req.headers,
		socket: {
			remoteAddress: req.socket.remoteAddress,
			localAddress: req.socket.localAddress,
		},
		connection: {
			remoteAddress: req.connection.remoteAddress,
			localAddress: req.connection.localAddress,
		}
	}))
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
