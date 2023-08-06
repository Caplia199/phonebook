function deleteNumber(id) {
    fetch(`http://localhost:3001/api/${id}`,{
        method: "DELETE",
    })
    .then((res) => res.text())    
    .then(res => console.log(res)) 
  };

module.exports = deleteNumber;