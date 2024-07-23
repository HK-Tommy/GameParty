function GetParams() {
    urlParams = new URLSearchParams(window.location.search);
    b_app = urlParams.get('app');
    platform = urlParams.get('platform')
    app_version = urlParams.get('version')
    auto_download = urlParams.get('download')

    if (auto_download === 'pc' || auto_download === 'android') {
        if (auto_download === 'pc') {
            download('windows')
        }
        else
        {
            download(auto_download)
        }
    }
    if (b_app === 'true') {
        if (platform === "pc") {
            document.getElementById('download_android').style.display = 'none'
        }
        else if (platform === "android") {
            document.getElementById('download_windows').style.display = 'none'
        }
        document.getElementById("version").style.display = ''
        document.getElementById("version").textContent = 'Last Version : v' + app_version
    }
}
GetParams()

function download(donwload_platform) {
    if (donwload_platform === 'android') {
        location = 'https://github.com/HK-Tommy/GameParty/releases/download/Android/GameParty.apk'
    }
    else if (donwload_platform === 'windows')
    {
        if (b_app === 'true'  &&  auto_download != 'pc') {
            location = location.href + '&download=ingame'
        }
        else
        {
            location = 'https://github.com/HK-Tommy/GameParty/releases/download/Windows/GameParty.msi'
        }
    }
}
function back() {
    if (b_app === 'true') {
        location = 'https://hk-tommy.github.io/GameParty/index.html?app=true&platform=' + platform
    }
    else {
        location = 'https://hk-tommy.github.io/GameParty/index.html'
    }
}