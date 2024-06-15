import React from 'react';

import detailResepStyle from './detailresep.module.css';


//icons
import backbutton from '../image/detailresepcontent/icons/6f784b66d2134b473850c418d56964ab.svg';
import tutorialplay from '../image/detailresepcontent/icons/c03c83bf37e5805620d1e54cac0412fc.svg';
import icontoko from '../image/detailresepcontent/icons/660706a4087e9f007773d174d6e610a2.png';
import ratingicon from '../image/detailresepcontent/icons/eecdc7f8e9ffa8300476cd97e985c37f.svg';
import porsiIcon from '../image/detailresepcontent/icons/efb75d21c0c4f77d1ada94d703330968.png';
import waktuIcon from '../image/detailresepcontent/icons/9369e41c22c9504ff327a7fa6c2684e8.png';
import tipeIcon from '../image/detailresepcontent/icons/8f1e02004c25256b9083b42f0591d5f3.png';

//gambar makanan
import detailresepfoto from '../image/detailresepcontent/b43309b5fdf26346d5e80ad6f65f03a7.png';
import tutorialthumbnail from '../image/detailresepcontent/e6b4b75f41a48db17d590afa68e86b88.png';
import gambarlangkah1 from '../image/detailresepcontent/a91c155d94ed06db9bc809fe570eed44.png';
import gambarlangkah2 from '../image/detailresepcontent/49caa1244da578ff6ad5cd1ac6a6c41a.png';
import gambarlangkah3 from '../image/detailresepcontent/b5591b2ab1ac98e10bd61d7e136391ed.png';
import gambarlangkah4 from '../image/detailresepcontent/b9b60b7b635d7c7cb9143d7f56e384b8.png';
import gambarlangkah5 from '../image/detailresepcontent/7e111ee9f0859556a22473a5d83b95a3.png';
import gambarlangkah6 from '../image/detailresepcontent/dc24e9ae0e402a4a6483c3fefdacca25.png';
import resepcardimage1 from '../image/detailresepcontent/984bbc4daeff120f43bec9b5631c8e83.png';
import resepcardimage2 from '../image/detailresepcontent/16531b9b641b591e79dc81a7045ee22b.png';
import resepcardimage3 from '../image/detailresepcontent/b724979c4e6cf6ecc6bcf24591f37dbc.png';

//orang
import fotoauthor from '../image/detailresepcontent/5fdaaa953e4aeb520fe500420581a6fc.png';
import fotouser1 from '../image/detailresepcontent/da7492516112bbfacc0b0a5c16ef7096.png';
import fotouser2 from '../image/detailresepcontent/f89f496d6fa9daafb098e8fc7240182c.png';

