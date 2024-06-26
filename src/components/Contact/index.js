'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify';

export function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [demand, setDemand] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState('')
    const [errors, setErrors] = useState({})

    const handleSubmit = async event => {
        event.preventDefault()

        setLoading(true)

        let errorsObj = {};
        if(!name) errorsObj.name = 'Fill the name field'
        if(!email) errorsObj.email = 'Fill the email field'
        if(!company) errorsObj.company = 'Fill the company field'
        if(!demand) errorsObj.demand = 'Fill the demand field'

        if(Object.keys(errorsObj).length > 0) {
            setErrors(errorsObj)
            setLoading(false)
            return false
        }

        const url = `${process.env.NEXT_PUBLIC_HOST_URL}/api/contact`
        const data = {
            name,
            email,
            company,
            demand,
            message
        }

        fetch(url, {
            method: "POST", 
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data), 
          }).then(response => {
            if(response.ok) toast('Email sent', { type: 'success' })
            else toast('Error to send email', { type:'error'})
            
            setLoading(false)
            setErrors({})
          }).catch(() => {
            toast('Error to send email', { type:'error'})
            setLoading(false)
          })
    }

    return (
        <section className="bg-white dark:bg-gray-800" id="contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get in touch</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We are here to create your next project, integration, MVP or a new type of spaceship</p>
                <form action="#" className="space-y-8">
                    <div>
                        {errors.name && (<p className='text-red-500'>{errors.name}</p>)}
                        <input
                            type="text"
                            id="name"
                            defaultValue={name}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Your name"
                            required
                            onChange={event => setName(event.target.value)}
                        />
                    </div>

                    <div>
                        {errors.email && (<p className='text-red-500'>{errors.email}</p>)}
                        <input
                            type="email"
                            id="email"
                            defaultValue={email}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Your email"
                            required
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>

                    <div>
                        {errors.company && (<p className='text-red-500'>{errors.company}</p>)}
                        <input
                            type="text"
                            id="company"
                            defaultValue={company}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Company name"
                            required
                            onChange={event => setCompany(event.target.value)}
                        />
                    </div>

                    <div>
                        {errors.demand && (<p className='text-red-500'>{errors.demand}</p>)}
                        <input
                            type="text"
                            id="demand"
                            defaultValue={demand}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Your demand or project"
                            required
                            onChange={event => setDemand(event.target.value)}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <textarea
                            id="message"
                            rows="6"
                            defaultValue={message}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Your message..."
                            onChange={event => setMessage(event.target.value)}
                        />
                    </div>

                    <div className="text-center">
                        {loading ? (
                            <button
                                className="text-pink-500 py-3 px-5 border border-pink-500 rounded font-medium cursor-not-allowed"
                                disabled
                            >
                             Loading...
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="text-pink-500 py-3 px-5 border border-pink-500 rounded font-medium"
                                onClick={event => handleSubmit(event)}
                            >
                                Send a message now
                            </button>
                        )}
                    </div>
                </form>
            </div>
            </section>
    )
}