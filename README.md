## Watch_Dog SDK

> **NOTE**: This SDK should *only* be used if you have access to [alimosallaei19/Watch_Dog](https://github.com/alimosallaei19/Watch_dog). Otherwise, there is no point.

Watch_Dog is a vTerminal/error handling system that connects to a Discord bot. Basically, if you're running Cron Jobs, you can use this SDK to interact with Watch_Dog to output terminal actions for your records. 

### Installation

```bash
npm install @alimosallaei/wdsdk
```
```js
// app.js
const wd = require('wdsdk')
```

### Usage
> `.create()`: Creates a new vTerminal instance. In Discord, this creates a new channel. Returns the `id` of the channel.

---

> `.send(id, msg)`: Send a message to the vTerminal channel. `id` and `msg` should both be strings. Returns `true` if properly executed. 

---

> `.close(id)`: Closes the vTerminal instance. This will rename the terminal and move it out of the live queue. Returns the `name` of the channel.