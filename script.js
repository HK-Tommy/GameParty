function redirect(url) {
    window.open(url, '_blank');
}
setTimeout(function() {
    document.getElementById("loader").style.display = 'none';
    document.getElementById('game-container').style.display = '';
    document.getElementById('footer').style.display = ''
}, 2000);