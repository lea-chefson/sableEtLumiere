const ElasticEmailClient = require('elasticemail');

exports.handler = async (event) => {
  const { Name, Email, Subject, Message } = JSON.parse(event.body);

  const client = new ElasticEmailClient(
    'B0BF3F72811A9EBFD311335837F8BD4EFE2E4AAFC1F40F5BAAC3AFFB9E0342C28F759D42ACB4DB4C2DA9E171D4224FA6', // Replace with your Elastic Email API key
  );

  // Send email using Elastic Email
  const emailData = {
    from: 'noreply@yourdomain.com', // Set a sender email address
    to: 'leac41@hotmail.com',
    subject: 'New form submission',
    bodyText: `
      Name: ${Name}
      Email: ${Email}
      Subject: ${Subject}
      Message: ${Message}
    `,
  };

  try {
    await client.mailer.send(emailData);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
