import React, { useState } from 'react';
import { 
  Plane, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Hotel, 
  Search,
  Globe,
  Compass,
  Clock,
  Star
} from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
  const [budget, setBudget] = useState('');

  const popularDestinations: Destination[] = [
    {
      id: 1,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      description: 'Tropical paradise with stunning beaches and rich culture',
      price: '$800/person'
    },
    {
      id: 2,
      name: 'Santorini, Greece',
      image: 'https://media.istockphoto.com/id/1145450965/photo/santorini-island-greece.webp?a=1&b=1&s=612x612&w=0&k=20&c=9WlDQ_4SrbJ8T2Qm0EFdxSqPD2EqhNO-O3TzELZzpbw=',
      description: 'Iconic white buildings and breathtaking sunsets',
      price: '$1200/person'
    },
    {
      id: 3,
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
      description: 'Modern city meets traditional culture',
      price: '$1500/person'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800)',
            filter: 'brightness(0.6)'
          }}
        />
             {/* Signup & Login Buttons */}
<div className="absolute top-4 right-20">
  <a href="./src/login.html" className="bg-brown-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg mr-4">
   <b> Login</b>
  </a>
  <a href="./src/signup.html" className="bg-brown-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
    <b>Sign Up</b>
  </a>
</div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Plan Your Perfect Journey with TrekGo</h1>
          <p className="text-xl mb-8">Discover, plan, and book your dream vacation in one place</p>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={selectedDates.start}
                  onChange={(e) => setSelectedDates({ ...selectedDates, start: e.target.value })}
                />
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="number"
                  placeholder="Budget"
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Search size={20} />
                Search
              </button>
          
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TrekGo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Access destinations worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Smart Planning</h3>
              <p className="text-gray-600">Personalized travel recommendations</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">Stay informed with live notifications</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Best Deals</h3>
              <p className="text-gray-600">Exclusive offers and discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
  <span className="text-blue-600 font-semibold">{destination.price}</span>
  <a href="./src/login.html" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
    Explore
  </a>
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Travel Updates</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest travel deals and tips</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TrekGo</h3>
            <p className="text-gray-400">Your ultimate travel companion for planning and booking amazing adventures.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Destinations</a></li>
              <li><a href="#" className="hover:text-white">Travel Guides</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@trekgo.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Travel Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;