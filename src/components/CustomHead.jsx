// src/components/CustomHead.js
import Head from 'next/head';

export function CustomHead() {
  return (
    <Head>
      <meta property="og:title" content="Topher Ludlow - Software Developer" />
      <meta property="og:description" content="I am a software developer with a passion for learning and creating, using my background in communications, management, and a love of technology to solve problems and build applications." />
      <meta property="og:image" content="https://topherludlow.com/images/portrait.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topherludlow.com" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Topher Ludlow - Software Developer" />
      <meta name="twitter:description" content="I am a software developer with a passion for learning and creating, using my background in communications, management, and a love of technology to solve problems and build applications." />
      <meta name="twitter:image" content="https://topherludlow.com/images/portrait.jpg" />
    </Head>
  );
}