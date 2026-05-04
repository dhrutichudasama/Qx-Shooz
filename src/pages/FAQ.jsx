import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
    {
        question: "How long does shipping take?",
        answer: "Standard shipping typically takes 3-5 business days within the continental United States. International shipping can take 7-14 business days depending on the destination and customs processing."
    },
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unworn shoes in their original packaging. Simply initiate a return through our portal, and we'll provide a prepaid shipping label."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location and will be calculated at checkout."
    },
    {
        question: "How do I track my order?",
        answer: "Once your order ships, you will receive an email with a tracking number and a link to follow your package's progress. You can also track it directly on our website under 'My Account'."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. We also offer Klarna for buy-now-pay-later options."
    },
    {
        question: "How do I find my shoe size?",
        answer: "We provide a detailed size chart on every product page. We recommend measuring your foot from heel to toe and comparing it to our guide. If you're between sizes, we usually suggest sizing up."
    },
    {
        question: "Are your shoes sustainably made?",
        answer: "We are committed to sustainability. Many of our collections use recycled materials and eco-friendly tanning processes. Look for the 'Eco-Friendly' tag on product descriptions."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button 
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#C06C84] transition-colors group"
                onClick={onClick}
            >
                <span className="text-lg font-medium text-[#111111] group-hover:text-[#C06C84] transition-colors">
                    {question}
                </span>
                <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-[#F9F9F9] flex items-center justify-center text-gray-400 group-hover:bg-[#C06C84] group-hover:text-white transition-all duration-300">
                    {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-gray-500 leading-relaxed max-w-4xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-6 text-sm text-gray-400 flex items-center gap-2">
                <a href="/" className="hover:text-black transition-colors">Home</a>
                <span>/</span>
                <span className="text-black font-medium">FAQ</span>
            </div>

            {/* Hero Section */}
            <section className="max-w-[1400px] mx-auto px-6 md:px-14 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <p className="text-xs uppercase tracking-[4px] text-gray-400 font-bold">HELP CENTER</p>
                    <h1 className="text-5xl md:text-6xl font-semibold text-[#111111] leading-tight">
                        Frequently Asked <br /> Questions
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto pt-4">
                        Everything you need to know about the product and billing. Can't find the answer you're looking for? Please reach out to our customer support team.
                    </p>
                </motion.div>
            </section>

            {/* FAQ List */}
            <section className="max-w-[1000px] mx-auto px-6 md:px-14 pb-24">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white border-t border-gray-100"
                >
                    {faqData.map((item, index) => (
                        <FAQItem 
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </motion.div>

                {/* Still have questions? */}
                <div className="mt-20 bg-[#F9F9F9] rounded-2xl p-10 md:p-16 text-center space-y-6">
                    <div className="flex -space-x-4 justify-center mb-4">
                        <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/150?u=1" alt="Avatar" />
                        <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/150?u=2" alt="Avatar" />
                        <img className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://i.pravatar.cc/150?u=3" alt="Avatar" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111111]">Still have questions?</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                        Can't find the answer you're looking for? Please chat with our friendly team.
                    </p>
                    <button 
                        onClick={() => window.location.href = '/contact'}
                        className="bg-[#C06C84] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-lg shadow-pink-100"
                    >
                        Get in touch
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
