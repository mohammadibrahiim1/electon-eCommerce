import React, { useState } from 'react';

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // add code here to handle form submission
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactPage;
