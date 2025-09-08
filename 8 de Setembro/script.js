document.getElementById("meuForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede envio real do form

  let iframe = document.getElementById("iframeDados");
  let template = document.getElementById("fieldsetProf").innerHTML;

  // escreve o fieldset dentro do iframe
  iframe.style.display = "block";
  iframe.contentDocument.open();
  iframe.contentDocument.write(template);
  iframe.contentDocument.close();
});
