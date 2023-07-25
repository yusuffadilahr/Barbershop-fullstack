import React from 'react';

const About = () => {

  const fontStyle = {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: '30px',
  };
  return (
    <section className="section">
      <div className="container">

        <div className="columns is-mobile">
          {/* Foto 1 */}
          <div className="column is-4">
            <img src= "https://hardrockfm.com/wp-content/uploads/2017/08/Barbershop.jpg" alt="Photo 1" className="image" />
          </div>

          {/* Foto 2 */}
          <div className="column is-4">
            <img src="https://2.bp.blogspot.com/-PxcEPGF9t6A/WBD5Vc-MkLI/AAAAAAAAAiQ/jmREdJ7jneMZGqDqZpOukmRQeDG4fqK8QCLcB/s1600/slide1.jpg" alt="Photo 2" className="image" />
          </div>

          {/* Foto 3 */}
          <div className="column is-4">
            <img src="https://www.mldspot.com/storage/generated/June2021/old-school-barbershops.jpeg" alt="Photo 3" className="image" />
          </div>
        </div>

        <div className="columns is-mobile">
          {/* Foto 4 */}
          <div className="column is-4">
            <img src="https://asset-2.tstatic.net/mataram/foto/bank/images/ilustrasi-barbershop.jpg" alt="Photo 4" className="image" />
          </div>

          {/* Foto 5 */}
          <div className="column is-4">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/rk6bkbPB9uQ-N4HnSMnnBg/348s.jpg" alt="Photo 5" className="image" />
          </div>

          {/* Foto 6 */}
          <div className="column is-4">
            <img src="https://shoppinginromania.ro/sites/default/files/2018-01/Barber%20shop1_0.jpg" alt="Photo 6" className="image" />
          </div>
        </div>

        <h1 className="title" style={fontStyle}>Tentang Kami</h1>
        <p className="subtitle">Welcome to Toto Haircut website!</p>

        {/* Konten teks lainnya */}
        <div className="content has-text-justified">
          <p>
            Kami adalah salon pangkas rambut yang berpengalaman dan profesional. Layanan kami
            mencakup potongan rambut untuk pria, wanita, dan anak-anak. Dengan menggunakan
            teknik-teknik terbaru dan peralatan modern, kami akan menciptakan potongan rambut
            yang sesuai dengan gaya dan keinginan Anda.
          </p>
          <p>
            Tim kami terdiri dari para ahli pangkas rambut yang senantiasa mengikuti tren dan
            perkembangan terkini dalam dunia mode rambut. Kami selalu berusaha memberikan
            pelayanan terbaik dan hasil potongan rambut yang memuaskan bagi setiap pelanggan
            kami.
          </p>
          <p>
            Selain pangkas rambut, kami juga menyediakan berbagai layanan lain seperti
            pewarnaan rambut, hair spa, dan perawatan rambut. Kunjungi salon kami sekarang dan
            rasakan pengalaman pangkas rambut terbaik dari kami!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;