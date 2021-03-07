const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 添加图片循环 */
for (let i = 0; i < 5; ++i) {
    
    const newImage = document.createElement('img');
    let path = 'images' + '/' + 'pic' + String(i + 1) + '.jpg';
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(evt) {
        
        setPath(evt.target.getAttribute('src'));
    });
    
}

function setPath(path) {
    
    displayedImage.setAttribute('src', path);
}


/* 编写 变暗/变量 按钮功能 */
btn.onclick = function () {
    
    let btnName = btn.textContent;
    if (btnName == 'dark') {
        
        btn.setAttribute('class', 'light');
        btn.textContent = 'light';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    } else {
        
        btn.setAttribute('class', 'dark');
        btn.textContent = 'dark';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}


