import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', contact: '', date: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-14">
            <h2 className="text-2xl font-bold mb-6 text-center text-white bg-amber-300 p-4 rounded-t-lg">Contact Details</h2>
            <label className="mb-4">
                <span className="block text-gray-700 mb-1">Name:</span>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </label>
            <label className="mb-4">
                <span className="block text-gray-700 mb-1">Email:</span>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </label>
            <label className="mb-4">
                <span className="block text-gray-700 mb-1">Contact:</span>
                <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </label>
            <label className="mb-4">
                <span className="block text-gray-700 mb-1">Date:</span>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-amber-600 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
            </label>
            <button type="submit" className="mt-4 px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition duration-200">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;