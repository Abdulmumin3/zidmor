import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-6 flex justify-between">
      <div className="font-bold text-xl">Zidmor Global Services</div>
      <div className="space-x-6">
        <Link href="#about">About</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}