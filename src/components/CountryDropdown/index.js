import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const CountryDropdown = ({ selectedCountry, onCountryChange }) => {
  const [countries, setCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const sortedCountries = response.data.sort((a, b) => {
          if (a.name.common < b.name.common) return -1;
          if (a.name.common > b.name.common) return 1;
          return 0;
        });
        setCountries(sortedCountries);
      })
      .catch(error => {
        console.error('Error fetching countries data:', error);
      });
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    onCountryChange(country.name.common);
    setIsOpen(false);
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

  const selected = countries.find(country => country.name.common === selectedCountry);

  return (
    <div className="relative w-3/12 mb-2" ref={dropdownRef}>
      <label htmlFor="country-dropdown" className="block text-sm font-medium text-gray-700 mb-1">Vùng/Quốc gia</label>
      
      <div 
        id="country-dropdown" 
        className="bg-white border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          {selected ? (
            <>
              <img 
                src={selected.flags?.png} 
                alt={selected.name.common} 
                className="w-6 h-4 mr-2"
              />
              <span>{selected.name.common}</span>
            </>
          ) : (
            <span>Select a country</span>
          )}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg w-full max-h-60 overflow-y-auto">
          <ul className="py-1">
            {countries.map((country) => (
              <li 
                key={country.cca3} 
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => selectCountry(country)}
              >
                <img 
                  src={country.flags?.png} 
                  alt={country.name.common} 
                  className="w-6 h-4 mr-2"
                />
                {country.name.common}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
