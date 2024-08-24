import React from 'react';
import Image from 'next/image';
import customersLogos from '@/../public/ag-grid-customer-logos.webp';

const CompanyLogos: React.FC = () => {
  return (
    <div className="overflow-hidden mt-1">
      <div className="flex animate-marquee whitespace-nowrap">
        <Image
          src={customersLogos}
          alt="Logos de empresas"
          className="h-16 mx-4"
        />
        <Image
          src={customersLogos}
          alt="Logos de empresas"
          className="h-16 mx-4"
        />
        <Image
          src={customersLogos}
          alt="Logos de empresas"
          className="h-16 mx-4"
        />
        <Image
          src={customersLogos}
          alt="Logos de empresas"
          className="h-16 mx-4"
        />
      </div>
    </div>
  );
};

export default CompanyLogos;
