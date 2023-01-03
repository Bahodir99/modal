var elmodal = document.querySelector('.modal');
var elopen = document.querySelector('.btn__open');
var elclose = document.querySelector('.btn__close');
var elcloseX = document.querySelector('.close__x');
var elsave = document.querySelector('.btn__save');
var elshadow = document.querySelector('.shadow');


elopen.addEventListener('click' , function(){
    elmodal.classList.add('open_block')
    elshadow.classList.add('shadow_block')
})
elclose.addEventListener('click' , function(){
    elmodal.classList.remove('open_block')
    elshadow.classList.remove('shadow_block')
})

elcloseX.addEventListener('click' , function(){
    elmodal.classList.remove('open_block')
    elshadow.classList.remove('shadow_block')
})

elsave.addEventListener('click' , function(){
    elmodal.classList.remove('open_block')
    elshadow.classList.remove('shadow_block')
})
elshadow.addEventListener('click' , function(){
    elmodal.classList.remove('open_block')
    elshadow.classList.remove('shadow_block')
})
