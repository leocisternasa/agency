'use client';

import React from 'react';
import Image from 'next/image';
import docMoviLogo from '../../public/DocMoviAi_logo.png';
import Script from 'next/script';

function DocMoviAssistant() {
  return (
    <div>
      <Script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></Script>
      <Script src="https://mediafiles.botpress.cloud/bf12f5c9-d9f6-4b23-a11c-6050f17fe9b5/webchat/v2.1/config.js"></Script>
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
