const app_pc_lastVersion = '1.1'
const app_android_lastVersion = '1.2'

function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    b_app = urlParams.get('app');
    const app_version = urlParams.get('version');
    platform = urlParams.get('platform');
    
    if (b_app === 'true') {
        document.getElementById("download").style.display = 'none'
    }

    if (app_version != null) {
        if (platform === 'android') {
            if (b_app === "true" && app_android_lastVersion != app_version) {
                if (confirm("當前有新版本可用，是否要前往下載最新版本？")){
                    location = 'APP/Download/index.html?app=' + b_app + '&version=' + app_android_lastVersion + '&platform=' + platform
                }
            }
        } 
        else if  (platform === 'pc') {
            if (b_app === "true" && app_pc_lastVersion != app_version) {
                if (confirm("當前有新版本可用，是否要前往下載最新版本？")){
                    location = 'APP/Download/index.html?app=' + b_app + '&version=' + app_pc_lastVersion + '&platform=' + platform
                }
            }
        }
    }
}
GetParams();

function redirect(url) {
    if (b_app === 'true') {
        location = url + '?app=' + b_app + '&platform=' + platform
    }
    else
    {
        window.open(url, '_blank');
    }
}
setTimeout(function() {
    document.getElementById("loader").style.display = 'none';
    document.getElementById('game-container').style.display = '';
    document.getElementById('footer').style.display = ''
}, 2000);