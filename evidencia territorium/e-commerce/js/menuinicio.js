window.addEventListener('scroll', function(){
    var header = this.document.querySelector('header');
    header.classList.toggle('down',window.scrollY > 0);

})
