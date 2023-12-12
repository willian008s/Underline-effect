
    
var btncont = document.getElementById("navbar");
var btns = btncont.getElementsByTagName("a");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    // Remove a classe 'active' de todos os elementos
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }
    
    // Adiciona 'active' apenas ao botão clicado
    this.classList.add('active');
  });
}


