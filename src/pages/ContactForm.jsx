import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., send data to an API)

        // Redirect to the catalog page after successful submission
        navigate('/catalogue');
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-5 border ">
            <h2 className="text-3xl font-bold text-center text-amber-900 mb-6">Contact Us</h2>
            <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-gray-700" htmlFor="date">Preferred Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
            </div>
            <button type="submit" className="w-full px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition duration-300">
                Submit
            </button>
        </form>
    );
};

export default ContactForm;