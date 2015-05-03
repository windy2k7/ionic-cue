var baseConfig = (function() {
    var config = {};
    config.dev = true;
    config.protocol = 'http://'; 
    config.apiUrlDev = config.protocol+'localhost/cue-hotel/';
    config.apiUrlBuild = config.protocol+'www.project.thaiphong.info/cue-hotel/';
    config.tplPath = 'templates/';
    config.getApiUrl = function(){ return  config.dev === true ? config.apiUrlDev : config.apiUrlBuild };    
    return config;
}());