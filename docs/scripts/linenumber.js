/*global document */
(function() {
  var source = document.getElementsByClassName('prettyprint source linenums');
  var i = 0;
  var lineNumber = 0;
  var lineId;
  var lines;
  var totalLines;
  var anchorHash;

  if (source && source[0]) {
      anchorHash = document.location.hash.substring(1);
      lines = source[0].getElementsByTagName('li');
      totalLines = lines.length;

      for (; i < totalLines; i++) {
          lineNumber++;
          lineId = 'line' + lineNumber;
          lines[i].id = lineId;
          if (lineId === anchorHash) {
              lines[i].className += ' selected';
          }
      }
  }

  window.setTimeout(function() {
    var main = document.getElementById('main')
    var h2 = main.getElementsByTagName('h2')
    Array.prototype.forEach.call(h2, function(el, i){
      var hash = el.textContent.toLowerCase().replace(/[^\w ]+/g, '').replace(/[\ ]+/g, '-')
      el.id = hash
    });
    if (window.location.hash) {
      document.getElementById(window.location.hash.replace(/[\#]+/g, '')).scrollIntoView()
    }
  }, 300)
})();
