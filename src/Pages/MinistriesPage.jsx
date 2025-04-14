import React from 'react'
import Navbar from "../components/NavBar";
import GetInvolved from '../components/GetInvolved';
import SubContent from '../components/SubContent';
import GiveToCci from "../components/GiveToCci";
import Footer from "../components/Footer";

function MinistriesPage() {
  return (
    <main className='pt-7'>
      <Navbar/>
      <GetInvolved/>
      <SubContent/>
      <GiveToCci/>
      <Footer />
    </main>
  );
}

export default MinistriesPage