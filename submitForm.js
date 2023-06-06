exports.handler = async (event) => {
    // Parse the form data from the request body
    const { name, email, subject, message } = JSON.parse(event.body);
  
    // Perform any necessary processing with the form data
    // ...
  
    // Return a response indicating success or failure
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  };