var __wpo = {
  "assets": {
    "main": [
      "/favicon.ico",
      "/manifest.json",
      "/4da8f7834c511a73d59a1e1a9be1a723.svg",
      "/fe120d95cd0b5e127addb0d4399ddd9b.png",
      "/175b7fbace6a89e5f8fc626f89a81387.png",
      "/060b70f4ac8052687a01cdb26ebb3b86.png",
      "/main.8f74eb3d3fe86ee294a7.js",
      "/"
    ],
    "additional": [
      "/0.ff243b8df7dc8f0e9329.chunk.js",
      "/1.de2fe227e24535992ea2.chunk.js",
      "/2.f1b6048919b3d1fc8fe4.chunk.js",
      "/3.5c031638b91ed5b23616.chunk.js",
      "/4.b902a5182681bd7e1983.chunk.js",
      "/5.b15de8b17f4d8a63806b.chunk.js",
      "/6.e6a648a3d6c6c53efa2e.chunk.js",
      "/7.51d2404b37a477eeef23.chunk.js"
    ],
    "optional": []
  },
  "externals": [],
  "hashesMap": {
    "5e53ef208f3fa79a48f8374488f473c76e1233de": "/favicon.ico",
    "417359b1cbf7044939595d15befeb0717db624fb": "/manifest.json",
    "3579cd926ca776827ea8d6c9bd40708c83c3476c": "/4da8f7834c511a73d59a1e1a9be1a723.svg",
    "8c2ddba49c3ce5ecfe0ab6686ff89e1b5fd8beb1": "/fe120d95cd0b5e127addb0d4399ddd9b.png",
    "c23a549a88a68d9afb20307efc90026fffbe81c0": "/175b7fbace6a89e5f8fc626f89a81387.png",
    "332ba3d916326e8e5e3fac84437082cb84d94a57": "/060b70f4ac8052687a01cdb26ebb3b86.png",
    "c0cf491129521ed44cc0d68f65bfec4f5d6ab44f": "/0.ff243b8df7dc8f0e9329.chunk.js",
    "e96eb9f1d8c4f7d1d2a0d3ed01d7bf9053a4e284": "/1.de2fe227e24535992ea2.chunk.js",
    "27a0da1c9fa4fc9bd7902ee7aaee21589f8fe486": "/2.f1b6048919b3d1fc8fe4.chunk.js",
    "1c8bcd22504327759850d5668904510f8ab5d2ba": "/3.5c031638b91ed5b23616.chunk.js",
    "81a7d050f53dad268842efc9792d0b8b65afa64f": "/4.b902a5182681bd7e1983.chunk.js",
    "f193488be24c52372d2dcba4cd6219eaaa7117cf": "/5.b15de8b17f4d8a63806b.chunk.js",
    "946363ac6f43d27a1e52d68e5dc12d12b4bf4fc7": "/6.e6a648a3d6c6c53efa2e.chunk.js",
    "1225a7a937c8befd230c66b7e6e068bee8753359": "/7.51d2404b37a477eeef23.chunk.js",
    "a58e4b000418e90c6fba2b0b2ba4e68ee67b417b": "/main.8f74eb3d3fe86ee294a7.js",
    "bf05a750f1622427e879284f0eba9f8a551cba84": "/"
  },
  "strategy": "changed",
  "responseStrategy": "cache-first",
  "version": "2018-3-27 15:26:22",
  "name": "webpack-offline",
  "pluginVersion": "4.5.2",
  "relativePaths": false
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22loaders%22%3A%5B%5D%2C%22cacheMaps%22%3A%5B%5D%7D!./node_modules/offline-plugin/empty-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/fetch.js":
/***/ function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (typeof input === 'string') {
      this.url = input
    } else {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split('\r\n').forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/*** EXPORTS FROM exports-loader ***/
module.exports = self.fetch;

/***/ },

/***/ "./node_modules/offline-plugin/empty-entry.js":
/***/ function(module, exports) {



/***/ },

/***/ "./node_modules/offline-plugin/lib/misc/sw-loader.js?json=%7B%22data_var_name%22%3A%22__wpo%22%2C%22loaders%22%3A%5B%5D%2C%22cacheMaps%22%3A%5B%5D%7D!./node_modules/offline-plugin/empty-entry.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {
      

if (typeof DEBUG === 'undefined') {
  var DEBUG = false;
}

function WebpackServiceWorker(params, helpers) {
  var loaders = helpers.loaders;
  var cacheMaps = helpers.cacheMaps;

  var strategy = params.strategy;
  var responseStrategy = params.responseStrategy;

  var assets = params.assets;
  var loadersMap = params.loaders || {};

  var hashesMap = params.hashesMap;
  var externals = params.externals;

  // Not used yet
  // const alwaysRevalidate = params.alwaysRevalidate;
  // const ignoreSearch = params.ignoreSearch;
  // const preferOnline = params.preferOnline;

  var CACHE_PREFIX = params.name;
  var CACHE_TAG = params.version;
  var CACHE_NAME = CACHE_PREFIX + ':' + CACHE_TAG;

  var STORED_DATA_KEY = '__offline_webpack__data';

  mapAssets();

  var allAssets = [].concat(assets.main, assets.additional, assets.optional);
  var navigateFallbackURL = params.navigateFallbackURL;

  self.addEventListener('install', function (event) {
    console.log('[SW]:', 'Install event');

    var installing = undefined;

    if (strategy === 'changed') {
      installing = cacheChanged('main');
    } else {
      installing = cacheAssets('main');
    }

    event.waitUntil(installing);
  });

  self.addEventListener('activate', function (event) {
    console.log('[SW]:', 'Activate event');

    var activation = cacheAdditional();

    // Delete all assets which name starts with CACHE_PREFIX and
    // is not current cache (CACHE_NAME)
    activation = activation.then(storeCacheData);
    activation = activation.then(deleteObsolete);
    activation = activation.then(function () {
      if (self.clients && self.clients.claim) {
        return self.clients.claim();
      }
    });

    event.waitUntil(activation);
  });

  function cacheAdditional() {
    if (!assets.additional.length) {
      return Promise.resolve();
    }

    if (DEBUG) {
      console.log('[SW]:', 'Caching additional');
    }

    var operation = undefined;

    if (strategy === 'changed') {
      operation = cacheChanged('additional');
    } else {
      operation = cacheAssets('additional');
    }

    // Ignore fail of `additional` cache section
    return operation['catch'](function (e) {
      console.error('[SW]:', 'Cache section `additional` failed to load');
    });
  }

  function cacheAssets(section) {
    var batch = assets[section];

    return caches.open(CACHE_NAME).then(function (cache) {
      return addAllNormalized(cache, batch, {
        bust: params.version,
        request: params.prefetchRequest
      });
    }).then(function () {
      logGroup('Cached assets: ' + section, batch);
    })['catch'](function (e) {
      console.error(e);
      throw e;
    });
  }

  function cacheChanged(section) {
    return getLastCache().then(function (args) {
      if (!args) {
        return cacheAssets(section);
      }

      var lastCache = args[0];
      var lastKeys = args[1];
      var lastData = args[2];

      var lastMap = lastData.hashmap;
      var lastVersion = lastData.version;

      if (!lastData.hashmap || lastVersion === params.version) {
        return cacheAssets(section);
      }

      var lastHashedAssets = Object.keys(lastMap).map(function (hash) {
        return lastMap[hash];
      });

      var lastUrls = lastKeys.map(function (req) {
        var url = new URL(req.url);
        url.search = '';

        return url.toString();
      });

      var sectionAssets = assets[section];
      var moved = [];
      var changed = sectionAssets.filter(function (url) {
        if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {
          return true;
        }

        return false;
      });

      Object.keys(hashesMap).forEach(function (hash) {
        var asset = hashesMap[hash];

        // Return if not in sectionAssets or in changed or moved array
        if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return;

        var lastAsset = lastMap[hash];

        if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {
          moved.push([lastAsset, asset]);
        } else {
          changed.push(asset);
        }
      });

      logGroup('Changed assets: ' + section, changed);
      logGroup('Moved assets: ' + section, moved);

      var movedResponses = Promise.all(moved.map(function (pair) {
        return lastCache.match(pair[0]).then(function (response) {
          return [pair[1], response];
        });
      }));

      return caches.open(CACHE_NAME).then(function (cache) {
        var move = movedResponses.then(function (responses) {
          return Promise.all(responses.map(function (pair) {
            return cache.put(pair[0], pair[1]);
          }));
        });

        return Promise.all([move, addAllNormalized(cache, changed, {
          bust: params.version,
          request: params.prefetchRequest
        })]);
      });
    });
  }

  function deleteObsolete() {
    return caches.keys().then(function (keys) {
      var all = keys.map(function (key) {
        if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return;

        console.log('[SW]:', 'Delete cache:', key);
        return caches['delete'](key);
      });

      return Promise.all(all);
    });
  }

  function getLastCache() {
    return caches.keys().then(function (keys) {
      var index = keys.length;
      var key = undefined;

      while (index--) {
        key = keys[index];

        if (key.indexOf(CACHE_PREFIX) === 0) {
          break;
        }
      }

      if (!key) return;

      var cache = undefined;

      return caches.open(key).then(function (_cache) {
        cache = _cache;
        return _cache.match(new URL(STORED_DATA_KEY, location).toString());
      }).then(function (response) {
        if (!response) return;

        return Promise.all([cache, cache.keys(), response.json()]);
      });
    });
  }

  function storeCacheData() {
    return caches.open(CACHE_NAME).then(function (cache) {
      var data = new Response(JSON.stringify({
        version: params.version,
        hashmap: hashesMap
      }));

      return cache.put(new URL(STORED_DATA_KEY, location).toString(), data);
    });
  }

  self.addEventListener('fetch', function (event) {
    var requestUrl = event.request.url;
    var url = new URL(requestUrl);
    var urlString = undefined;

    if (externals.indexOf(requestUrl) !== -1) {
      urlString = requestUrl;
    } else {
      url.search = '';
      urlString = url.toString();
    }

    // Handle only GET requests
    var isGET = event.request.method === 'GET';
    var assetMatches = allAssets.indexOf(urlString) !== -1;
    var cacheUrl = urlString;

    if (!assetMatches) {
      var cacheRewrite = matchCacheMap(event.request);

      if (cacheRewrite) {
        cacheUrl = cacheRewrite;
        assetMatches = true;
      }
    }

    if (!assetMatches && isGET) {
      // If isn't a cached asset and is a navigation request,
      // fallback to navigateFallbackURL if available
      if (navigateFallbackURL && isNavigateRequest(event.request)) {
        event.respondWith(handleNavigateFallback(fetch(event.request)));

        return;
      }
    }

    if (!assetMatches || !isGET) {
      // Fix for https://twitter.com/wanderview/status/696819243262873600
      if (url.origin !== location.origin && navigator.userAgent.indexOf('Firefox/44.') !== -1) {
        event.respondWith(fetch(event.request));
      }

      return;
    }

    // Logic of caching / fetching is here
    // * urlString -- url to match from the CACHE_NAME
    // * event.request -- original Request to perform fetch() if necessary
    var resource = undefined;

    if (responseStrategy === "network-first") {
      resource = networkFirstResponse(event, urlString, cacheUrl);
    }
    // "cache-first"
    // (responseStrategy has been validated before)
    else {
        resource = cacheFirstResponse(event, urlString, cacheUrl);
      }

    if (navigateFallbackURL && isNavigateRequest(event.request)) {
      resource = handleNavigateFallback(resource);
    }

    event.respondWith(resource);
  });

  self.addEventListener('message', function (e) {
    var data = e.data;
    if (!data) return;

    switch (data.action) {
      case 'skipWaiting':
        {
          if (self.skipWaiting) self.skipWaiting();
        }break;
    }
  });

  function cacheFirstResponse(event, urlString, cacheUrl) {
    return cachesMatch(cacheUrl, CACHE_NAME).then(function (response) {
      if (response) {
        if (DEBUG) {
          console.log('[SW]:', 'URL [' + cacheUrl + '](' + urlString + ') from cache');
        }

        return response;
      }

      // Load and cache known assets
      var fetching = fetch(event.request).then(function (response) {
        if (!response.ok) {
          if (DEBUG) {
            console.log('[SW]:', 'URL [' + urlString + '] wrong response: [' + response.status + '] ' + response.type);
          }

          return response;
        }

        if (DEBUG) {
          console.log('[SW]:', 'URL [' + urlString + '] from network');
        }

        if (cacheUrl === urlString) {
          (function () {
            var responseClone = response.clone();

            caches.open(CACHE_NAME).then(function (cache) {
              return cache.put(urlString, responseClone);
            }).then(function () {
              console.log('[SW]:', 'Cache asset: ' + urlString);
            });
          })();
        }

        return response;
      });

      return fetching;
    });
  }

  function networkFirstResponse(event, urlString, cacheUrl) {
    return fetch(event.request).then(function (response) {
      if (response.ok) {
        if (DEBUG) {
          console.log('[SW]:', 'URL [' + urlString + '] from network');
        }

        return response;
      }

      // throw to reach the code in the catch below
      throw new Error("response is not ok");
    })
    // this needs to be in a catch() and not just in the then() above
    // cause if your network is down, the fetch() will throw
    ['catch'](function () {
      if (DEBUG) {
        console.log('[SW]:', 'URL [' + urlString + '] from cache if possible');
      }

      return cachesMatch(cacheUrl, CACHE_NAME);
    });
  }

  function handleNavigateFallback(fetching) {
    return fetching['catch'](function () {}).then(function (response) {
      if (!response || !response.ok) {
        if (DEBUG) {
          console.log('[SW]:', 'Loading navigation fallback [' + navigateFallbackURL + '] from cache');
        }

        return cachesMatch(navigateFallbackURL, CACHE_NAME);
      }

      return response;
    });
  }

  function mapAssets() {
    Object.keys(assets).forEach(function (key) {
      assets[key] = assets[key].map(function (path) {
        var url = new URL(path, location);

        if (externals.indexOf(path) === -1) {
          url.search = '';
        } else {
          // Remove hash from possible passed externals
          url.hash = '';
        }

        return url.toString();
      });
    });

    Object.keys(loadersMap).forEach(function (key) {
      loadersMap[key] = loadersMap[key].map(function (path) {
        var url = new URL(path, location);

        if (externals.indexOf(path) === -1) {
          url.search = '';
        } else {
          // Remove hash from possible passed externals
          url.hash = '';
        }

        return url.toString();
      });
    });

    hashesMap = Object.keys(hashesMap).reduce(function (result, hash) {
      var url = new URL(hashesMap[hash], location);
      url.search = '';

      result[hash] = url.toString();
      return result;
    }, {});

    externals = externals.map(function (path) {
      var url = new URL(path, location);
      url.hash = '';

      return url.toString();
    });
  }

  function addAllNormalized(cache, requests, options) {
    var allowLoaders = options.allowLoaders !== false;
    var bustValue = options && options.bust;
    var requestInit = options.request || {
      credentials: 'omit',
      mode: 'cors'
    };

    return Promise.all(requests.map(function (request) {
      if (bustValue) {
        request = applyCacheBust(request, bustValue);
      }

      return fetch(request, requestInit);
    })).then(function (responses) {
      if (responses.some(function (response) {
        return !response.ok;
      })) {
        return Promise.reject(new Error('Wrong response status'));
      }

      var extracted = [];
      var addAll = responses.map(function (response, i) {
        if (allowLoaders) {
          extracted.push(extractAssetsWithLoaders(requests[i], response));
        }

        return cache.put(requests[i], response);
      });

      if (extracted.length) {
        (function () {
          var newOptions = copyObject(options);
          newOptions.allowLoaders = false;

          var waitAll = addAll;

          addAll = Promise.all(extracted).then(function (all) {
            var extractedRequests = [].concat.apply([], all);

            if (requests.length) {
              waitAll = waitAll.concat(addAllNormalized(cache, extractedRequests, newOptions));
            }

            return Promise.all(waitAll);
          });
        })();
      } else {
        addAll = Promise.all(addAll);
      }

      return addAll;
    });
  }

  function extractAssetsWithLoaders(request, response) {
    var all = Object.keys(loadersMap).map(function (key) {
      var loader = loadersMap[key];

      if (loader.indexOf(request) !== -1 && loaders[key]) {
        return loaders[key](response.clone());
      }
    }).filter(function (a) {
      return !!a;
    });

    return Promise.all(all).then(function (all) {
      return [].concat.apply([], all);
    });
  }

  function matchCacheMap(request) {
    var urlString = request.url;
    var url = new URL(urlString);

    var requestType = undefined;

    if (request.mode === 'navigate') {
      requestType = 'navigate';
    } else if (url.origin === location.origin) {
      requestType = 'same-origin';
    } else {
      requestType = 'cross-origin';
    }

    for (var i = 0; i < cacheMaps.length; i++) {
      var map = cacheMaps[i];

      if (!map) continue;
      if (map.requestTypes && map.requestTypes.indexOf(requestType) === -1) {
        continue;
      }

      var newString = undefined;

      if (typeof map.match === 'function') {
        newString = map.match(url, request);
      } else {
        newString = urlString.replace(map.match, map.to);
      }

      if (newString && newString !== urlString) {
        return newString;
      }
    }
  }
}

function cachesMatch(request, cacheName) {
  return caches.match(request, {
    cacheName: cacheName
  })
  // Return void if error happened (cache not found)
  ['catch'](function () {});
}

function applyCacheBust(asset, key) {
  var hasQuery = asset.indexOf('?') !== -1;
  return asset + (hasQuery ? '&' : '?') + '__uncache=' + encodeURIComponent(key);
}

function getClientsURLs() {
  if (!self.clients) {
    return Promise.resolve([]);
  }

  return self.clients.matchAll({
    includeUncontrolled: true
  }).then(function (clients) {
    if (!clients.length) return [];

    var result = [];

    clients.forEach(function (client) {
      var url = new URL(client.url);
      url.search = '';
      url.hash = '';
      var urlString = url.toString();

      if (!result.length || result.indexOf(urlString) === -1) {
        result.push(urlString);
      }
    });

    return result;
  });
}

function isNavigateRequest(request) {
  return request.mode === 'navigate' || request.headers.get('Upgrade-Insecure-Requests') || (request.headers.get('Accept') || '').indexOf('text/html') !== -1;
}

function copyObject(original) {
  return Object.keys(original).reduce(function (result, key) {
    result[key] = original[key];
    return result;
  }, {});
}

function logGroup(title, assets) {
  console.groupCollapsed('[SW]:', title);

  assets.forEach(function (asset) {
    console.log('Asset:', asset);
  });

  console.groupEnd();
}
      WebpackServiceWorker(__wpo, {
loaders: {},
cacheMaps: [],
});
      module.exports = __webpack_require__("./node_modules/offline-plugin/empty-entry.js")
    
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/exports-loader/index.js?self.fetch!./node_modules/whatwg-fetch/fetch.js")))

/***/ }

/******/ });