import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const initialState = {
    name: '',
    email: '',
    phone: '',    
    message: '',
}

export const Contact = () => {
    const [{ name, email, message, phone }, setState] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, message, phone)
        emailjs
            .sendForm(
                // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
                'upflowgmail', 'upFlowTemplate', e.target, 'fWaoZ7uT4-aB9C-85'
            )
            .then(
                (result) => {
                    // console.log(result.text)
                    alert('Mensagem enviada com Successo!')
                    clearState()
                },
                (error) => {
                    alert('Mensagem não pode ser enviada, por favor verifique todos os campos.')
                    // console.log(error.text)
                }
            )
        e.target.reset()
    }



    return (
        <section id="contact" className="bg-gray-50 dark:bg-gray-800 ">
            <div className="container  mx-auto">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
                    {" "}
                    <motion.span
                        variants={fadeIn('up', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className="text-[50px] text-gray-500 sm:text-lg dark:text-white font-bold leading-[0.8] lg:text-[80px] text-accent"
                    >FALE CONOSCO</motion.span> <br />
                    <span className="text-gray-500 dark:text-white">Preencha os campos abaixo, para entrar em contato conosco.</span>
                    <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-2 grid-cols-1 m-10">
                        <form name='setMessage' validate onSubmit={handleSubmit} >
                            <div className="grid grid-cols-2 gap-5">
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    minLength={3}
                                    maxLength={15}
                                    className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300 col-span-2"
                                    placeholder='Nome Completo'
                                    required
                                    onChange={handleChange}
                                />

                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300"
                                    placeholder='E-mail'
                                    required
                                    onChange={handleChange}
                                />

                                <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300"
                                    placeholder='Telefone'
                                    minLength={8}
                                    maxLength={15}
                                    pattern="[0-9-+]+$"
                                    required='Por favor insira o número do telefone corretamente.'
                                    onChange={handleChange}
                                />

                                <input
                                    type='text'
                                    id='sobre'
                                    name='sobre'
                                    minLength={3}
                                    maxLength={15}
                                    className="border border-gray-500 px-4 py-2 text-black focus:outline-none rounded-lg focus:border-purple-300 col-span-2"
                                    placeholder='Assunto'                                
                                    onChange={handleChange}
                                />
                                <textarea
                                    name='message'
                                    id='message'
                                    className="border border-gray-500 px-4 py-2 focus:outline-none text-black rounded-lg  focus:border-purple-300 col-span-2"
                                    rows='4'
                                    placeholder='Mensagem'
                                    minLength={10}
                                    maxLength={50}
                                    required
                                    onChange={handleChange}
                                ></textarea>

                                <input className="text-white border rounded-full p-3 cursor-pointer" type="submit" value={'Enviar Mensagem'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};