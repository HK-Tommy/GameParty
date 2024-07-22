const app_lastVersion = 1.0

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
  
    // 如果参数值在select选项中，则填充到select元素中
    if (app_version != null) {
        if (b_app === "true" && app_lastVersion != app_version) {
            if (confirm("當前有新版本可用，是否要前往下載最新版本？")){
                location = 'Download/index.html?app=' + b_app + '&version=' + app_version
            }
        }
    }
}
GetParams();