const fetch = require("node-fetch");

let _checkEnvVariable = () => {
	if (typeof process.env.WD_URL_ROOT !== "string") {
		throw new TypeError('Could not find a WD_URL_ROOT environment variable. Please set it to the root URL of your Watch_Dog instance.')
	}
}

let _checkBotStatus = async () => {
	var t = await fetch(process.env.WD_URL_ROOT + "/bot-status");
	t = await t.json();
	return t.isAlive;
}

exports.create = async (msg, ping) => {
	_checkEnvVariable()

	let status = await _checkBotStatus()
	if(!status) return;

	msg = msg || ""
	var t = await fetch(process.env.WD_URL_ROOT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			api: "create",
			status: msg,
			ping: ping || false
		})
	}).catch(err => {
		throw new TypeError(err);
	})

	t = await t.json()
	return t
}

exports.send = async (id, msg) => {
	_checkEnvVariable()

	let status = await _checkBotStatus()
	if(!status) {
		console.log("FROM wdsdk: " + msg);
		return;
	}

	var t = await fetch(process.env.WD_URL_ROOT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			api: "send",
			id: id,
			msg: msg
		})
	}).catch(err => {
		throw new TypeError(err);
	})

	t = await t.json()
	return t
}

exports.destroy = async (id) => {
	_checkEnvVariable()

	let status = await _checkBotStatus()
	if(!status) return;

	var t = await fetch(process.env.WD_URL_ROOT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			api: "destroy",
			id: id
		})
	}).catch(err => {
		throw new TypeError(err);
	})

	t = await t.json()
	return t
}

exports.close = async (id, job) => {
	_checkEnvVariable()

	let status = await _checkBotStatus()
	if(!status) return;

	var t = await fetch(process.env.WD_URL_ROOT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			api: "close",
			id: id,
			job: job || false
		})
	}).catch(err => {
		throw new TypeError(err);
	})

	t = await t.json()
	return t
}