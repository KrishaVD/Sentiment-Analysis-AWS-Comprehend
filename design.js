document.getElementById('analysisForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const text = document.getElementById('textInput').value;
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = 'Processing...';
  
       
    try {
      const formData = new FormData();
      
      formData.append('text', text);

      const response = await fetch('https://rif06p09t7.execute-api.us-east-1.amazonaws.com/PROD/analyser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: text }),
      });
    
      
      /*const response = await fetch('https://ofx6ysplv8.execute-api.us-east-1.amazonaws.com/PROD/analysis', {
        method: 'POST',
        body: formData,
      });*/
  
      const data = await response.json();
      resultsElement.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
      resultsElement.innerHTML = 'Error: ' + error;
    }
  });
  
