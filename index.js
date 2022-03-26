const fetch = require("node-fetch");

let _checkEnvVariable = () => {
	if(typeof process.env.WD_URL_ROOT !== "string"){
		throw new TypeError('Could not find a WD_URL_ROOT environment variable. Please set it to the root URL of your Watch_Dog instance.')
	}
}

exports.create = async () => {
	_checkEnvVariable()

	var t = await fetch(process.env.WD_URL_ROOT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			api: "create"
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
			id, msg
		})
	}).catch(err => {
		throw new TypeError(err);
	})

	t = await t.json()
	return t
}

exports.send = async (id) => {
	_checkEnvVariable()

	var t = await fetch(process.env.WD_URL_ROOT, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			api: "close",
			id
		})
	}).catch(err => {
		throw new TypeError(err);
	})

	t = await t.json()
	return t
}