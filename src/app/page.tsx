"use client"
import ContentTextbox from '@/components/textbox/ContentTextbox';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import { useState } from 'react';
import { SlideButton } from '@/components/buttons/SlideButton'; 

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <section id="hero" className="bg-[#F8F9FA] py-[80px] text-center">
        <ContentTextbox 
          title={<h1 className="text-5xl font-bold">Welcome to Our Simple Brand</h1>} 
          description={<p className="text-xl">Delivering clarity with our reliable services.</p>}
          className="my-8"
        >
          <SlideButton 
            text="Get Started" 
            onClick={() => {}} 
            className="bg-blue-500 text-white rounded p-2"
            bgColor="blue"
            hoverBgColor="darkblue"
            textColor="white"
            hoverTextColor="lightgrey"
          />
        </ContentTextbox>
      </section>
      <section id="about" className="bg-white py-[80px]">
        <ContentTextbox
          title={<h2 className="text-3xl">About Us</h2>}
          description={<p>We strive to provide top quality services with a clear focus on customer satisfaction.</p>}
          className="my-8"
        />
      </section>
      <section id="features" className="bg-white py-[80px]">
        <SimpleStepsBento 
          items={[
            { title: 'Feature 1', description: 'Clear and effective service communication.' },
            { title: 'Feature 2', description: 'Fast and reliable response times.' },
            { title: 'Feature 3', description: 'Dedicated support when you need it most.' },
          ]}
          className="grid gap-5"
        />
      </section>
      <section id="testimonials" className="bg-white py-[80px]">
        <ContentTextbox
          title={<h2 className="text-3xl">What Our Clients Say</h2>}
          description={<>
            <blockquote className="italic">“They brought clarity to our project!”</blockquote>
            <p className="text-gray-500">– Client A</p>
            <blockquote className="italic">“Confident and easy to work with!”</blockquote>
            <p className="text-gray-500">– Client B</p>
          </>}
          className="my-8"
        />
      </section>
      <section id="contact" className="bg-white py-[80px]">
        <ContentTextbox
          title={<h2 className="text-3xl">Contact Us</h2>}
          description={<p>We'd love to hear from you!</p>}
          className="my-8"
        />
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input name="name" placeholder="Your Name" onChange={handleInputChange} className="p-2 border rounded" />
          <input name="email" type="email" placeholder="Your Email" onChange={handleInputChange} className="p-2 border rounded" />
          <textarea name="message" placeholder="Your Message" onChange={handleInputChange} className="p-2 border rounded"></textarea>
          <SlideButton 
            text="Send Message" 
            onClick={() => {}} 
            className="bg-blue-500 text-white rounded p-2"
            bgColor="blue"
            hoverBgColor="darkblue"
            textColor="white"
            hoverTextColor="lightgrey"
          />
        </form>
      </section>
    </div>
  );
}