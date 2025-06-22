import React from 'react';

const ContactForm = () => {
    return (
        <section className="py-20 bg-gray-100" id="contato">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato Conosco</h2>
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Seu Nome"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="seuemail@example.com"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                            <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" placeholder="Sua mensagem..."></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
export default ContactForm;