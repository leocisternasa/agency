'use client';

import React from 'react';
import Image from 'next/image';
import docMoviLogo from '../../public/DocMoviAi_logo.png';

function DocMoviAssistant() {
  return (
    <div>
      <Image
        onClick={() => (window as any).botpress.open()}
        src={docMoviLogo}
        alt="DocMovi"
        width={70}
        height={70}
        className="cursor-pointer hover:opacity-70 hover:scale-105 transition-all duration-300 rounded-full border-2 border-pink-500 fixed bottom-2 left-2"
      />
    </div>
  );
}

export default DocMoviAssistant;
