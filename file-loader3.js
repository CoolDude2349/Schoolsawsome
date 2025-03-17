const button = document.createElement('button');
button.textContent = 'Click Me';


document.body.appendChild(button);





button.addEventListener('click', loadWindow);

function loadWindow() {
    


const newTab = window.open("https://classroom.google.com", "_blank");
    

    const doc = newTab.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>School Loader</title>
            <style>
                .file-label {
                    display: block;
                    width: 100%;
                    height: 5px;
                    background-color: #007BFF;
                    color: white;
                    text-align: center;
                    padding: 15px;
                    font-size: 1.2rem;
                    cursor: pointer;
                    border-radius: 5px;
                }
                .file-label:hover {
                    background-color: #0056b3;
                }
                #fileInput {
                    display: none;
                }
            </style>
        </head>  
        <body>

            <label for="fileInput" class="file-label">Select an HTML File</label>
            <input type="file" id="fileInput" accept=".html">

            <script>
                // MutationObserver to remove Snap&Read iframes
                const observer = new MutationObserver(() => {
                    document.querySelectorAll("dji-sru").forEach(el => el.remove());
                });

                observer.observe(document.documentElement, { childList: true, subtree: true });

                let fileContent = "";

                document.getElementById("fileInput").addEventListener("change", function(event) {
                    const file = event.target.files[0];
                    if (!file) return;

                    const reader = new FileReader();
                    reader.onload = function(e) {
                        fileContent = e.target.result;

                        // Create the iframe and append it after file is selected
                        const iframe = document.createElement('iframe');
                        iframe.style.width = '100%';
                        iframe.style.height = '100vh';
                        iframe.style.border = 'none';
                        document.body.appendChild(iframe);
                        document.body.style.overflow = 'hidden';

                         var iframePosition = iframe.getBoundingClientRect().top + window.scrollY;
            
            
            window.scrollTo({
                top: iframePosition,
                behavior: 'smooth'  
            });
             
             iframe.scrolling = "no"

                        const doc = iframe.contentWindow.document;
                        doc.open();
                        doc.write(fileContent);
                        doc.close();
                    };
                    reader.readAsText(file);
                });
            <\/script>    

        </body> 
        </html>
    `);
   
doc.close()
}