function renderDetailresep(props) {
  return (
    <section className={detailResepStyle.detail_resep_content}>
      <div className={detailResepStyle.detail_resep_body}>
        <div className={detailResepStyle.detail_resep}>
          <div className={detailResepStyle.group}>
            <img
              className={detailResepStyle.backbutton}
              src={backbutton}
              alt="alt text"
            />

            <div className={detailResepStyle.flex_col}>
              <h2 className={detailResepStyle.detail_resep_tittle}>Detail Resep</h2>

              <div className={detailResepStyle.flex_row}>
                <img
                  className={detailResepStyle.detal_resep_foto}
                  src={detailresepfoto}
                  alt="alt text"
                />

                <div className={detailResepStyle.flex_col1}>
                  <div className={detailResepStyle.detail_resep_section_1}>
                    <img
                      className={detailResepStyle.tokoicon}
                      src={icontoko}
                      alt="alt text"
                    />
                    <h2 className={detailResepStyle.medium_title}>Seblak Bandung Kriuk Kriuk</h2>

                    <div className={detailResepStyle.content_box20}>
                      <img
                        className={detailResepStyle.authorfoto}
                        src={fotoauthor}
                        alt="alt text"
                      />
                      <h5 className={detailResepStyle.highlight5}>Mami Indah</h5>
                      <p className={detailResepStyle.paragraph1}>Diunggah 12 Menit yang Lalu</p>
                    </div>
                  </div>

                  <div className={detailResepStyle.detail_resep_section_2}>
                    <p className={detailResepStyle.paragraph11}>
                      Seblak adalah hidangan khas Indonesia yang pedas dan menggugah selera. Terdiri dari mie instan,
                      kerupuk, telur, bakso, daging ayam/sapi, dan sayuran seperti kubis dan wortel. Semua bahan dimasak
                      bersama dengan bumbu pedas seperti cabai, bawang putih, dan bawang merah. Disajikan panas-panas,
                      seblak memiliki cita rasa kaya dengan kombinasi pedas, gurih, dan manis dari kecap manis. Menjadi
                      favorit di warung makan pinggir jalan, seblak merupakan salah satu ikon kuliner Indonesia yang
                      wajib dicoba.
                    </p>
                  </div>

                  <div className={detailResepStyle.detail_resep_tag}>
                    <div className={detailResepStyle.waktu_tag}>
                      <div className={detailResepStyle.waktu_tag__rect} />
                      <img
                        className={detailResepStyle.waktu_tag__icon}
                        src={waktuIcon}
                        alt="alt text"
                      />
                      <div className={detailResepStyle.waktu_tag__text}>30 Menit</div>
                    </div>

                    <div className={detailResepStyle.porsi_tag}>
                      <div className={detailResepStyle.porsi_tag__rect} />
                      <img
                        className={detailResepStyle.porsi_tag__icon}
                        src={porsiIcon}
                        alt="alt text"
                      />
                      <div className={detailResepStyle.porsi_tag__text}>1 Porsi</div>
                    </div>

                    <div className={detailResepStyle.tipe_tag}>
                      <div className={detailResepStyle.tipe_tag__rect} />
                      <img
                        className={detailResepStyle.tipe_tag__icon}
                        src={tipeIcon}
                        alt="alt text"
                      />
                      <div className={detailResepStyle.tipe_tag__text}>Camilan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={detailResepStyle.flex_row1}>
            <div className={detailResepStyle.bahan_resep}>
              <h2 className={detailResepStyle.bahan_resep__medium_title}>Bahan - Bahan</h2>

              <div className={detailResepStyle.bahan_resep__box}>
                <p className={detailResepStyle.bahan_resep__paragraph}>
                  1 Genggam kerupuk bawang / udang
                  <br />1 Bonggol pokchoy
                  <br />
                  Bakso (Sesuai selera )<br />2  Sosis, potong-potong
                  <br />
                  Ceker Ayam (Sesuai selera)
                  <br />
                  Air Putih
                  <br />
                  Kaldu bubuk
                  <br />
                  1/4 Sendok teh merica bubuk
                  <br />1 Butir telur
                  <br />2 Ruas jari kencur
                  <br />4 Cabe merah keriting
                  <br />3 Cabe rawit ( Sesuai selera)
                  <br />4 Siung bawang merah
                  <br />3 Siung bawang putih
                  <br />1 Butir kemiri
                </p>
              </div>
            </div>

            <div className={detailResepStyle.keterangan_resep}>
              <h2 className={detailResepStyle.keterangan_resep__medium_title}>Keterangan Lainnya</h2>

              <div className={detailResepStyle.keterangan_resep__box}>
                <p className={detailResepStyle.keterangan_resep__paragraph}>
                  1 Genggam kerupuk bawang / udang
                  <br />1 Bonggol pokchoy
                  <br />
                  Bakso (Sesuai selera )<br />2  Sosis, potong-potong
                  <br />
                  Ceker Ayam (Sesuai selera)
                  <br />
                  Air Putih
                  <br />
                  Kaldu bubuk
                  <br />
                  1/4 Sendok teh merica bubuk
                  <br />1 Butir telur
                </p>
              </div>
            </div>

            <div className={detailResepStyle.tutorial_video}>
              <h2 className={detailResepStyle.tutorial_video__medium_title}>Tutorial Video</h2>

              <div
                className={detailResepStyle.tutorial_video__box}
                style={{ '--src': `url(${'/assets/c1f5ad63a2db2a59823cde91172c2c71.svg'})` }}>
                <div
                  className={detailResepStyle.tutorial_video__box1}
                  style={{ '--src': `url(${'/assets/dc829390f9715d0cb78571f68dd0847a.png'})` }}>
                  <img
                    className={detailResepStyle.tutorial_video__image}
                    src={tutorialthumbnail}
                    alt="alt text"
                  />

                  <div className={detailResepStyle.col}>
                    <img
                      className={detailResepStyle.tutorial_video__icon}
                      src={tutorialplay}
                      alt="alt text"
                    />
                    <h5 className={detailResepStyle.tutorial_video__highlight}>Premium untuk melihat video tutorial</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={detailResepStyle.cara_memasak}>
          <h2 className={detailResepStyle.cara_memasak__medium_title}>Cara Memasak</h2>

          <div className={detailResepStyle.cara_memasak__box}>
            <div className={detailResepStyle.col1}>
              <div className={detailResepStyle.row}>
                <div className={detailResepStyle.mini_card}>
                  <img
                    className={detailResepStyle.cara_memasak__image}
                    src={gambarlangkah1}
                    alt="alt text"
                  />
                  <p className={detailResepStyle.cara_memasak__paragraph}>
                    Rendam kerupuk bawang dengan air kira-kira 30 menit, laku tiriskan
                  </p>
                </div>

                <div className={detailResepStyle.mini_card1}>
                  <img
                    className={detailResepStyle.cara_memasak__image}
                    src={gambarlangkah2}
                    alt="alt text"
                  />
                  <p className={detailResepStyle.cara_memasak__paragraph1}>
                    Tumis bumbu halus sampai wangi, kemudian tambahkan air.
                  </p>
                </div>

                <div className={detailResepStyle.mini_card2}>
                  <img
                    className={detailResepStyle.cara_memasak__image}
                    src={gambarlangkah3}
                    alt="alt text"
                  />
                  <p className={detailResepStyle.cara_memasak__paragraph2}>
                    Setelah itu masukkan sosis, bakso, dan ceker. Lalu tambahkan kaldu bubuk dan merica.
                  </p>
                </div>
              </div>

              <div className={detailResepStyle.row1}>
                <div className={detailResepStyle.mini_card3}>
                  <img
                    className={detailResepStyle.cara_memasak__image}
                    src={gambarlangkah4}
                    alt="alt text"
                  />
                  <p className={detailResepStyle.cara_memasak__paragraph3}>
                    Lalu masukkan sayur pokchoy. lalu masukkan telur. aduk cepat. 
                  </p>
                </div>

                <div className={detailResepStyle.mini_card1}>
                  <img
                    className={detailResepStyle.cara_memasak__image}
                    src={gambarlangkah5}
                    alt="alt text"
                  />
                  <p className={detailResepStyle.cara_memasak__paragraph4}>
                    Aduk rata masak sampai sayur layu dan kerupuk lembek. koreksi rasa.. lalu matikan api.
                  </p>
                </div>

                <div className={detailResepStyle.mini_card4}>
                  <img
                    className={detailResepStyle.cara_memasak__image}
                    src={gambarlangkah6}
                    alt="alt text"
                  />
                  <p className={detailResepStyle.cara_memasak__paragraph5}>
                    Salin seblak ke dalam piring saji/mangkok
                    <br />
                    😁😁.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={detailResepStyle.ulasan_resep}>
          <div className={detailResepStyle.row2}>
            <div className={detailResepStyle.wrapper}>
              <h2 className={detailResepStyle.ulasan_resep__medium_title}>Ulasan Resep</h2>
              <h4 className={detailResepStyle.ulasan_resep__highlight_box}>
                <span className={detailResepStyle.ulasan_resep__highlight}>
                  <span className={detailResepStyle.ulasan_resep__highlight_span0}>4.2/5   </span>
                  <span className={detailResepStyle.ulasan_resep__highlight_span1}>(5 Ulasan)</span>
                </span>
              </h4>
              <img
                className={detailResepStyle.ulasan_resep_rating}
                src={ratingicon}
                alt="alt text"
              />
            </div>

            <h4 className={detailResepStyle.ulasan_resep__highlight1}>Lihat Semua Ulasan</h4>
          </div>

          <div className={detailResepStyle.ulasan_resep__box}>
            <div className={detailResepStyle.col2}>
              <div className={detailResepStyle.row1}>
                <div className={detailResepStyle.wrapper1}>
                  <img
                    className={detailResepStyle.ulasan_resep_foto1}
                    src={fotouser1}
                    alt="alt text"
                  />
                  <h2 className={detailResepStyle.ulasan_resep__medium_title1}>Shabih</h2>
                  <h5 className={detailResepStyle.ulasan_resep__highlight2}> 12 Juni 2024</h5>
                </div>

                <img
                  className={detailResepStyle.ulasan_resep_ratingcard1}
                  src={ratingicon}
                  alt="alt text"
                />
              </div>

              <h3 className={detailResepStyle.ulasan_resep__subtitle}>
                Sebagai pecinta masakan pedas, Seblak ini adalah pilihan yang sempurna. Saya mengikuti resep ini, dan
                hasilnya memenuhi ekspektasi saya. Tekstur yang beragam dari kerupuk, bakso, dan sosis benar-benar
                menambah kesan menyenangkan dalam setiap suapan. Sangat direkomendasikan untuk dicoba!
              </h3>
            </div>
          </div>

          <div className={detailResepStyle.ulasan_resep__box1}>
            <div className={detailResepStyle.col3}>
              <div className={detailResepStyle.row3}>
                <div className={detailResepStyle.wrapper2 }>
                  <img
                    className={detailResepStyle.ulasan_resep_foto2}
                    src={fotouser2}
                    alt="alt text"
                  />
                  <h2 className={detailResepStyle.ulasan_resep__medium_title2}>Anisa</h2>
                  <h5 className={detailResepStyle.ulasan_resep__highlight3}>9 Juni 2024</h5>
                </div>

                <img
                  className={detailResepStyle.ulasan_resep_ratingcard1}
                  src={ratingicon}
                  alt="alt text"
                />
              </div>

              <h3 className={detailResepStyle.ulasan_resep__subtitle1}>
                Resepnya mudah diikuti dan hasilnya benar-benar menggugah selera. Tekstur kriuk pada seblaknya sempurna
                dan rasa rempahnya sangat terasa. Saya suka sekali!
              </h3>
            </div>
          </div>
        </div>

        <div className={detailResepStyle.rekomendasi_resep}>
          <h2 className={detailResepStyle.rekomendasi_resep__medium_title}>Rekomendasi Resep</h2>

          <div className={detailResepStyle.row4}>
            <div className={detailResepStyle.wrapper3}>
              <div className={detailResepStyle.rekomendasi_resep__rect} />
              <img
                className={detailResepStyle.rekomendasi_resepcard_image}
                src={resepcardimage1}
                alt="alt text"
              />

              <div className={detailResepStyle.wrapper4}>
                <div className={detailResepStyle.wrapper5}>
                  <div className={detailResepStyle.rekomendasi_resep__rect1} />
                  <img
                    className={detailResepStyle.rekomendasi_porsi_icon}
                    src={porsiIcon}
                    alt="alt text"
                  />
                  <div className={detailResepStyle.rekomendasi_resep__info}>2 Porsi</div>
                </div>

                <div className={detailResepStyle.wrapper6}>
                  <div className={detailResepStyle.rekomendasi_resep__rect2} />
                  <img
                    className={detailResepStyle.rekomendasi_waktu_icon}
                    src={waktuIcon}
                    alt="alt text"
                  />
                  <div className={detailResepStyle.rekomendasi_resep__info1}>45 Menit</div>
                </div>

                <div className={detailResepStyle.rekomendasi_resep__text}>Bakso Malang</div>
                <div className={detailResepStyle.rekomendasi_resep__info2}>Publisher : Wonderful Indonesiai</div>
              </div>
            </div>

            <div className={detailResepStyle.wrapper3}>
              <div className={detailResepStyle.rekomendasi_resep__rect} />
              <img
                className={detailResepStyle.rekomendasi_resepcard_image}
                src={resepcardimage2}
                alt="alt text"
              />

              <div className={detailResepStyle.wrapper4}>
                <div className={detailResepStyle.wrapper5}>
                  <div className={detailResepStyle.rekomendasi_resep__rect1} />
                  <img
                    className={detailResepStyle.rekomendasi_porsi_icon}
                    src={porsiIcon}
                    alt="alt text"
                  />
                  <div className={detailResepStyle.rekomendasi_resep__info3}>1 Porsi</div>
                </div>

                <div className={detailResepStyle.wrapper6}>
                  <div className={detailResepStyle.rekomendasi_resep__rect2} />
                  <img
                    className={detailResepStyle.rekomendasi_waktu_icon}
                    src={waktuIcon}
                    alt="alt text"
                  />
                  <div className={detailResepStyle.rekomendasi_resep__info4}>1 Jam</div>
                </div>

                <div className={detailResepStyle.rekomendasi_resep__text1}>Tengkleng</div>
                <div className={detailResepStyle.rekomendasi_resep__info5}>Publisher : Wonderful  Indonesia</div>
              </div>
            </div>

            <div className={detailResepStyle.wrapper3}>
              <div className={detailResepStyle.rekomendasi_resep__rect} />
              <img
                className={detailResepStyle.rekomendasi_resepcard_image}
                src={resepcardimage3}
                alt="alt text"
              />

              <div className={detailResepStyle.wrapper4}>
                <div className={detailResepStyle.wrapper5}>
                  <div className={detailResepStyle.rekomendasi_resep__rect1} />
                  <img
                    className={detailResepStyle.rekomendasi_porsi_icon}
                    src={porsiIcon}
                    alt="alt text"
                  />
                  <div className={detailResepStyle.rekomendasi_resep__info3}>1 Porsi</div>
                </div>

                <div className={detailResepStyle.wrapper6}>
                  <div className={detailResepStyle.rekomendasi_resep__rect2} />
                  <img
                    className={detailResepStyle.rekomendasi_waktu_icon}
                    src={waktuIcon}
                    alt="alt text"
                  />
                  <div className={detailResepStyle.rekomendasi_resep__info6}>15 Menit</div>
                </div>

                <div className={detailResepStyle.rekomendasi_resep__text2}>Nasi Goreng</div>
                <div className={detailResepStyle.rekomendasi_resep__info7}>Publisher : Wonderful Indonesia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderDetailresep;
