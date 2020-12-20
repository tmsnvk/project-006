 const ContactForm = require("../../utilities/mongodb/models/contactFormModel");

 const sendContactForm = async (request, response) => {
   try {
    const { name, email, text } = request.body;

    // form validation


    const newForm = new ContactForm({
      name: name,
      email: email,
      text: text
    });

    await newForm.save();
    response.json(({ name: 'John Doe' }));

   } catch (error) {
    return response.status(500).json({ error: error.message });
   }
}

export default sendContactForm;