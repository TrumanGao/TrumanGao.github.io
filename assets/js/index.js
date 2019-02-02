let text = "念，当年，彼心牵，寻常思见，静水漾微澜，愫情初深而款，觅迹灵隐峰云间，石上三世又三生缘，惟愿此世此生了无憾，路遥将望断兀地而垂天，时渐过境已迁人零散，芳华俱与狂疏去远，水墨岸细柳氤烟，遥遥当初少年，红尘终不羡，知梦回难，意阑珊，言欢，倦".split("，");
// 行索引
let index = 0;
// 字符索引
let i = 0;

$('#welcome').click(()=>{
    // welcome呼吸动画停止，字体放大
    $('#welcome').css({'animation':'none', 'transform': 'scale(1.05)'});
    // 文字区域滑入
    // $(".content").slideDown(500);
    
    setTimeout(()=>{
        
        $('.content').append('<p></p>');

        let type = setInterval(()=>{
            $('.content p').eq(index).append(text[index].charAt(i)).slideDown(200);

            if(i++ === text[index].length){
                $('.content').append('<p></p>');
                index++;
                i = 0;
                if(index === text.length){
                    // 移除最后一个空的p标签
                    $('p:last').remove();
                    // 清除定时器
                    clearInterval(type);
                }
            }
        }, 300)

    });
})








// via CSDN
// var str = $text.html();//返回被选 元素的内容
// var index = 0;
 
// var timer = setInterval(function(){
//     //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符
//     var current = str.substr(index, 1);
     
//     if(current == '<'){
//     //indexOf() 方法返回">"在字符串中首次出现的位置。
//         index = str.indexOf('>', index) + 1;
//     }else{
//         index ++ ;
//     }
     
//     //console.log(["0到index下标下的字符",str.substring(0, index)],["符号",index & 1 ? '_': '']);
//     //substring() 方法用于提取字符串中介于两个指定下标之间的字符
//     $text.html(str.substring(0, index) + (index & 1 ? '_': ''));
//     if(index >= str.length){
//         clearInterval(timer);
//     }
// },100);