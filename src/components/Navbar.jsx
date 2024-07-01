import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Typebot.io
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;