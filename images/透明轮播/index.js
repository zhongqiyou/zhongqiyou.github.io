var btnLR = document.querySelectorAll(".container>div>a");
var btnOTTFF = document.querySelectorAll(".container>ol>div>li");
var img = document.querySelectorAll(".container>li>img");
var btnStyle = document.querySelectorAll(".container>ol>div>li");

// 初始化小按钮样式
btnStyle[0].classList.add("btnstyle");

var bool = true;
var index = 0;

// 左右按钮切换
btnLR.forEach((value, num) => {
    btnLR[num].onclick = function () {
       if(bool){
        if (num == 0) {
            index <= 0 ? index="4" : index-- } else {>= 4 ? index = 0 : index++
        }
        time();
        bool = false;
       }
    }
});

// 小按钮切换
btnStyle.forEach((value, num) => {
    btnStyle[num].onclick = function () {
        if (bool) {
            index = num;
            time()
            bool = false;
        }
    }
});

// 自动切换
setInterval(() => {
    if(bool){
        index >= 4 ? index = 0 : index++;
        time();
        bool = false;
    }
    
}, 2000);

function time() {
    // 初始化全部照片
    img.forEach((value, i) => {
        img[i].style.opacity = 0;
    });

    // 透明过渡显示
    let tranNum = 0
    let time = setInterval(() => {
        tranNum = tranNum + 0.1;
        if (tranNum > 1) {
            clearInterval(time);
            bool = true;
        }
        img[index].style.opacity = tranNum;
    }, 30);

    // 按钮切换样式
    btnStyle.forEach((value, i) => {
        btnStyle[i].classList.remove("btnstyle");
    });
    btnStyle[index].classList.add("btnstyle");
}</=>