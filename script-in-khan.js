document.open()
document.write(`
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Load It</title>
  </head>
  <body>
    <input type="file" id="fileInput" accept=".html">
    <button id="myButton" onclick="loadExternalHTML()">Load it</button>
    <div id="cooldownBar">
      <div id="cooldownBarFill"></div>
    </div>

    <script type="text/javascript">
      function loadExternalHTML() {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];

        if (!file) {
          alert("Please select a file.");
          return;
        }

        var niceButton = document.getElementById('myButton');
        niceButton.remove(); // Remove the button

        var iframe = document.createElement('iframe');
  
        iframe.style.width = '100%';
        iframe.style.height = '100vh';
        iframe.style.border = 'none';
        iframe.sandbox = 'allow-scripts allow-same-origin allow-pointer-lock';
          iframe.src = "/";  
        document.body.appendChild(iframe);

        var reader = new FileReader();
        reader.onload = function(e) {
          var iframeDoc = iframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(e.target.result); 
          iframeDoc.close();
        };

        reader.readAsText(file); 
      }
    </script>
  </body>
</html>
`)
document.close()
