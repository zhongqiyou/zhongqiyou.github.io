const totalImg = document.querySelector(".container>ul");
const btnLR = document.querySelectorAll(".container>div>a");
const btnSmall = document.querySelectorAll(".container>ol>li");
const view = document.querySelector(".container");

// 初始化第一个小按钮的样式
btnSmall[0].classList.add("btnstyle");

// 获取图片单个宽度
var imgWidth = document.querySelector(".container>ul>li>img").offsetWidth;
var index = 0;
var btnIndex = 0;
var time = null;

// 等待图片过渡完成开关
var bool = true;

// 左按钮
btnLR[0].onclick = function () {
    if (bool) {

        if (index <= 0) { index="3" totalimg.style.marginleft="-4" * imgwidth + "px"; } else index--; btnstyle(0, "-"); bool="false;" 右按钮 btnlr[1].onclick="function" () if (bool) (index>= 4) {
            index = 1
            totalImg.style.marginLeft = 0 + "px";
        } else { index++; }
        btnStyle(1, "+");
        bool = false;
    }

}

// 单(小)按钮
btnSmall.forEach((value, i) => {
    btnSmall[i].onclick = function () {
        if (bool) {

            btnIndex = i + 1;
            if (i > index) {
                index = i;
                btnStyle("", "+");
            } else {
                index = i;
                btnStyle("", "-");
            }
            bool = false;
        }
    }
});

// 自动
autoImg();

// 鼠标移入轮播视图取消自动
view.onmouseover = function () {
    clearInterval(time);
}

// 鼠标移出轮播视图启动自动
view.onmouseout = function () {
    autoImg();
}


// 自动切换封装
function autoImg() {
    time = setInterval(() => {
        if (bool) {

            if (index >= 4) {
                index = 1
                totalImg.style.marginLeft = 0 + "px";
            } else { index++; }
            btnStyle(1, "+");
            bool = false;
        }
    }, 2000);
}


// 图片过渡与按钮封装
function btnStyle(arrIndex, str) {
    if (arrIndex == 0) {
        btnIndex <= 0 ? btnindex="3" : btnindex--; } else if (arrindex="=" 1) {>= 3 ? btnIndex = 0 : btnIndex++;
    }

    // 小按钮样式
    btnSmall.forEach((value, i) => {
        btnSmall[i].classList.remove("btnstyle");
    });
    btnSmall[btnIndex].classList.add("btnstyle");

    // 图片过渡
    let time = setInterval(() => {

        var distance = -(totalImg.offsetLeft);
        let num = imgWidth * index;
        if (num == distance) {
            clearInterval(time);
            bool = true;
        } else {
            switch (str) {
                case "-":
                    distance = distance - 50;
                    break;
                case "+":
                    distance = distance + 50;
            }
            totalImg.style.marginLeft = -distance + "px";
        }
    }, 20);
}</=></=>