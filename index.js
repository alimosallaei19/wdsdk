const fetch = require("node-fetch");

let _checkEnvVariable = () => {
	if(typeof process.env.WD_URL_ROOT !== "string"){
		throw new TypeError('Could not find a WD_URL_ROOT environment variable. Please set it to the root URL of your Watch_Dog instance.')
	}
}

exports.create = async (msg, ping) => {
	_checkEnvVariable()

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

exports.close = async (id, job) => {
	_checkEnvVariable()

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