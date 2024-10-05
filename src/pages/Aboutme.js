import React from 'react';
import './Aboutme.css';

function Aboutme() {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <div className="info-box">
        <table>
          <caption>Biodata</caption>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>Gadis Arivia</td>
            </tr>
            <tr>
              <td>Umur</td>
              <td>16</td>
            </tr>
            <tr>
              <td>Sekolah</td>
              <td>SMK Muhammadiyah 04 Sukorejo</td>
            </tr>
            <tr>
              <td>Jurusan</td>
              <td>Rekayasa Perangkat Lunak (RPL)</td>
            </tr>
            <tr>
              <td>Minat</td>
              <td>Pengembangan Web & Pemrograman</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Riwayat Pendidikan</caption>
          <tbody>
          <tr>
              <td>TK</td>
              <td>TK Tunas Bangsa  (2013 - 2015)</td>
            </tr>
            <tr>
              <td>SMP</td>
              <td>SDn 02 Ngadiwarno  (2015 - 2020)</td>
            </tr>
            <tr>
              <td>SMP</td>
              <td>MTS 05 Darul Arqom  (2020 - 2022)</td>
            </tr>
            <tr>
              <td>SMA</td>
              <td>SMK Muhammadiyah 04 Sukorejo  (2022 - Sekarang)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Aboutme;
