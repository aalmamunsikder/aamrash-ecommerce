import React from 'react';

const Stats = () => {
  const stats = [
    { value: '৫+', label: 'বছরের অভিজ্ঞতা' },
    { value: '৮+', label: 'আমের প্রকার' },
    { value: '২৫+', label: 'শাখা দেশে' },
    { value: '৯৯.৭%', label: 'সন্তুষ্ট গ্রাহক' }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;