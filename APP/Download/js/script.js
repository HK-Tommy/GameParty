const app_version = '1.1'

function download () {
    location = 'https://github.com/HK-Tommy/GameParty/releases/download/Android/GameParty.apk'
}
function GetParams() {
    const urlParams = new URLSearchParams(window.location.search);
    b_app = urlParams.get('app');

    ocument.getElementById("version").textContent = 'Last Version : v' + app_version
}
GetParams()

function back() {
    if (b_app === 'true') {
        location = 'https://hk-tommy.github.io/GameParty/index.html?app=true'
    }
    else {
        location = 'https://hk-tommy.github.io/GameParty/index.html'
    }
}