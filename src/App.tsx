/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import InstagramFeed from './components/InstagramFeed';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22211F] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <Hero onOpenReservation={() => setReservationModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Menu Section */}
        <Menu />

        {/* 4. Gallery Section */}
        <Gallery />

        {/* 5. Instagram Section */}
        <InstagramFeed />

        {/* 6. Location Section */}
        <LocationSection />

        {/* 7. Contact Section */}
        <ContactSection onOpenReservation={() => setReservationModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky 1-Tap Quick Action Bar */}
      <MobileQuickBar onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Table Reservation & Inquiry Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />
    </div>
  );
}
