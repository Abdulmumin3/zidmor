import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-20 px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Building World-Class Sports Facilities
            </h1>
            <p className="mb-6">
              Zidmor Global Services – Lagos, Nigeria. CAC: 2726758
            </p>
            <a
  href="https://wa.me/2348121710812"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-yellow-400 text-blue-900 px-6 py-3 font-bold rounded hover:bg-yellow-500 transition">
    Get a Quote
  </button>
</a>

          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src="/construction-hero.jpg" alt="Sports Facility Construction" width={500} height={400} className="rounded shadow-lg" />
          </div>
        </div>
      </header>
      <section id="about" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center py-20 px-6">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-3xl font-bold mb-4">About Zidmor Global Services</h2>
          <p>Expert in Sports Facilities Construction, delivering high-quality projects across Nigeria and beyond. Our mission is to create safe, innovative, and sustainable sports environments.</p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image src="/about-image.jpg" alt="Construction Team" width={500} height={400} className="rounded shadow-lg" />
        </div>
      </section>
      <section id="services" className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Sports Complex Construction" description="We build top-quality sports complexes tailored to your needs." />
            <ServiceCard title="Stadium Renovation" description="Upgrade and renovate existing stadiums with modern designs." />
            <ServiceCard title="Facility Maintenance & Upgrades" description="Keep your sports facilities in optimal condition with our services." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}