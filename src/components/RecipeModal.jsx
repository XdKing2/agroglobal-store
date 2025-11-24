import React, { useState } from 'react';
import { X, Mail, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

const RecipeModal = ({ recipe, onClose, user }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    message: `I'm interested in the full recipe for ${recipe.name}`,
    flockSize: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to your backend
    console.log('Recipe request submitted:', { recipe: recipe.name, ...formData });
    setFormSubmitted(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      onClose();
      setFormSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!formSubmitted ? (
          <>
            {/* Header */}
            <div className="relative">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <X size={24} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{recipe.name}</h2>
                <p className="text-green-300">Save {recipe.costSavings} on feed costs</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Recipe Preview */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Recipe Preview</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><span className="font-semibold">Age Group:</span> {recipe.ageGroup}</p>
                  <p><span className="font-semibold">Cost Savings:</span> {recipe.costSavings} compared to commercial feed</p>
                  <p><span className="font-semibold">Main Ingredients:</span> {recipe.ingredients.slice(0, 3).join(', ')}...</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">📋 Full Recipe Access:</span> To receive the complete recipe with exact measurements, 
                  preparation instructions, and nutritional breakdown, please fill out the form below. 
                  Our team will send you the detailed recipe within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Flock Size (Optional)
                    </label>
                    <input
                      type="text"
                      name="flockSize"
                      value={formData.flockSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="e.g., 500 birds"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Any specific questions or requirements?"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Request Recipe
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          /* Success Message */
          <div className="p-12 text-center">
            <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Submitted!</h3>
            <p className="text-gray-600 mb-2">
              Thank you for your interest in <span className="font-semibold">{recipe.name}</span>.
            </p>
            <p className="text-gray-600">
              Our team will send you the complete recipe within 24 hours to <span className="font-semibold">{formData.email}</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
