let jsValue =
  "<!--  You can place the url of whichever script that you want to run! -->\n" +
  "<html>\n" +
  "<head>\n" +
  "\n" +
  '<style type="text/css">\n' +
  "        html {\n" +
  "            overflow: auto;\n" +
  "        }\n" +
  "        \n" +
  "        html,\n" +
  "        body,\n" +
  "        div,\n" +
  "        iframe {\n" +
  "            margin: 0px;\n" +
  "            padding: 0px;\n" +
  "            height: 100%;\n" +
  "            border: none;\n" +
  "        }\n" +
  "        \n" +
  "        iframe {\n" +
  "            display: block;\n" +
  "            width: 100%;\n" +
  "            border: none;\n" +
  "            overflow-y: auto;\n" +
  "            overflow-x: hidden;\n" +
  "        }\n" +
  "    </style>\n" +
  "</head>\n" +
  "<body>\n" +
  "\n" +
  "<iframe srcdoc = '\n" +
  "<!doctype html>\n" +
  "<title>Open in New Tab</title>\n" +
  "<style>\n" +
  "    body,html {\n" +
  "        height: 100%;\n" +
  "        width: 100%;\n" +
  "        margin: 0;\n" +
  "        display: flex;\n" +
  "        justify-content: center;\n" +
  "        align-items: center;\n" +
  "    }\n" +
  "    button {\n" +
  "        width: 100%;\n" +
  "        height: 100%;\n" +
  "        font-size: 2rem;\n" +
  "        border: none;\n" +
  "        background-color: #007bff;\n" +
  "        color: #fff;\n" +
  "        cursor: pointer;\n" +
  "    }\n" +
  "    button:hover {\n" +
  "        background-color: #0056b3;\n" +
  "    }\n" +
  "</style>\n" +
  "<button id=openButton>Open It</button>\n" +
  "<script>\n" +
  'document.getElementById("openButton").addEventListener("click", function() {\n' +
  '    const newTab = window.open("https://classroom.google.com", "_blank");\n' +
  "    if (!newTab) {\n" +
  '        alert("Popup blocked! Please allow popups for this site.");\n' +
  "        return;\n" +
  "    }\n" +
  "\n" +
  "    const doc = newTab.document;\n" +
  "    doc.open();\n" +
  "    doc.write(`\n" +
  "        <!DOCTYPE html>\n" +
  "        <html>\n" +
  "        <head>\n" +
  "            <title>School Loader</title>\n" +
  "            <style>\n" +
  "                body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }\n" +
  "                button { font-size: 2rem; padding: 10px 20px; background-color: #007bff; color: white; border: none; cursor: pointer; border-radius: 5px; }\n" +
  "                button:hover { background-color: #0056b3; }\n" +
  "                iframe { border: none; width: 100%; height: 100vh; }\n" +
  "            </style>\n" +
  "        </head>  \n" +
  "        <body>\n" +
  '            <input type="text" id="textbox" placeholder="Enter here">\n' +
  '            <button id="loadScriptButton">Load Script</button>\n' +
  "  \n" +
  '            <iframe id="dynamicIframe"></iframe>\n' +
  "            <script>\n" +
  "                function initMutationObserver() {\n" +
  "                    const observer = new MutationObserver(() => {\n" +
  '                        document.querySelectorAll("dji-sru").forEach(el => el.remove());\n' +
  "                    });\n" +
  "                    observer.observe(document.documentElement, { childList: true, subtree: true });\n" +
  "                }\n" +
  "                initMutationObserver();\n" +
  "\n" +
  '                document.getElementById("loadScriptButton").addEventListener("click", function() {\n' +
  '                    const iframe = document.getElementById("dynamicIframe");\n' +
  "        iframe.contentWindow.focus()\n" +
  "                    const doc = iframe.contentWindow.document;\n" +
  '                    const textbox = document.getElementById("textbox").value\n' +
  "                    doc.open();\n" +
  '                    doc.write("<scr" + "ipt src=" + textbox + " onload=" + "parent.initMutationObserver()" + "></scr" + "ipt>"); \n' +
  "\n" +
  "                    doc.close();\n" +
  "                    this.remove(); \n" +
  '                    document.getElementById("textbox").remove()\n' +
  "                });\n" +
  "            <\\/script>    \n" +
  "        </body> \n" +
  "        </html>\n" +
  "    `);\n" +
  "    doc.close();\n" +
  "});\n" +
  "<\/script>\n" +
  "'>\n" +
  "\n" +
  "</iframe>\n" +
  "</body>\n" +
  "\n" 
  
document.open()
document.write(jsValue)
document.close()
