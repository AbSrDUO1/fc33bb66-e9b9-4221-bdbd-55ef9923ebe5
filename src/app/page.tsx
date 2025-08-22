"use client";
import Image from 'next/image';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section id="hero" className="flex flex-col items-center justify-center bg-gradient-to-r from-[#E6F0FF] to-[#FFFFFF] h-screen">
        <ContentTextbox
          title={<h1 className='text-5xl font-bold'>Welcome to Our Service</h1>}
          description={<p className='text-lg'>We are committed to delivering value on one page.</p>}
          className="mb-8"
        />
        <Image src="/images/logo.svg" alt="Company Logo" width={150} height={150} />
      </section>
      <section id="about" className="bg-white py-24">
        <ContentTextbox
          title={<h2 className='text-4xl font-semibold'>About Us</h2>}
          description={<p className='text-lg'>Our mission is to inspire trust and clarity.</p>}
          className="mb-8"
        />
      </section>
      <section id="features" className="bg-soft-noise">
        <ContentTextbox
          title={<h2 className='text-4xl font-semibold'>Features</h2>}
          description={<p className='text-lg'>Explore our remarkable features!</p>}
          className="mb-8"
        />
      </section>
      <section id="terms" className="bg-[#F7F7F7] py-24">
        <ContentTextbox
          title={<h2 className='text-4xl font-semibold'>Terms Overview</h2>}
          description={<p className='text-lg'>A brief overview of our terms.</p>}
          className="mb-8"
        />
      </section>
      <section id="privacy" className="bg-white py-24">
        <ContentTextbox
          title={<h2 className='text-4xl font-semibold'>Privacy Policy</h2>}
          description={<p className='text-lg'>Details about our data handling practices.</p>}
          className="mb-8"
        />
      </section>
      <section id="contact" className="bg-[#F7FAFC] py-24">
        <ContentTextbox
          title={<h2 className='text-4xl font-semibold'>Contact Us</h2>}
          description={<p className='text-lg'>We would love to hear from you!</p>}
          className="mb-8"
        />
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="mb-4 p-2 border" />
          <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="mb-4 p-2 border" />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} className="mb-4 p-2 border" />
          <button type="submit" className="bg-blue-600 text-white p-2">Send</button>
        </form>
      </section>
    </>
  );
}