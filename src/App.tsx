/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Recycle, 
  Camera, 
  Info, 
  Phone, 
  Home, 
  BookOpen, 
  CheckCircle2, 
  Truck, 
  Trophy, 
  MapPin,
  Mail,
  Github,
  Twitter,
  Instagram,
  Upload,
  Trash2,
  AlertTriangle,
  Zap,
  Leaf
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type WasteType = 'Wet Waste' | 'Dry Waste' | 'Hazardous Waste' | 'E-Waste';

interface ScanResult {
  type: WasteType;
  binColor: string;
  method: string;
  icon: React.ReactNode;
  colorClass: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Scan Waste', href: '#scan' },
    { name: 'Education', href: '#education' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-purple-700 p-2 rounded-lg">
              <Recycle className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-indigo-900 bg-clip-text text-transparent">
              SwatchhAI
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-purple-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#scan" 
              className="bg-purple-700 text-white px-5 py-2 rounded-full font-medium hover:bg-purple-800 transition-all shadow-lg shadow-purple-200"
            >
              Start Scanning
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-purple-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:text-purple-700 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            AI-Powered <br />
            <span className="text-purple-700">Waste Management</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Join the revolution of smart recycling. Use our AI to identify waste instantly and learn the best way to keep our planet green.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#scan" 
              className="bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-800 transition-all shadow-xl shadow-purple-200 flex items-center justify-center gap-2"
            >
              <Camera className="w-5 h-5" />
              Start Scanning
            </a>
            <a 
              href="#education" 
              className="bg-white text-purple-700 border-2 border-purple-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-purple-300 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Learn More
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-purple-50">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
              alt="Waste Management" 
              className="rounded-2xl w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-50 -z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50 -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ScanWaste = () => {
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name.toLowerCase());
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateScan = () => {
    if (!image) return;
    setIsScanning(true);
    setResult(null);

    // Simulate AI processing time
    setTimeout(() => {
      let scanResult: ScanResult;

      if (fileName.includes('plastic') || fileName.includes('bottle') || fileName.includes('paper')) {
        scanResult = {
          type: 'Dry Waste',
          binColor: 'Blue',
          method: 'Recycle through authorized centers. Ensure it is clean and dry.',
          icon: <Trash2 className="w-12 h-12 text-blue-600" />,
          colorClass: 'bg-blue-50 border-blue-200 text-blue-800'
        };
      } else if (fileName.includes('food') || fileName.includes('fruit') || fileName.includes('vegetable')) {
        scanResult = {
          type: 'Wet Waste',
          binColor: 'Green',
          method: 'Compost at home or dispose in organic waste bins for biogas production.',
          icon: <Leaf className="w-12 h-12 text-green-600" />,
          colorClass: 'bg-green-50 border-green-200 text-green-800'
        };
      } else if (fileName.includes('battery') || fileName.includes('chemical') || fileName.includes('paint')) {
        scanResult = {
          type: 'Hazardous Waste',
          binColor: 'Red/Yellow',
          method: 'Extremely dangerous. Call specialized hazardous waste collection services.',
          icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
          colorClass: 'bg-red-50 border-red-200 text-red-800'
        };
      } else {
        scanResult = {
          type: 'E-Waste',
          binColor: 'Black/Grey',
          method: 'Electronic components contain toxic metals. Hand over to certified e-waste recyclers.',
          icon: <Zap className="w-12 h-12 text-gray-600" />,
          colorClass: 'bg-gray-50 border-gray-200 text-gray-800'
        };
      }

      setResult(scanResult);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <section id="scan" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Scan Your Waste</h2>
          <p className="text-gray-600">Upload an image of the item and let our AI classify it for you.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-purple-50 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Area */}
            <div className="space-y-6">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square rounded-2xl border-2 border-dashed border-purple-200 bg-purple-50 flex flex-col items-center justify-center cursor-pointer hover:border-purple-400 transition-all overflow-hidden relative group"
              >
                {image ? (
                  <>
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-medium">Change Image</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-purple-400 mb-4" />
                    <p className="text-purple-700 font-medium">Click to upload image</p>
                    <p className="text-purple-400 text-sm">PNG, JPG up to 10MB</p>
                  </>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*"
              />
              
              <button 
                onClick={simulateScan}
                disabled={!image || isScanning}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                  !image || isScanning 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-purple-700 text-white hover:bg-purple-800 shadow-lg shadow-purple-200'
                }`}
              >
                {isScanning ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5" />
                    Scan Waste
                  </>
                )}
              </button>
            </div>

            {/* Result Area */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!result && !isScanning && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center p-8 border-2 border-dashed border-gray-100 rounded-2xl"
                  >
                    <Info className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-400">Upload an image and click scan to see the results here.</p>
                  </motion.div>
                )}

                {isScanning && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="h-8 bg-gray-100 rounded-full animate-pulse w-3/4"></div>
                    <div className="h-32 bg-gray-100 rounded-2xl animate-pulse"></div>
                    <div className="h-20 bg-gray-100 rounded-2xl animate-pulse"></div>
                  </motion.div>
                )}

                {result && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-8 rounded-2xl border-2 ${result.colorClass} space-y-6`}
                  >
                    <div className="flex items-center gap-4">
                      {result.icon}
                      <div>
                        <h3 className="text-sm uppercase tracking-wider font-bold opacity-70">Classification</h3>
                        <p className="text-2xl font-black">{result.type}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${result.binColor === 'Blue' ? 'bg-blue-600' : result.binColor === 'Green' ? 'bg-green-600' : result.binColor === 'Red/Yellow' ? 'bg-red-600' : 'bg-gray-800'}`}></div>
                        Recommended Bin: {result.binColor}
                      </h4>
                    </div>

                    <div className="bg-white/50 p-4 rounded-xl border border-current/10">
                      <h4 className="font-bold mb-1">Disposal Method:</h4>
                      <p className="text-sm leading-relaxed">{result.method}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase opacity-60">
                      <CheckCircle2 className="w-4 h-4" />
                      AI Confidence: 98.4%
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: 'AI Waste Detection',
      desc: 'State-of-the-art computer vision to identify and categorize waste types instantly.',
      icon: <Camera className="w-8 h-8 text-purple-600" />,
    },
    {
      title: 'Smart Pickup',
      desc: 'Schedule waste collection with just a tap. Our optimized routes save fuel and time.',
      icon: <Truck className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: 'Rewards System',
      desc: 'Earn points for every item you recycle correctly. Redeem for local store discounts.',
      icon: <Trophy className="w-8 h-8 text-amber-500" />,
    },
    {
      title: 'Real-time Tracking',
      desc: 'Monitor your environmental impact and track collection vehicles in real-time.',
      icon: <MapPin className="w-8 h-8 text-emerald-600" />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SwatchhAI?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We combine technology with sustainability to make waste management effortless and rewarding.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-purple-100 border border-purple-50"
            >
              <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const tips = [
    {
      title: 'Plastic Waste',
      items: ['Rinse containers before recycling', 'Avoid single-use plastics', 'Look for recycling symbols'],
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Metal Waste',
      items: ['Separate aluminum from steel', 'Crush cans to save space', 'Remove paper labels if possible'],
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'Glass Waste',
      items: ['Sort by color (clear, green, brown)', 'Remove caps and lids', 'Do not mix with ceramics'],
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=400'
    },
    {
      title: 'E-Waste',
      items: ['Never throw in regular bins', 'Remove batteries first', 'Find certified e-waste recyclers'],
      color: 'gray',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recycling Education</h2>
          <p className="text-gray-600">Master the art of waste management with our expert tips.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-indigo-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-indigo-100 leading-relaxed mb-8">
            At SwatchhAI, we believe that technology is the key to solving the world's waste crisis. Our mission is to empower every individual with the tools they need to manage waste intelligently.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">1M+</p>
              <p className="text-indigo-200">Items Scanned</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">500T</p>
              <p className="text-indigo-200">Waste Recycled</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">50+</p>
              <p className="text-indigo-200">Partner Cities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-2">100%</p>
              <p className="text-indigo-200">Eco-Friendly</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Nature" 
              className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -inset-4 border-2 border-purple-500/30 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-800/20 skew-x-12 translate-x-1/4"></div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions about our smart waste management system? We're here to help you make a difference.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Mail className="text-purple-700 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Email Us</p>
                  <p className="text-gray-600">hello@swatchhai.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Phone className="text-purple-700 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <MapPin className="text-purple-700 w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">123 Green Way, Eco City, 90001</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="bg-purple-50 p-8 rounded-3xl border border-purple-100 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-purple-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-800 transition-all shadow-lg shadow-purple-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="bg-purple-700 p-2 rounded-lg">
              <Recycle className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold">SwatchhAI</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
            <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-purple-400 transition-colors"><Github /></a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 SwatchhAI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <Hero />
      <ScanWaste />
      <Features />
      <Education />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
