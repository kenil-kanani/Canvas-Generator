import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';


import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ items, buttonLabel}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center justify-center text-white "
                onClick={toggleDropdown}
            >
                {buttonLabel}
                <FontAwesomeIcon icon={faCaretDown} bounce style={{color: "#ffffff",}} className='ml-1'/>
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-6 w-40 bg-[rgb(103,136,159)] rounded-md shadow-lg z-10" >
                    {/* Dropdown menu items */}
                    {items}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
