const app_lastVersion = 1.1

function redirect(url) {
    window.open(url, '_blank');
}
setTimeout(function() {
    document.getElementById("loader").style.display = 'none';
    document.getElementById('game-container').style.display = '';
    document.getElementById('footer').style.display = ''
}, 2000);
function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const b_app = urlParams.get('app');
    const app_version = urlParams.get('version');
    
    if (b_app === 'true') {
        document.getElementById("download").style.display = 'none'
    }

    if (app_version != null) {
        if (b_app === "true" && app_lastVersion != app_version) {
            if (confirm("當前有新版本可用，是否要前往下載最新版本？")){
                location = 'APP/Download/index.html?app=' + b_app
            }
        }
    }
}
GetParams();