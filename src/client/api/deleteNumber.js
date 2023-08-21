async function deleteNumber(id) {
  try {
    const response = await fetch(`http://localhost:3002/api/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const textResponse = await response.text();
    console.log(textResponse);
  } catch (error) {
    console.error('Error deleting data: ' + error.message);
  }
}
module.exports = deleteNumber;