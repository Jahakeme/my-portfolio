import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
        <section id="contact-me" className="bg-white spacing-clamp-xl">
            <div className="container-clamp text-center">
                <h2 className="text-clamp-4xl font-sans font-bold margin-clamp-lg text-black">Contact Me</h2>
                
                {/* Contact Cards Row */}
                <div className="flex justify-center items-center gap-8 margin-clamp-lg">
                    {/* Gmail Card - Reduced Size */}
                    <a 
                        href="mailto:asitokjucal@gmail.com"
                        className="group bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 p-6"
                        style={{
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                        }}
                    >
                        <Image
                            src="/contact-me/gmail.svg"
                            alt="Gmail"
                            width={64}
                            height={64}
                            className="gmail-icon"
                        />
                    </a>

                    {/* Divider */}
                    <div className="h-12 w-px bg-gray-300"></div>

                    {/* Social Icons Card */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                        <div className="flex items-center gap-6">
                            <a 
                                href="https://linkedin.com/in/jucal-asitok" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Image
                                    src="/contact-me/linkedin.svg"
                                    alt="LinkedIn"
                                    width={32}
                                    height={32}
                                    className="linkedin-icon opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </a>
                            
                            <a 
                                href="https://x.com/jucalasitok" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Image
                                    src="/contact-me/twitter.svg"
                                    alt="Twitter"
                                    width={32}
                                    height={32}
                                    className="twitter-icon opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </a>
                            
                            <a 
                                href="https://github.com/Jahakeme" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group transition-all duration-300 hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Image
                                    src="/skills/github.svg"
                                    alt="GitHub"
                                    width={32}
                                    height={32}
                                    className="github-icon opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
