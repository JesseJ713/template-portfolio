import React, { useState } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const isValidEmail = (email) => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    function handleSubmit(e) {
        e.preventDefault();
        isValidEmail(email);
        if (name && email && message) {
            const serviceId = 'service_e5xeloo';
            const templateId = 'template_vht4ehh';
            const userId = 'user_PGezqgpNMtitZtvFSNTuQ';
            const templateParams = {
                name,
                email,
                message,
            };

            emailjs
                .send(serviceId, templateId, templateParams, userId)
                .then((response) => console.log(response))
                .then((err) => console.log(err));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields');
        }
    }

    return (
        <div className='contact' id='contact'>
            <div className='left'>
                <img
                    src='https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg'
                    alt=''
                />
            </div>
            <div className='right'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='Your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder='Your message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button onClick={handleSubmit}>Send Message</button>
                    {emailSent && <span>Message sent!</span>}
                </form>
            </div>
        </div>
    );
}
