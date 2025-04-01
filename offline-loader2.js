
document.open()
document.write(`


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script>
        function create() {
           
            var url = document.getElementById("userInput").value;
            
           
            if (url) {
                
                var iframe = document.createElement("iframe");
                
               
                iframe.src = url;
                
                
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.zIndex = "-100000000"
                let size = Math.floor(Math.random() * 110);

                iframe.style.width = "100%"
                iframe.style.height = "100%"
                iframe.style.border = "none";
                
              
                document.body.appendChild(iframe);
                
                setTimeout(function() {
                iframe.remove()
                
                
                }, 5000)
                
                
                
                
            } else {
                alert("Enter a valid URL.");
            }
        }
    </script>
</head>
<body>
    <form>
        <label for="userInput">Enter URL:</label>
        <input type="text" id="userInput" name="userInput" placeholder="Enter here">
        <br>
        <button type="button" onclick="create()">Create</button>
    </form>
</body>
</html>


`)
document.close()


