
$('.signin').click(loginFadeIn);
$('.close').click(loginFadeOut);
$('.submit').click(errorist);
$('[name~=user]').mouseover(derroristUser);
$('[name~=pass]').mouseover(derroristPass);
$('.modal').click(function(x){
  if ($(x.target).is('button')) {
    console.log("false");
    return false;
  }
  else {
    loginFadeOut();
  }
});




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

function derroristUser(){
  $('[name~=user]').removeClass('error');
}

function derroristPass(){
  $('[name~=pass]').removeClass('error');
}
