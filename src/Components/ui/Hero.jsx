import React from 'react';
import Button from './Button';

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage,
  ctaText = 'Reserve Table',
  ctaLink = '/reservation',
  showSecondaryCta = false,
  secondaryCtaText = 'View Menu',
  secondaryCtaLink = '/menu'
}) => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              <a href={ctaLink}>{ctaText}</a>
            </Button>
            {showSecondaryCta && (
              <Button variant="secondary" size="lg">
                <a href={secondaryCtaLink}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
