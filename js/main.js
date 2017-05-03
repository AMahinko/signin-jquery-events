
$('.signin').click(loginFadeIn);
$('.close').click(loginFadeOut);
$('.submit').click(errorist);
$('input').mouseover(derrorist);




// modal fadin function

function loginFadeIn(){
  $('.modal').fadeIn(600);
}

// modal fadeout function
function loginFadeOut(){
  $('.modal').fadeOut(600);
}

function errorist(){
  $('input').addClass('error')
}

function derrorist(){
  $('input').removeClass('error');
}
