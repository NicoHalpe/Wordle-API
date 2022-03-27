const express = require("express");
const request = require("request");
const crypto = require("crypto");
const cors = require("cors");
const { RAE } = require("rae-api");
const rae = new RAE();
/* const Database = require("@replit/database")
const db = new Database() */
const path = require("path");
const words = require("./words").default;

process.on("uncaughtException", function (err) {
	console.error(err);
	console.log("Node NOT Exiting...");
});

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.sendStatus(200);
});

app.use(express.static(path.join(__dirname, "./games")));

app.get("/games", (req, res) => {
	res.sendFile(path.join(__dirname, "/games/games.html"));
});

let eventsRes = [];
app.get("/gameses", function (req, res) {
	res.writeHead(200, {
		"Content-Type": "text/event-stream",
		"Cache-Control": "no-cache",
		Connection: "keep-alive",
	});

	res.on("close", () => {
		const i = eventsRes.indexOf(res);
		eventsRes.splice(i, 1);
	});

	/* db.get("count").then(value => {
		res.write("data: " + JSON.stringify({count: value, now: eventsRes.length + 1}));
		res.write("\n\n");
	}) */

	eventsRes.push(res);
});

app.get("/getWord", async (req, res) => {
	const word = await getWord();
	res.status(200).send(encrypt(word));
	await doRequest("https://wordlestats.nicohalpe.com.ar/newgame");
	/* db.get("count").then((value) => {
		if (value) {
			db.set("count", value + 1);
		} else {
			db.set("count", 1);
		}
		eventsRes.forEach((evRes) => {
			evRes.write("data: " + JSON.stringify({ count: value + 1, now: eventsRes.length }));
			evRes.write("\n\n");
		});
	}); */
});

app.get("/checkWord", async (req, res) => {
	let search;
	try {
		search = await rae.searchWord(req.query.word);
	} catch {
		if (words[req.query.word.toUpperCase()]) res.sendStatus(200);
		else res.sendStatus(201);
		return;
	}
	if (!search) return res.sendStatus(201);
	if (req.query.mode === "1") {
		if (
			search
				.getRes()[0]
				?.getHeader()
				.normalize("NFD")
				.replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi, "$1$2")
				.normalize() === req.query.word
		) {
			res.sendStatus(200);
		} else {
			if (words[req.query.word.toUpperCase()]) res.sendStatus(200);
			else res.sendStatus(201);
		}
	} else {
		if (search.getRes()[0] && !search.getApprox()) {
			res.sendStatus(200);
		} else {
			if (words[req.query.word.toUpperCase()]) res.sendStatus(200);
			else res.sendStatus(201);
		}
	}
});

app.listen(3000, () => {
	console.log("server started");
});

const getWord = async () => {
	const wrs = Object.keys(words);
	const random = Math.floor(Math.random() * wrs.length);
	return wrs[random].toLowerCase();
};

function doRequest(url) {
	return new Promise(function (resolve, reject) {
		request(url, function (error, res, body) {
			if (!error && res.statusCode == 200) {
				resolve(body);
			} else {
				reject(error);
			}
		});
	});
}

const secretKey = process.env["SECRET_KEY"];

const encrypt = (text) => {
	var cipher = crypto.createCipher("aes-256-cbc", secretKey);
	var crypted = cipher.update(text, "utf8", "hex");
	crypted += cipher.final("hex");

	return crypted;
};
