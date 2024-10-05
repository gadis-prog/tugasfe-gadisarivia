import React from 'react';
import './SkilldanPengalaman.css';

const SkilldanPengalaman = () => {
  return (
    <div className="skill-pengalaman-container">
      <table className="title-table">
        <tbody>
          <tr>
            <td>
              <h2>Skill & Pengalaman</h2>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="content">
        <div className="skill-section">
          <h3>Skill</h3>
          <p>Skill yang saya kuasai saat ini adalah :</p>
          <ul>
            <li>1. HTML</li>
            <div className="progress-bar"><div className="progress html"></div></div>
            <li>2. CSS</li>
            <div className="progress-bar"><div className="progress css"></div></div>
            <li>3. JavaScript</li>
            <div className="progress-bar"><div className="progress js"></div></div>
          </ul>
        </div>
        <div className="pengalaman-section">
          <h3>Pengalaman</h3>
          <ul>
            <li>Magang di sekolah</li>
            <li>Freelance di Nusantech</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkilldanPengalaman;
