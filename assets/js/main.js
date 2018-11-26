$(document).ready(function(){
    console.log("working")
    $(".gallery").slick({
        dots:true,
        nav:false,
    });
    // scroll animation

    var controller = new ScrollMagic.Controller();
    
    

    // new ScrollMagic.Scene({triggerElement: ".work-item-img-wrap"})
    // .setTween(".work-item-img-wrap",{y:80%, ease:Linear.easeNone})
    // .addIndicator()
    // .addTo(Controller);

    // $(".work-item-img-wrap").each(function(){
    //     console.log("this");
    //     // var tween = TweenMax.from('.work-item-img-wrap > img', 1, {y: '100%', ease:Linear.easeNone})
         
    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: this,
    //         triggerHook:1,
    //         // duration: "200%"
    //     })
    //     .setClassToggle(".work-item-img-wrap","active")
      
    //     .addTo(controller);
        
    // });

    $(".parallax-element").each(function(){
        // console.log($(this).addClass("tada"));
        
        var _this = $(this);

        var dataOffset = _this.data("offset");
        console.log("dataOffset",dataOffset);
        var parallxScene =  new ScrollMagic.Scene({triggerElement:this,triggerHook: "onEnter", duration: "200%"})
					.setTween(_this, {y: dataOffset, ease: Linear.easeNone})
					// .addIndicators()
                    .addTo(controller);
    });

});