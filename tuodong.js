var isClick=true;
        $('.div').each(function(index){
        $(this).on('touchstart', function(evt) {
            var e = event || evt;
            e.preventDefault();//阻止其他事件
            isClick=true;
        }).on('touchmove', function(evt) {
            var e = event || evt;
            e.preventDefault();//阻止其他事件
            // 如果这个元素的位置内只有一个手指的话
            //console.log(e.targetTouches)
            if (e.targetTouches.length == 1) {
                var touch = e.targetTouches[0];  // 把元素放在手指所在的位置
                $(this).css("left",(touch.pageX- parseInt($(this).width())/2 + 'px'));
                $(this).css("top",(touch.pageY- parseInt($(this).height())/2 + 'px'));
            }
            isClick=false;
        }).on('touchend', function(evt) {
            var e = event || evt;
            e.preventDefault();//阻止其他事件
            if(isClick==true){window.location.href='url'
            }
        })
    });