async function postNumber(item) {
  try {
    const response = await fetch("http://localhost:3002/api", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error posting data: ' + error.message);
  }
}


module.exports = postNumber;