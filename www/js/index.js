var $output, $exists, $updated,
    $id, $language;
function onDeviceReady(){
    $output = $('#log-output');
    $exists = $('#exists');
    $updated = $('#updated');
    $id = $('#id');
    $language = $('#language');

    log("deviceready");

    cordova.plugin.cloudsettings.onRestore(onRestore);

    cordova.plugin.cloudsettings.enableDebug(function(){
        checkExists(function(exists){
            if(exists){
                loadSettings();
            }
        });
    });
}
$(document).on('deviceready', onDeviceReady);

function clearUI(){
    $output.empty();
    $('#settings input').val('');
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
        setLastUpdated(settings);
        $id.val(settings.id);
        $language.val(settings.preferences.language);
    }, onError.bind(this, "loadSettings"));
}

function saveSettings(){
    log("saveSettings");
    var settings = {
        id: $id.val(),
        preferences:{
            language: $language.val()
        }
    };
    cordova.plugin.cloudsettings.save(settings, function(_settings){
        onSuccess("saveSettings");
        setLastUpdated(_settings);
        checkExists();
    }, onError.bind(this, "saveSettings"));
}

function setLastUpdated(settings){
    $updated.text((new Date(settings.timestamp)).toISOString());
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