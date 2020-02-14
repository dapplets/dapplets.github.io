/*
    browser.browserAction.setIcon
    browser.commands.onCommand.addListener
    browser.contextMenus.create
    browser.contextMenus.removeAll
    browser.extension.getURL
    browser.extension.sendMessage
    browser.notifications.create
    browser.notifications.onClicked.addListener
    browser.runtime.onMessage.addListener
    browser.runtime.sendMessage
    browser.storage.local.get
    browser.storage.local.remove
    browser.storage.local.set
    browser.tabs.create
    browser.tabs.onActivated.addListener
    browser.tabs.onUpdated.addListener
    browser.tabs.query
    browser.tabs.sendMessage
*/

const browser = {};

browser.browserAction = {};
browser.commands = {};
browser.commands.onCommand = {};
browser.contextMenus = {};
browser.extension = {};
browser.notifications = {};
browser.notifications.onClicked = {};
browser.runtime = {};
browser.runtime.onMessage = {};
browser.storage = {};
browser.storage.local = {};
browser.tabs = {};
browser.tabs.onActivated = {};
browser.tabs.onUpdated = {};

browser.browserAction.setIcon = function () {
    console.log('browser.browserAction.setIcon', arguments);
}
browser.commands.onCommand.addListener = function () {
    console.log('browser.commands.onCommand.addListener', arguments);
}
browser.contextMenus.create = function () {
    console.log('browser.contextMenus.create', arguments);
}
browser.contextMenus.removeAll = function () {
    console.log('browser.contextMenus.removeAll', arguments);
}
browser.extension.getURL = function (url) {
    console.log('browser.extension.getURL', arguments);
    return 'extension/em_' + url;
}
browser.notifications.create = function () {
    console.log('browser.notifications.create', arguments);
}
browser.notifications.onClicked.addListener = function () {
    console.log('browser.notifications.onClicked.addListener', arguments);
}
browser.runtime.onMessage.addListener = function (callback) {
    console.log('browser.runtime.onMessage.addListener', arguments);
    window.top.addEventListener('message', e => {
        const payload = JSON.parse(e.data);
        if (payload.request !== undefined) {
            callback !== undefined && callback(payload.request, {}, (result) => {
                window.top.postMessage(JSON.stringify({
                    id: payload.id,
                    response: result
                }), '*');
            })
        }
    });
}
browser.runtime.sendMessage = function (message, callback) {
    console.log('browser.runtime.sendMessage', arguments);
    sendMessage(message, callback);
}
browser.storage.local.get = function (key, callback) {
    console.log('browser.storage.local.get', arguments);
    const _storage = JSON.parse(localStorage.getItem('dapplet-extension') || "{}");

    let result = {};
    if (!key) {
        result = _storage;
    } else if (Array.isArray(key)) {
        key.map(akey => {
            if (typeof _storage[akey] !== 'undefined') {
                result[akey] = _storage[akey];
            }
        });
    } else if (typeof key === 'object') {
        // TODO support nested objects
        Object.keys(key).map(oKey => {
            if (typeof _storage[oKey] !== 'undefined') {
                result[oKey] = _storage[oKey];
            } else {
                result[oKey] = key[oKey];
            }
        });
    } else {
        result[key] = _storage[key];
    }
    console.log('result storage', result);
    callback !== undefined && callback(result);
}
browser.storage.local.remove = function (key, callback) {
    console.log('browser.storage.local.remove', arguments);
    const _storage = JSON.parse(localStorage.getItem('dapplet-extension') || "{}");
    if (Array.isArray(key)) {
        key.map(aKey => {
            delete _storage[aKey];
        });
    } else {
        delete _storage[key];
    }

    localStorage.setItem('dapplet-extension', JSON.stringify(_storage));

    callback !== undefined && callback();
}
browser.storage.local.set = function (key, value, callback) {
    console.log('browser.storage.local.set', arguments);
    const _storage = JSON.parse(localStorage.getItem('dapplet-extension') || "{}");
    if (typeof key === 'object') {
        // TODO support nested objects
        Object.keys(key).map(oKey => {
            _storage[oKey] = key[oKey];
        });
        localStorage.setItem('dapplet-extension', JSON.stringify(_storage));
        value();
    } else {
        _storage[key] = value;
        localStorage.setItem('dapplet-extension', JSON.stringify(_storage));
        callback !== undefined && callback();
    }
}
browser.tabs.create = function () {
    console.log('browser.tabs.create', arguments);
}
browser.tabs.onActivated.addListener = function () {
    console.log('browser.tabs.onActivated.addListener', arguments);
}
browser.tabs.onUpdated.addListener = function () {
    console.log('browser.tabs.onUpdated.addListener', arguments);
}
browser.tabs.query = function (query, callback) {
    console.log('browser.tabs.query', arguments);
    callback !== undefined && callback([{
        id: '1',
        url: 'http://127.0.0.1:5500/build/index.html',
        pendingUrl: 'http://127.0.0.1:5500/build/index.html'
    }]);
}
browser.tabs.sendMessage = function (tabId, message, callback) {
    console.log('browser.tabs.sendMessage', arguments);
    sendMessage(message, callback);
}

window.browser = browser;

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function sendMessage(message, callback) {
    const id = uuidv4();

    window.top.postMessage(JSON.stringify({
        request: message,
        id: id
    }), '*');

    const handler = (event) => {
        const payload = JSON.parse(event.data);

        if (payload.id === id && (payload.response !== undefined || payload.request === undefined)) {
            callback !== undefined && callback(payload.response);
            window.top.removeEventListener('message', handler);
        }
    }

    window.top.addEventListener('message', handler);
}


// window.frames.background.postMessage("message", "*");
// window.frames.popup.postMessage("message", "*");