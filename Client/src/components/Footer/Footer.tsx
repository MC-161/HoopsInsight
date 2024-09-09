import React from 'react';
import { GitHub, Twitter,} from '@mui/icons-material';
import logo from "@/assets/Logo.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="h-10 mx-auto md:mx-0" />
            <p className="mt-2 text-sm font-bold">HOOPSINSIGHT </p>
          </div>
          <div className="w-full grid grid-cols-4 gap-6 lg:flex lg:w-3/4 justify-between text-sm">
            <div>
              <h3 className="text-base font-semibold mb-2">Product</h3>
              <ul>
                <li><a href="/" className="hover:text-primary-main text-primary-alt">Home</a></li>
                <li><a href="/players" className="hover:text-primary-main text-primary-alt">Players</a></li>
                <li><a href="/teams" className="hover:text-primary-main text-primary-alt">Teams</a></li>
                <li><a href="/chatbot" className="hover:text-primary-main text-primary-alt">AI Chat Bot</a></li>
                <li><a href="/comparison" className="hover:text-primary-main text-primary-alt">Comparison Tool</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Company</h3>
              <ul>
                <li><a href="/about" className="hover:text-primary-main text-primary-alt">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary-main text-primary-alt">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Resources</h3>
              <ul>
                <li><a href="https://www.nba.com" className="hover:text-primary-main text-primary-alt">NBA Website</a></li>
                <li><a href="https://www.espn.com" className="hover:text-primary-main text-primary-alt">ESPN Website</a></li>
                <li><a href="https://www.basketball-reference.com" className="hover:text-primary-main text-primary-alt">BasketBall Reference</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">Legal</h3>
              <ul>
                <li><a href="/legal" className="hover:text-primary-main text-primary-alt">Legal</a></li>
                <li><a href="/privacy" className="hover:text-primary-main text-primary-alt">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary-main text-primary-alt">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://twitter.com/yourprofile" className=" hover:text-primary-main text-primary-alt"><Twitter /></a>
            <a href="https://github.com/yourprofile" className=" hover:text-primary-main text-primary-alt"><GitHub /></a>
          </div>
          <p>Contact Us: <a href="mailto:support@yourcompany.com" className="hover:text-primary-main text-primary-alt">support@yourcompany.com</a></p>
          <p className="mt-2">Acknowledgements: Powered by [BOTPRESS] - Data provided by [NBAV2API]</p>
          <p className="mt-2">© 2024 NBA Stats V2, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;