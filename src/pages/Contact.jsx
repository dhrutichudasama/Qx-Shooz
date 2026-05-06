import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import col1 from '../assets/col1.webp';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully!');
    };

    return (
        <div className="bg-white">
            {/* Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-6 text-sm text-gray-400 flex items-center gap-2">
                <a href="/" className="hover:text-black transition-colors">Home</a>
                <span>/</span>
                <span className="text-black font-medium">Contact Us</span>
            </div>

            {/* Main Section */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Column: Contact Info & Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <p className="text-xs uppercase tracking-[4px] text-gray-400 font-bold underline underline-offset-[10px]">INFORMATION</p>
                            <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] leading-tight">
                                Contact Us
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                                As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-[#F9F9F9] flex items-center justify-center text-[#C06C84] rounded-full group-hover:bg-[#C06C84] group-hover:text-white transition-all duration-300">
                                    <FiMapPin size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-xl text-[#111111]">Our Store</h4>
                                    <p className="text-gray-500">123 Fashion Street, Suite 100, New York, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-[#F9F9F9] flex items-center justify-center text-[#C06C84] rounded-full group-hover:bg-[#C06C84] group-hover:text-white transition-all duration-300">
                                    <FiPhone size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-xl text-[#111111]">Phone</h4>
                                    <p className="text-gray-500">+1 (212) 555-0123</p>
                                    <p className="text-gray-500">+1 (212) 555-0124</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-[#F9F9F9] flex items-center justify-center text-[#C06C84] rounded-full group-hover:bg-[#C06C84] group-hover:text-white transition-all duration-300">
                                    <FiMail size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-xl text-[#111111]">Email</h4>
                                    <p className="text-gray-500">support@qxshooz.com</p>
                                    <p className="text-gray-500">info@qxshooz.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 bg-[#F9F9F9] flex items-center justify-center text-[#C06C84] rounded-full group-hover:bg-[#C06C84] group-hover:text-white transition-all duration-300">
                                    <FiClock size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-xl text-[#111111]">Working Hours</h4>
                                    <p className="text-gray-500">Mon - Fri: 10am - 9pm</p>
                                    <p className="text-gray-500">Sat - Sun: 11am - 6pm</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F9F9F9] p-8 md:p-16 rounded-sm"
                    >
                        <h3 className="text-3xl font-semibold mb-10 text-[#111111]">Send Message</h3>
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <input 
                                        type="text" 
                                        placeholder="Name" 
                                        className="w-full bg-white border border-gray-100 px-6 py-4 focus:border-[#C06C84] outline-none transition-all rounded-sm text-gray-700 placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input 
                                        type="email" 
                                        placeholder="Email*" 
                                        className="w-full bg-white border border-gray-100 px-6 py-4 focus:border-[#C06C84] outline-none transition-all rounded-sm text-gray-700 placeholder:text-gray-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <input 
                                    type="text" 
                                    placeholder="Subject" 
                                    className="w-full bg-white border border-gray-100 px-6 py-4 focus:border-[#C06C84] outline-none transition-all rounded-sm text-gray-700 placeholder:text-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <textarea 
                                    placeholder="Message" 
                                    rows="6" 
                                    className="w-full bg-white border border-gray-100 px-6 py-4 focus:border-[#C06C84] outline-none transition-all resize-none rounded-sm text-gray-700 placeholder:text-gray-300"
                                ></textarea>
                            </div>
                            <button className="bg-[#C06C84] text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 w-full md:w-auto shadow-lg shadow-pink-100">
                                Submit Now
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-1000 border-t border-gray-100">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1714815000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
