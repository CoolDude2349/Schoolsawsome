          
                const observer = new MutationObserver(() => {
                    document.querySelectorAll("dji-sru").forEach(el => el.remove());
                });

                observer.observe(document.documentElement, { childList: true, subtree: true });

                
      
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter URL here';
        
        const button = document.createElement('button');
        button.innerText = 'Load It';

   
        document.body.appendChild(input);
        document.body.appendChild(button);

            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100vh';
            iframe.style.border = 'none';
            document.body.appendChild(iframe);
                    iframe.focus()
 
       
        function fetchAndDisplayContent() {
          
            const url = input.value;
            if (!url) {
                alert('enter a URL')
                return;
            }
          
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    
                   let doc = iframe.contentWindow.document
                    doc.open();
                    doc.write(data);
                    doc.close();
                })
                .catch(error => {
                    alert('Error fetching content: ' + error.message);
                });


                    document.body.style.overflow = 'hidden';

                         var iframePosition = iframe.getBoundingClientRect().top + window.scrollY;
            
            
            window.scrollTo({
                top: iframePosition,
                behavior: 'smooth'  
            });
        }

       
        button.addEventListener('click', fetchAndDisplayContent);
