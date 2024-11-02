import React from 'react'

function ChuChat() {
  return (
    <div id="__next">
            <div id="chat-" className="gali-chat preview light-mode default">
                <div className="preview-area">
                    <div className="logo-area">
                        <canvas id="galiOrb" className="logo-gali-orb"></canvas>
                        <img className="logo-client-brand" alt="Client Logo"/>
                    </div>
                    <div className="text-area">
                        <div className="first-message">How can we help you today?</div>
                        <div className="bot-name">Website Assistant</div>
                    </div>
                    <div className="control-area">
                        <button className="close-button close-widget" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
                            </svg>
                        </button>
                        <button className="close-button open-widget" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"></path>
                            </svg>
                        </button>
                        <button className="close-button reset-chat" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="gali-chat-click-area"></div>
                <div className="chat-container">
                    <div className="messages-area false">
                        <div className="message-wrapper message-bot">
                            <div className="w-auto flex-0 max-w-full">
                                <div className="message relative flex flex-col min-w-0 break-words border-0 text-white shadow-soft-xl rounded-2xl bg-clip-border">
                                    <div className="flex-auto px-3 py-2">
                                        <p className="text-left">Hello, how can I help you today?</p>
                                    </div>
                                </div>
                                <div className="text-white text-left ml-2 opacity-60 mt-1">
                                    <p className="message-hour"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-area px-3">
                        <div className="relative flex h-12 w-full min-w-[200px] false">
                            <button className="absolute right-1 top-1 z-10 select-none rounded-full py-2.5 px-2.5 text-center bg-blue-500 align-middle font-sans text-xs text-white transition-all hover:opacity-[0.85] focus:opacity-[0.85]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                            <input autoComplete="off" type="text" id="gali-widget-message-input" className="message-input shadow-lg peer w-full rounded-full border px-4 py-2 pr-20 text-sm transition-all placeholder-shown:border disabled:border-0 placeholder-neutral-400" placeholder="Ask me anything..." />
                        </div>
                    </div>
                    <div className="branding-area mt-3 border-t text-xs text-center py-2 mx-6">
                        <a href="https://galichat.com/?ref=widget-website" target="_blank" rel="noopener noreferrer">
                            Powered by <span className="brading-area">ChuChat</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ChuChat