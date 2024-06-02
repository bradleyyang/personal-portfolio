import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Bradley',
            message: message,

        };



        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error("Error sending email", error);
            });
        
    }






    return (
        <form onSubmit={handleSubmit}>
            <input
                name="from_name"
                type="text"
                value={name}
                className="feedback-input"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                name="from_email"
                type="email"
                className="feedback-input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
            />
            <textarea
                name="message"
                className="feedback-input"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required>
            </textarea>
            <input
                type="submit"
                value="SUBMIT"
            />
        </form>
    );
}

export default ContactForm