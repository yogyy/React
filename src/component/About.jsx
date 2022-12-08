import React from 'react';

function About() {
  return (
    <div className='bg-gray-700 h-screen grid text-center px-5 text-yellow-300'>
      <h1 className='text-3xl justify-center items-center flex'>
        abou<span className='overline text-black font-bold'>t me</span>
      </h1>
      <p className='font-mono'>
        <span className='underline text-2xl font-bold'>Saya</span> adalah
        seorang manusia biasa yang tinggal di kota kecil di Jawa Tengah. Saya
        lahir dan dibesarkan di kota ini, dan saya menghabiskan sebagian besar
        waktu saya di sini bersama keluarga dan teman-teman saya. Saya seorang
        mahasiswa di salah satu universitas di kota ini, dan saya belajar di
        jurusan teknik elektro. Saya suka membaca buku, menonton film, dan
        bermain game di waktu luang saya. Saya juga suka bepergian dan
        menjelajahi tempat-tempat baru. Saya adalah seorang manusia biasa yang
        ingin menjalani hidup dengan baik dan bahagia.
      </p>
    </div>
  );
}

export default About;
