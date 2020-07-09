// slider

$(document).ready(function() {
$('.navbar-toggler').click(function() {
    $('.navbar-collapse').slideToggle();
   });


   setTimeout(() => {
        $("#owl-demo").owlCarousel({
              xnavigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            items : 1,
            autoPlay: 3000,
             loop: true,
                  
       
        });
        $("#testimonal").owlCarousel({ 
                   navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            items : 1,
            autoPlay: 3000,
             loop: true,
      
        });
        
   }, 800);
});

// thời gian hiện tại 
function startTime(){
 var today=new date();
 var day = today.getDay();
 var month = today.getMonth();
 var year = getFullYear();
 var date = today.getDate();
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();
 h = checkTime(h);
 m = checkTime(m);
 s = checkTime(s);
  switch(day){
          case 2:
            console.log("thứ hai");
            break;
          case 3:
            console.log("thứ ba");
            break;
          case 4:
            console.log("Thứ tư");
            break;
          case 5:
            console.log("Thứ năm");
            break;
          case 6:
            console.log("Thứ sáu");
            break;
          case 0:
            console.log("thứ bảy");
            break;
          case 1:
               console.log("Chủ Nhật");
               break;            
     }
  document.getElementById("time").innerHTML = "today is" +"  "+day +"   "+ h + ":" + m + ":" + s;
  var t = setTimeout(function(){ startTime() }, 500);
} 
   function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
  return i;
  }


