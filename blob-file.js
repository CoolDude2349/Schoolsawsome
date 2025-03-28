let button = document.createElement("button")
button.innerText = "Load It"
button.onclick = openFile
document.body.appendChild(button)
async function openFile() {
            try {
                const [fileHandle] = await window.showOpenFilePicker();
                const file = await fileHandle.getFile();
                const url = URL.createObjectURL(file)
                window.open(url);
            } catch (error) {
                console.error("Error:", error);
            }
        }
