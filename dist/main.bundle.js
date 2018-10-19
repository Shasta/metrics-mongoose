(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["metrics-mongoose"] = factory();
	else
		root["metrics-mongoose"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RawBatchProof = exports.RawBatchProof = new Schema({
  _id: false,
  batch_metrics_ipfs: {
    type: String,
    required: true
  },
  batch_timestamp: {
    type: Date,
    required: true
  },
  hardware_id: {
    type: String,
    required: true
  }
}, {
  timestamps: false
});

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
  metric_proofs: {
    type: [RawBatchProof],
    required: true
  },
  metric_proofs_ref: {
    type: [ObjectId],
    ref: 'MetricProofs',
    required: true
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var RawMetricProof = exports.RawMetricProof = new Schema({
  _id: false,
  metric_ipfs: {
    type: String,
    required: true
  },
  metric_timestamp: {
    type: Date,
    required: true
  },
  hardware_id: {
    type: String,
    required: true
  }

}, {
  timestamps: false
});

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
  metric_proofs: {
    type: [RawMetricProof],
    required: true
  },
  metric_proofs_ref: {
    type: [ObjectId],
    ref: 'MetricProofs',
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  metric_ipfs_hash: {
    type: String,
    index: true,
    required: true
  },
  watts_consumed: {
    type: Number,
    required: true
  },
  watts_produced: {
    type: Number,
    required: true
  },
  metrics_timestamp: {
    type: Date,
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
exports.HardwareWhitelist = exports.GlobalProofBatch = exports.HardwareProofBatch = exports.MetricProof = undefined;

var _MetricProofModel = __webpack_require__(3);

var _HardwareProofBatch = __webpack_require__(1);

var _GlobalProofBatch = __webpack_require__(0);

var _HardwareWhitelistModel = __webpack_require__(2);

exports.MetricProof = _MetricProofModel.MetricProof;
exports.HardwareProofBatch = _HardwareProofBatch.HardwareProofBatch;
exports.GlobalProofBatch = _GlobalProofBatch.GlobalProofBatch;
exports.HardwareWhitelist = _HardwareWhitelistModel.HardwareWhitelist;

/***/ })
/******/ ]);
});