let html = document.querySelector("#html")

let style = document.querySelector("#style")

let string = `/* 你好，我叫非也
               * 通过这个页面来展示一下我的前端功底
               * 首先我准备一个div
            **/
#div1{
    border: 1px solid orange;
    width: 240px;
    height: 240px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border: none;
}
/* 太极是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加一黑一白两个圆点，表示阳中有阴，阴中有阳 */
#div1::before{
    width: 120px;
    height: 120px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(255,255,255,1) 16%);
}
#div1::after{
    width: 120px;
    height: 120px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(0,0,0,1) 16%);
}；
`
let string2 = "" ;

let n = 0 ;
 
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 +="<br>";
        } else if (string[n] === " ") {
            string2 +="&nbsp;";
        } else {
            string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 5);
};
     step();