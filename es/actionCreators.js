'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCollection = fetchCollection;
exports.fetchRecord = fetchRecord;
exports.createRecord = createRecord;
exports.updateRecord = updateRecord;
exports.deleteRecord = deleteRecord;
exports.clearActionStatus = clearActionStatus;
exports.apiCall = apiCall;

var _actionTypes = require('./actionTypes');

function fetchCollection(model, path) {
  var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return {
    type: _actionTypes.FETCH,
    meta: {
      success: _actionTypes.FETCH_SUCCESS,
      failure: _actionTypes.FETCH_ERROR,
      params: params,
      model: model
    },
    payload: {
      method: 'get',
      path: path,
      params: params
    }
  };
}

function fetchRecord(model, id, path) {
  var params = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  return {
    type: _actionTypes.FETCH_ONE,
    meta: {
      success: _actionTypes.FETCH_ONE_SUCCESS,
      failure: _actionTypes.FETCH_ONE_ERROR,
      model: model,
      id: id
    },
    payload: {
      method: 'get',
      path: path,
      params: params
    }
  };
}

function createRecord(model, path) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var params = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  return {
    type: _actionTypes.CREATE,
    meta: {
      success: _actionTypes.CREATE_SUCCESS,
      failure: _actionTypes.CREATE_ERROR,
      model: model
    },
    payload: {
      method: 'post',
      path: path,
      data: data,
      params: params
    }
  };
}

function updateRecord(model, id, path) {
  var data = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
  var params = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

  return {
    type: _actionTypes.UPDATE,
    meta: {
      success: _actionTypes.UPDATE_SUCCESS,
      failure: _actionTypes.UPDATE_ERROR,
      model: model,
      id: id
    },
    payload: {
      method: 'put',
      path: path,
      data: data,
      params: params
    }
  };
}

function deleteRecord(model, id, path) {
  var params = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  return {
    type: _actionTypes.DELETE,
    meta: {
      success: _actionTypes.DELETE_SUCCESS,
      failure: _actionTypes.DELETE_ERROR,
      model: model,
      id: id
    },
    payload: {
      method: 'del',
      path: path,
      params: params
    }
  };
}

function clearActionStatus(model, action) {
  return {
    type: _actionTypes.CLEAR_ACTION_STATUS,
    payload: { model: model, action: action }
  };
}

function apiCall(success, failure, method, path) {
  var params = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];
  var data = arguments.length <= 5 || arguments[5] === undefined ? undefined : arguments[5];

  return {
    type: _actionTypes.API_CALL,
    meta: {
      success: success,
      failure: failure
    },
    payload: {
      method: method,
      path: path,
      params: params,
      data: data
    }
  };
}