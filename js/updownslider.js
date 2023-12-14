$(function(){
    console.log(".load");
    var tourslider=0;
    var sliderPosition;
    setInterval(function(){
        if(tourslider<2){
            tourslider++;
        }else{
            tourslider=0;
        }sliderPosition=tourslider*(-300)+"px";
        $(".sliders").animate({top:sliderPosition},400);
    },3000);
})