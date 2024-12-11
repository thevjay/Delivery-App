import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const SocialIcons = () => (
    <div className="flex space-x-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <FaFacebook className="w-6 h-6" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
            <FaXTwitter className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
            <FaInstagram className="w-6 h-6" />
        </a>
    </div>
);

const FooterColumn = ({ title, items }) => (
    <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <ul className="text-gray-600 space-y-1">
            {items.map((item, index) => (
                <li key={index} className="hover:text-gray-100 cursor-pointer">{item}</li>
            ))}
        </ul>
    </div>
);

const SubscribeForm = () => (
    <div className="flex space-x-3">
        <input type="text" placeholder="text123@gmail.com" className="px-4 py-2 rounded-lg border border-gray-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send</button>
    </div>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const aboutItems = ["About Us", "Service Us", "Contact", "Company"];
    const companyItems = ["Partnership", "Terms of Use", "Privacy", "Achievements"];

    return (
        <div className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Footer Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Food</h3>
                        <p className="text-gray-400">
                            As we move forward in this technological age,
                            we look to the future of our company with certainty and pride.
                        </p>
                        <SocialIcons />
                    </div>

                    {/* Footer Columns */}
                    <FooterColumn title="About Us" items={aboutItems} />
                    <FooterColumn title="Company" items={companyItems} />

                    {/* Subscribe Form */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Connect With Us</h3>
                        <p className="text-gray-600">We're Always Here for You</p>
                        <SubscribeForm />
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="mt-8 text-center text-gray-400">
                    <p className="text-sm">Copyright © {currentYear} VIJAY.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
