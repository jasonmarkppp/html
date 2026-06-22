/* 嵖岈山风景区 — 公共脚本 */

/* 友情链接跳转菜单 */
var linkUrls = {
    'default': '',
    'gov': 'https://www.zhumadian.gov.cn/',
    'huanghuai': 'https://www.huanghuai.edu.cn/',
    'laoleshan': 'https://www.laoleshan.com/',
    'jindingshan': 'http://www.jindingshanly.com/'
};

function jumpLink() {
    var sel = document.getElementById('friendLinks');
    if (!sel) return;
    var val = sel.value;
    if (val === 'default' || !linkUrls[val]) return;
    window.open(linkUrls[val], '_blank');
}

/* 背景音乐控制 */
(function () {
    var audio = document.getElementById('bgm');
    var btn = document.getElementById('bgmToggle');
    if (!audio || !btn) return;

    var playing = false;

    btn.addEventListener('click', function () {
        if (playing) {
            audio.pause();
            btn.textContent = '▶';
            playing = false;
        } else {
            audio.play().catch(function () {});
            btn.textContent = '❚❚';
            playing = true;
        }
    });
})();
