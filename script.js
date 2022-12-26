document.querySelector('#input').addEventListener("input", function() {
  var textValue = math.eval(document.querySelector('#input').value);
  console.log(textValue);
  document.querySelector('#output').innerHTML = textValue;
})

