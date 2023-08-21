async function getAllNumbers() {
    try {
      const response = await fetch('http://localhost:3002/api/get');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data: ' + error.message);
      return [];
    }
  };

module.exports = getAllNumbers;