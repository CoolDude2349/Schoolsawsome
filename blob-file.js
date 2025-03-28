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

        openFile();
