import React from 'react';
import './Home.css';
import gadis from '../gadis.jpeg';

const Home = () => {
  return (
    <section className="profile">
      {/* Gunakan variabel fotogadis yang sudah diimport */}
      <img src={gadis} alt="Gadis Arivia" className="profile-image" />
      <div className="profile-info">
        <h2>Saya, Gadis Arivia</h2>
        <p>Siswi kelas 12 di SMK MUHAMMADIYAH 04 SUKOREJO, dari jurusan Rekayasa Perangkat Lunak (RPL) atau Pengembangan Perangkat Lunak dan Gim (PPLG).</p>
        <p>Saya sedikit memahami tentang HTML dan CSS, dengan dasar pengetahuan JavaScript. Saya memilih jurusan RPL, karena berkeinginan untuk memperdalam keahlian dalam pengembangan web dan belajar lebih lanjut tentang pemrograman.</p>
      </div>
    </section>
  );
};

export default Home;
