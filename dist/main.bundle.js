(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mongoose"));
	else if(typeof define === 'function' && define.amd)
		define(["mongoose"], factory);
	else if(typeof exports === 'object')
		exports["metrics-mongoose"] = factory(require("mongoose"));
	else
		root["metrics-mongoose"] = factory(root["mongoose"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BillStore = undefined;

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var BillStore = exports.BillStore = new Schema({
    _id: {
        type: ObjectId,
        auto: true
    },
    consumption: {
        type: Number,
        required: true
    },
    hardware_id: {
        type: String,
        index: true,
        required: true
    },
    ipfs_hash: {
        type: String,
        required: true
    },
    last_bill: {
        type: String,
        required: true
    },
    leaf: {
        type: String,
        required: true
    },
    merkle_root: {
        type: String,
        index: true,
        required: true
    },
    metric_base_id: {
        type: String,
        required: true
    },
    payed: {
        type: Boolean,
        index: true,
        required: false,
        default: false
    },
    price_watt_hour: {
        type: Number,
        required: true
    },
    proofs: {
        type: []
    },
    round_id: {
        type: Number,
        index: true,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    token_address: {
        type: String,
        index: true,
        required: true
    },
    token_amount: {
        type: Number,
        required: true
    }
}, {
    // Add a timestamp when the doc is created and updated
    timestamps: true
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalProofBatch = undefined;

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var GlobalProofBatch = exports.GlobalProofBatch = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  ipfs_global_batch_proof: {
    type: String,
    index: true,
    required: true
  },
  hardware_batches: {
    type: [ObjectId],
    ref: 'HardwareProofBatch',
    required: true
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HardwareProofBatch = undefined;

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var HardwareProofBatch = exports.HardwareProofBatch = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  hardware_id: {
    type: String,
    index: true,
    required: true
  },
  ipfs_batch_proof: {
    type: String,
    index: true,
    required: true
  },
  metric_proofs_ref: {
    type: [ObjectId],
    ref: 'MetricProof',
    required: true
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HardwareWhitelist = undefined;

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var HardwareWhitelist = exports.HardwareWhitelist = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  hardware_id: {
    type: String,
    index: true,
    required: true
  },
  enabled: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricProof = undefined;

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var MetricProof = exports.MetricProof = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  hardware_id: {
    type: String,
    index: true,
    required: true
  },
  ipfs_hash: {
    type: String,
    index: true,
    required: true
  },
  consolidated: {
    type: Boolean,
    index: true,
    required: false,
    default: false
  },
  metrics: {
    hardware_id: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: true
    },
    watts_consumed: {
      type: Number,
      required: true
    },
    watts_produced: {
      type: Number,
      required: true
    }
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HardwareWhitelist = exports.GlobalProofBatch = exports.HardwareProofBatch = exports.MetricProof = exports.BillStore = undefined;

var _MetricProofModel = __webpack_require__(5);

var _HardwareProofBatch = __webpack_require__(3);

var _GlobalProofBatch = __webpack_require__(2);

var _HardwareWhitelistModel = __webpack_require__(4);

var _BillStoreModel = __webpack_require__(1);

exports.BillStore = _BillStoreModel.BillStore;
exports.MetricProof = _MetricProofModel.MetricProof;
exports.HardwareProofBatch = _HardwareProofBatch.HardwareProofBatch;
exports.GlobalProofBatch = _GlobalProofBatch.GlobalProofBatch;
exports.HardwareWhitelist = _HardwareWhitelistModel.HardwareWhitelist;

/***/ })
/******/ ]);
});