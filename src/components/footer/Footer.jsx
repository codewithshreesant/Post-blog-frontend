import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[4rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Shrisant Academy</h3>
            <p className="text-sm text-gray-400">Your path to knowledge and growth.</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>

          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Shrisant Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;