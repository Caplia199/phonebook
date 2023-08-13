function postNumber(item) {
    fetch("http://localhost:3001/api",{
        method: "POST",
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(item),
    })
    .then((res) => res.text())    
    .then((data) => {    
      console.log(data);    
    })    
    .catch((error) => {    
      console.error(error);    
    });   
  };

module.exports = postNumber;