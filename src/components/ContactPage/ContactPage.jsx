import emailjs from '@emailjs/browser';
export const ContactPage = () => {

   const sendEmail = (e) => {
        e.preventDefault();
        // handle form submission
        emailjs.sendForm('service_8t2vzx2', 'template_3gz01xh', e.target, 'PEa8MK6IZTEVpwKfu')
        .then(
            () => {
              alert('SUCCESS!');
            },
            (error) => {
              alert('FAILED...', error.text);
            },
          );
   }

    return (
        <section className="bg-transparent text-white" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-red-500 dark:text-blue-200">
                            Contact
                        </p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl">
                            Get in Touch
                        </h2>
                       
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-300">
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis
                                ante, ac tincidunt sem venenatis ut.
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500 text-gray-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-red-500">
                                            Our Address
                                        </h3>
                                        <p className="text-white">
                                        110 Algernon Road,
                                        </p>
                                        <p className="text-gray-300">
                                        Norwood, Johannesburg
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-red-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2" />
                                            <path d="M15 3a6 6 0 0 1 6 6" />
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-red-500">
                                            Contact
                                        </h3>
                                        <p className="text-white">
                                            Mobile: 011 492v2523
                                        </p>
                                        <p className="text-gray-300">
                                            Mail: bayleafnorwood@gmail.com
                                        </p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white">
                                Ready to Get Started?
                            </h2>
                            <form id="contactForm" onSubmit={sendEmail}>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="name"
                                                className="pb-1 text-xs uppercase tracking-wider"
                                            />
                                            <input
                                                type="text"
                                                id="name"
                                                autoComplete="given-name"
                                                placeholder="Your name"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0"
                                                name="name"
                                            />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="email"
                                                className="pb-1 text-xs uppercase tracking-wider"
                                            />
                                            <input
                                                type="email"
                                                id="email"
                                                autoComplete="email"
                                                placeholder="Your email address"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label
                                            htmlFor="textarea"
                                            className="pb-1 text-xs uppercase tracking-wider"
                                        />
                                        <textarea
                                            id="textarea"
                                            name="message"
                                            cols={30}
                                            rows={5}
                                            placeholder="Write your message..."
                                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="w-full bg-red-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0 hover:bg-red-500"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
