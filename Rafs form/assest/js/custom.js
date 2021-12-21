$(document).ready(function(){
  $('#section1a').css({'display':'block'});
})

// button functionality

function saveExit(){
  document.getElementById('registration-section').style.display='none';
  document.getElementById('progress').style.display='none';
  document.getElementById('confirmation').style.display='block';
  document.getElementById('confirm1').style.display='none';
  document.getElementById('confirm3').style.display='block';
}

function letStart(){
  document.getElementById('confirmation').style.display='none';
  document.getElementById('confirm3').style.display='none';
  document.getElementById('section1d').style.display='block';
}

function doLater(){
  document.getElementById('confirm3').style.display='none';
  document.getElementById('confirm2').style.display='block';
}

function nextStep(){
  document.getElementById('confirm1').style.display='none';
  document.getElementById('confirm2').style.display='block';
}

function startNew(){
  document.getElementById('section1a').style.display='none';
  document.getElementById('section1b').style.display='block';
}

function findSaved1(){
  document.getElementById('section1a').style.display='none';
  document.getElementById('section1d').style.display='block';
}

function nextBtn1(){
  document.getElementById('section1b').style.display='none';
  document.getElementById('section1c').style.display='block';
}

function nextBtn2(){
  document.getElementById('section1c').style.display='none';
  document.getElementById('progress').style.display='block';
  document.getElementById('registration-section').style.display='block';
}

function findSaved2(){
  document.getElementById('section1d').style.display='none';
  document.getElementById('progress').style.display='block';
  document.getElementById('registration-section').style.display='block';
}

function submitForm(){
  document.getElementById('registration-section').style.display='none';
  document.getElementById('confirmation').style.display='block';
  document.getElementById('confirm1').style.display='block';
}

// floating labels

$('.floating-labels .form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

