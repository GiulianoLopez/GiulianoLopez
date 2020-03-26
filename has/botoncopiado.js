/*const button = document.querySelector('i.fa-copy');

const imput = document.querySelector('.clipboard');

const message = document.querySelector("#message");

button.addEventListener('click',function(){
	input.focus();
	document.execCommand('selectAll');
	document.exeCommand('copy');

	message.innerHTML = "Copiado al portapapeles";

	setTimeout(()=> message.innerHTML = "", 3000);
})*/

const button = document.querySelector('i.fa-copy');
const input = document.querySelector('#url');
const mensaje = document.querySelector('#mensaje');

button.addEventListener('click', function(){
  input.focus();
  document.execCommand('SelectAll');
  document.execCommand('copy');
  
  //Deseleccionar el texto
  //window.getSelection().removeAllRanges(); 
  /*Al quitar el focus de la caja el texto
    en automatico se deselecciona asi que esto
    no es necesario
  */
  //Quitar el focus del input
  document.getElementById("url").blur();
  mensaje.innerHTML ="Copiado";
  mensaje.classList.add('fade-in');
  //mensaje.style.transition = "opacity 0.3s ease";
  //setTimeout(()=>mensaje.innerHTML="",1000):
  setTimeout(function(){
    mensaje.classList.remove('fade-in');
    mensaje.classList.add('fade-ou');
  },1000);
  
  
  
})
