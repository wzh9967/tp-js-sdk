//获取app版本
let Promise = require('promise');
let dappApi = {
    version: '0.1.0',
    getAppInfo : function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getAppInfo', '', tpCallbackFun);
        })
    },

    //获取钱包列表
    getWalletList : function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getWalletList', '', tpCallbackFun);
        })
    },

    //获取设备信息
    getDevice : function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getDevice', '', tpCallbackFun);
        })
    },

    //分享
    shareToSNS:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('shareToSNS', '', tpCallbackFun);
        })
    },

    //开启扫描
    invokeQRScanner:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('invokeQRScanner', '', tpCallbackFun);
        })
    },

    //获取当前交易钱包
    getCurrentWallet:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getCurrentWallet', '', tpCallbackFun);
        })
    },

    //交易签名
    sign:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('sign', '', tpCallbackFun);
        })
    },

    //从浏览器返回
    back:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('back', '', tpCallbackFun);
        })
    },

    //关闭浏览器
    close:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('close', '', tpCallbackFun);
        })
    },


    //浏览器全屏
    fullScreen:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('fullScreen', '', tpCallbackFun);
        })
    },

    //跳转到钱包导入页面
    importWallet:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('importWallet', '', tpCallbackFun);
        })
    },

    //导航条可见
    setMenubar:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('setMenubar', '', tpCallbackFun);
        })
    },


    //保存图片
    saveImage:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('saveImage', '', tpCallbackFun);
        })
    },


    //横屏
    rollHorizontal:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('rollHorizontal', '', tpCallbackFun);
        })
    },

    //禁止iOS自带的左滑手势返回，对安卓无影响
    popGestureRecognizerEnable:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('popGestureRecognizerEnable', '', tpCallbackFun);
        })
    },



//禁止webview自带的左滑手势触发goback
    forwardNavigationGesturesEnable:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('forwardNavigationGesturesEnable', '', tpCallbackFun);
        })
    },

//获取当前节点
    getNodeUrl:function (callback){
        return new Promise(function (resolve, reject) {
            var tpCallbackFun = _getCallbackName();
            window[tpCallbackFun] = function (result) {
                result = result.replace(/\r/ig, "").replace(/\n/ig, "");
                try {
                    let res = JSON.parse(result);
                    resolve(res);
                } catch (e) {
                    reject(e);
                }
            }
            _sendTpRequest('getNodeUrl', '', tpCallbackFun);
        })
    }
}

function _getCallbackName() {
    var ramdom = parseInt(Math.random() * 100000);
    return 'tp_callback_' + new Date().getTime() + ramdom;
}

function _sendTpRequest (methodName, params, callback) {
    if (window.JsNativeBridge) {
        window.JsNativeBridge.callHandler(methodName, params, callback);
    }
}

function _getTypeByStr (typeStr) {
    var reTrim = /^\s+|\s+$/g;
    typeStr += '';
    typeStr = typeStr.replace(reTrim, '').toLowerCase();
    return TYPE_MAP[typeStr] || typeStr;
}