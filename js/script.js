function init(){
  document.getElementById('entrybutton').addEventListener('click', submit)
  function submit(){
    var result = document.getElementById('entryinput').value;
                alert('Khaoula Braidi: ' + result);
                document.getElementById("textoutput").innerHTML = result;
  }
}

window.addEventListener('load', init);
