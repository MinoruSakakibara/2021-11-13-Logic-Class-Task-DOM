//文字色変更
function colorChange(){
    let i = document.getElementById('color');
    i.style.color = '#0000FF';
}

//フォント変更
function fontChange(){
    let i = document.getElementById('font');
    i.style.fontFamily = 'serif';
}

//フォントサイズ変更
function fontSizeChange(){
    let i = document.getElementById('font-size');
    i.style.fontSize = '100px';
}

//背景色変更
function backgroundColorChange(){
    document.getElementById('backgroundColorChange').classList.add('addColor');
}
