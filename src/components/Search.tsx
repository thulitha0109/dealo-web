import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  // Updated pages data with URLs
  const pages = [
    { id: 1, name: 'Trading Solutions', icon: '🌐', url: '/trading-solutions' },
    { id: 2, name: 'Freight Forwarding Solutions', icon: '🚚', url: '/freight-forwarding-solutions' },
    { id: 3, name: 'Clearance Solutions', icon: '📦', url: '/clearance-solutions' },
    { id: 4, name: 'Cargo Insurance Solutions', icon: '🛡️', url: '/cargo-insurance-solutions' },
    { id: 5, name: 'Racing Solutions', icon: '🏁', url: '/racing-solutions' },
    { id: 6, name: 'Home', icon: '🏠', url: '/' },
    { id: 7, name: 'Solutions', icon: '💡', url: '/solutions' },
    { id: 8, name: 'Dealo Tech', icon: '💻', url: '/dealo-tech' },
    { id: 9, name: 'Partnerships', icon: '🤝', url: '/partnerships' }
  ];
  
  // Filter pages based on search text
  const filteredPages = pages.filter(page => 
    page.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setIsSearching(e.target.value.length > 0);
  };
  
  const handleSearchFocus = () => {
    setIsSearching(searchText.length > 0);
  };
  
  const handleItemClick = (page) => {
    console.log(`Navigating to: ${page.url}`);
    window.location.href = page.url;
    setIsSearching(false);
    setSearchText('');
  };
  
  return (
    <div className="relative mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg placeholder-gray rounded-lg"
          value={searchText}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
        />
        <Search className="text-amber-400 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray h-4 w-4" />
      </div>
      
      {isSearching && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md overflow-hidden z-10">
          {filteredPages.length > 0 ? (
            <ul className="max-h-60 overflow-auto">
              {filteredPages.map(page => (
                <li 
                  key={page.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleItemClick(page)}
                >
                  <span className="mr-2">{page.icon}</span>
                  <span>{page.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;