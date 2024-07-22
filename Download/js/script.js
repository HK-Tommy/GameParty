function download () {
    location = 'https://github.com/HK-Tommy/GameParty/releases/download/Android/GameParty.apk'
}
function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    b_app = urlParams.get('app');
    const app_version = urlParams.get('version');
  
    // 如果参数值在select选项中，则填充到select元素中
    if (app_version != null) {
        document.getElementById("version").textContent = 'Last Version : v' + app_version
    }
    else {
        document.getElementById("version").textContent = 'Last Version : v1.0'
    }
}
GetParams()

function back() {
    if (b_app === 'true') {
        location = '../index.html?app=true'
    }
    else {
        location = '../index.html'
    }
}