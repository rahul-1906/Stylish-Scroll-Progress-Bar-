// Scroll Progress bar

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round( pos * 100 / calcHeight);

  scrollProgress.style.background = `conic-gradient(#f47a14 ${scrollValue}%, #dddde9 ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;
}
window.onscroll = scrollPercentage;



// Scroll Bar Circular Animation 
$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 100) {
          $("#arrow i").fadeIn();
  }
      else {
          $("#arrow i").fadeOut();
  }
  
  });
  $("#arrow i").on('click',function(){
  $("html,body").animate({
      scrollTop: 0
  }, 600);
      return false;
  });
  
  });
