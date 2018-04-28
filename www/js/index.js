var $output, $data, $exists;
function onDeviceReady(){
    $output = $('#log-output');
    $data = $('#data');
    $exists = $('#exists');

    log("deviceready");

    cordova.plugin.cloudsettings.onRestore(onRestore);

    checkExists(function(exists){
        if(exists){
            loadSettings();
        }
    });
}
$(document).on('deviceready', onDeviceReady);

function clearUI(){
    $output.empty();
    $data.val('');
}

function stringify(str){
    if(typeof str === "object"){
        str = JSON.stringify(str);
    }
    return str;
}

function prependLogMessage(message){
    $output.prepend('<span class="'+(message.logLevel ? message.logLevel : '')+'">' +message.msg + '</span>' + (message.nobreak ? "<br/>" : "<br/><br/>" ));
}

function log(msg, opts){
    opts = opts || {};

    opts.logLevel = opts.logLevel || "log";
    console[opts.logLevel](msg);

    opts.msg = msg;
    prependLogMessage(opts);
}

function logError(msg){
    log(msg, {
        logLevel: "error"
    });
}

function onError(action, error){
    logError(action +": "+stringify(error));
}

function onSuccess(action){
    log(action +": successful");
}

function loadSettings(){
    cordova.plugin.cloudsettings.load(function(settings){
        onSuccess("loadSettings");
        $data.val(settings.data);
    }, onError.bind(this, "loadSettings"));
}

function saveSettings(){
    log("saveSettings");
    var data = {
        data: $data.val()
    };
    cordova.plugin.cloudsettings.save(data, function(){
        onSuccess("saveSettings");
        checkExists();
    }, onError.bind(this, "saveSettings"));
}

function checkExists(cb){
    cb = cb || function(){};
    cordova.plugin.cloudsettings.exists(function(exists) {
        $exists.text(exists ? "TRUE" : "FALSE");
        cb(exists);
    });
}

function onRestore(){
    log("onRestore");
    loadSettings();
}