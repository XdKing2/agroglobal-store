import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🐔',
      title: 'Quality Poultry',
      description: 'Healthy chickens and fresh eggs from our farm'
    },
    {
      icon: '📖',
      title: 'Feed Recipes',
      description: 'Save 35-40% with our proven homemade formulas'
    },
    {
      icon: '⚙️',
      title: 'Feed Machines',
      description: 'Affordable equipment for making your own feed'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
