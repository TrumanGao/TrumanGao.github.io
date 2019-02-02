$(function(){
    $('#fullpage').fullpage({
        verticalCentered: true,
        afterLoad: (anchorLink, index)=>{
            setTimeout(()=>{
                $('.section').eq(index - 1).css('background-image',$('.section').eq(index-1).attr('data-url'));
            },0)
        },
    });
});