document.open()
document.write(`

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fullscreen iFrame</title>
    <style>
        /* Optional: Ensure no margins or padding for the body */
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
        }
    </style>
</head>
<body>
    <script>
        // Create the iframe element
        var iframe = document.createElement('iframe');

        // Set attributes for the iframe
        iframe.src = 'https://slopeonline.online'; // Change this to your desired URL
        iframe.style.position = 'absolute'; // Position absolutely on the page
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100%'; // Make iframe full width
        iframe.style.height = '100%'; // Make iframe full height
        iframe.style.border = 'none'; // Remove border
        
        // Append the iframe to the body of the page
        document.body.appendChild(iframe);
    </script>
</body>
</html>


`)
document.close()
