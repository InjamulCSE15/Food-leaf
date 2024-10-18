import { FaBurger, FaWhatsapp } from "react-icons/fa6";
import './Footer.css';
const Footer = () => {
    const yearShow = new Date().getFullYear();
    return (
        <footer className="container mx-auto  md:pt-16 pt-8 md:px-6 px-3">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                <a
                    href="/"
                    aria-label="Go home"
                    title="Bay Leaf"
                    className="inline-flex items-center text-red-500 lg:text-5xl text-xl logo"
                >
                    <span className="font-bold tracking-wide ">
                    Food Leaf
                    </span>
                </a>
                <div className="mt-6 lg:max-w-sm">
                    <p className="text-sm text-gray-200">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                    <p className="mt-4 text-sm text-gray-200">
                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                    vitae dicta sunt explicabo.
                    </p>
                </div>
                </div>
                <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking-wide text-slate-300">
                    Contacts
                </p>
                <div className="flex">
                    <p className="mr-1 text-red-500">Phone:</p>
                    <a
                    href="tel:129384712"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    123-283-666
                    </a>
                </div>
                <div className="flex">
                    <p className="mr-1 text-red-500">Email:</p>
                    <a
                    href="mailto:foodleafinfo@gmail.com"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    foodleafinfo@gmail.com
                    </a>
                </div>
                <div className="flex">
                    <p className="mr-1 text-red-500">Address:</p>
                    <span
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                    108, Baston, New York
                    </span>
                </div>
                </div>
                <div>
                <span className="text-base font-bold tracking-wide text-slate-300">
                    Social
                </span>
                <div className="flex items-center mt-1 space-x-3">
                    <a
                    href="tel:00923049"
                    className="text-gray-100 transition-colors duration-300 hover:text-red-500"
                    >
                    <FaWhatsapp size={'1.5rem'}/>
                    
                    </a>
                    <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-red-500"
                    >
                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                        <circle cx={15} cy={15} r={4} />
                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                    </a>
                    <a
                    href="/"
                    className="text-gray-100 transition-colors duration-300 hover:text-red-500"
                    >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                    </a>
                </div>
                <p className="mt-4 text-sm text-gray-100">
                    Providing you the best dining experience.
                </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-red-500 lg:flex-row">
                <p className="text-sm text-gray-600">
                © Copyright {yearShow} Injamul Alam. All rights reserved.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <li>
                    <a
                    href="/"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-100"
                    >
                    F.A.Q
                    </a>
                </li>
                <li>
                    <a
                    href="/"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-100"
                    >
                    Privacy Policy
                    </a>
                </li>
                <li>
                    <a
                    href="/"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-100"
                    >
                    Terms &amp; Conditions
                    </a>
                </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer