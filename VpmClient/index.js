const [btnnemu, modalprofile] = [
    document.querySelector('.profile'),
    document.querySelector('.modal-profile')
  ];
  

btnnemu.onclick = function(){
    modalprofile.style.display = "block"
}