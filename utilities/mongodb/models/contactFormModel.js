const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, lowercase: true, required: true },
  text: { type: String, required: true }
}, { collection: "contactform" });

module.exports = mongoose.model("ContactForm", ContactFormSchema);