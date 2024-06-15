import React from 'react';

import contentarticleStyle from './contentarticle.module.css';

import backButton from '../image/articlecontent/6f784b66d2134b473850c418d56964ab.svg';
import commentIcon from '../image/articlecontent/5b5aabc59ddf484daf60fed86b32911c.png';
import sendIcon from '../image/articlecontent/77c71a45fa00e377fc2093742ca4393d.svg';
import userPfp from '../image/articlecontent/9c40362354ce6e0ab6e1695deb428786.svg';
import viewIcon from '../image/articlecontent/8e48a8ea2f5c90841cc20abaa97d8b47.png';
import viewCounter from '../image/articlecontent/42f0380be4d20907ffbfb86e34298fa5.png';
import likeIcon from '../image/articlecontent/dfa667e190f2b0ea53d41e52e63cb342.png';
import likeCounter from '../image/articlecontent/b7205c18fde752ffccacac1417ad5e66.png';
import commentcountIcon from '../image/articlecontent/8b9dfeb9af46af2c79168a5e0548e140.png';
import commentCounter from '../image/articlecontent/be10d3c506fda9a0cd8f74c8f4d7e4cd.png';


import gambarLangkah1 from '../image/articlecontent/92552820e8d94ca2679a541c3f6e8af7.png';
import gambarLangkah2 from '../image/articlecontent/6ae851d4fa4cb8c9ff8e3f58da59d09f.png';
import gambarLangkah3 from '../image/articlecontent/7daabac43efa1b814f8017c0c182784c.png';
import gambarLangkah4 from '../image/articlecontent/01144fcb994d85fe2ebe0c80ce4dae51.png';
import gambarLangkah5 from '../image/articlecontent/9c09bac5326dbcc69b00b69f556b4a4c.png';
import gambarLangkah6 from '../image/articlecontent/189b6e65e0fb3762148c113d449ef690.png';

import smallArticleimage1 from '../image/articlecontent/80a3bc3c0b1cbcbf65230a41929bdf5c.png';
import smallArticleimage2 from '../image/articlecontent/31d7e9c6b9238bd62450e4d2eba21c27.png';
import smallArticleimage3 from '../image/articlecontent/3de7e1e24ebc6f0f66a8baa11b477310.png';
import contentArticleCover from'../image/articlecontent/629d98630b9803424773aca55753ec51.svg';

function renderSection2(props) {
  return (
    <section className={contentarticleStyle.section2}>
      <img className={contentarticleStyle.image1} src={backButton} alt="alt text" />

      <div className={contentarticleStyle.flex_col}>
        <div className={contentarticleStyle.flex_col1}>
          <h2 className={contentarticleStyle.articlejudul}>
            Tips Nastar, Kue Kering Isi Nanas, Sajian Hari Raya yang Anti Pecah dan Lumer di Mulut!
          </h2>
          <h4 className={contentarticleStyle.articledetail_box}>
            <span className={contentarticleStyle.articledetail}>
              <span className={contentarticleStyle.articledetail_span0}>
                Publisher : Dapur Mama Rika
                
                <br />
              </span>
              <span className={contentarticleStyle.articledetail_span1}>Kamis, 17 April 2024 14.00 WIB</span>
            </span>
          </h4>
        </div>

        <div className={contentarticleStyle.engagement}>
          <div className={contentarticleStyle.viewcount}>
            <div className={contentarticleStyle.rect} />
            <img
              className={contentarticleStyle.viewicon}
              src={viewIcon}
              alt="alt text"
            />
            <img
              className={contentarticleStyle.viewcounter}
              src={viewCounter}
              alt="alt text"
            />
          </div>

          <div className={contentarticleStyle.likecount}>
            <div className={contentarticleStyle.rect} />
            <img
              className={contentarticleStyle.likeicon}
              src={likeIcon}
              alt="alt text"
            />
            <img
              className={contentarticleStyle.likecounter}
              src={likeCounter}
              alt="alt text"
            />
          </div>

          <div className={contentarticleStyle.commentcount}>
            <div className={contentarticleStyle.rect1} />
            <img
              className={contentarticleStyle.commenticon}
              src={commentcountIcon}
              alt="alt text"
            />
            <img
              className={contentarticleStyle.commentcounter}
              src={commentCounter}
              alt="alt text"
            />
          </div>
        </div>

        <p className={contentarticleStyle.deskripsi}>
          {' '}
                 Menjelang Hari Raya, kue nastar menjadi salah satu hidangan yang tak boleh absen di meja makan. Rasanya
          yang manis dengan taburan gula halus di atasnya membuatnya menjadi favorit banyak orang. Namun, seringkali
          kita mengalami masalah saat membuat kue nastar ini, terutama pada saat pengisian dengan selai nanas, yang bisa
          membuat kue kering ini pecah dan sulit untuk diproses. Tapi tak perlu khawatir, berikut beberapa tips agar kue
          nastar Anda tetap utuh dan lezat:
        </p>

        <div className={contentarticleStyle.flex_col2}>
          <h2 className={contentarticleStyle.juduldeskripsi}>Pastikan Tekstur Adonan yang Tepat</h2>
          <p className={contentarticleStyle.deskripsi1}>
            {' '}
                   Untuk membuat nastar yang kenyal namun tetap mudah diproses, pastikan adonan kue Anda tidak terlalu
            lembek atau terlalu keras. Konsistensi adonan yang tepat akan membuatnya mudah untuk dibentuk tanpa perlu
            menambahkan terlalu banyak tepung.
          </p>
          <img
            className={contentarticleStyle.gambarlangkah1}
            src={gambarLangkah1}
            alt="alt text"
          />
        </div>

        <div className={contentarticleStyle.flex_col3}>
          <h2 className={contentarticleStyle.juduldeskripsi1}>Dinginkan Adonan</h2>
          <p className={contentarticleStyle.deskripsi2}>
            Sebelum mulai mengisi adonan kue dengan selai nanas, pastikan adonan sudah cukup dingin. Adonan yang dingin
            akan lebih mudah untuk diolah dan juga membantu mencegah kue pecah saat proses pembentukan.
          </p>
          <img
            className={contentarticleStyle.gambarlangkah2}
            src={gambarLangkah2}
            alt="alt text"
          />
        </div>

        <div className={contentarticleStyle.flex_col3}>
          <h2 className={contentarticleStyle.juduldeskripsi1}>Gunakan Selai Nanas yang Tepat</h2>
          <p className={contentarticleStyle.deskripsi3}>
            Pilih selai nanas yang memiliki konsistensi yang cukup kental. Selai nanas yang terlalu encer dapat membuat
            adonan kue menjadi basah dan sulit untuk dibentuk. Pastikan untuk menggunakan selai yang kualitasnya
            terjamin dan memiliki rasa yang pas untuk kue nastar Anda.
          </p>
          <img
            className={contentarticleStyle.gambarlangkah3}
            src={gambarLangkah3}
            alt="alt text"
          />
        </div>

        <div className={contentarticleStyle.flex_col2}>
          <h2 className={contentarticleStyle.juduldeskripsi}>Jangan Terlalu Banyak Mengisi</h2>
          <p className={contentarticleStyle.deskripsi1}>
            Saat mengisi adonan kue dengan selai nanas, pastikan untuk tidak terlalu banyak mengisinya. Terlalu banyak
            isi bisa membuat kue kering menjadi terlalu berat dan mudah pecah saat diproses.
          </p>
          <img
            className={contentarticleStyle.gambarlangkah4}
            src={gambarLangkah4}
            alt="alt text"
          />
        </div>

        <div className={contentarticleStyle.flex_col2}>
          <h2 className={contentarticleStyle.juduldeskripsi2}>Beri Jarak yang Cukup</h2>
          <p className={contentarticleStyle.deskripsi4}>
            Ketika meletakkan nastar di atas loyang, pastikan untuk memberikan jarak yang cukup antara satu nastar
            dengan yang lain. Hal ini akan mencegah kue-kue tersebut saling menempel saat dipanggang dan meminimalkan
            risiko pecah.
          </p>
          <img
            className={contentarticleStyle.gambarlangkah5}
            src={gambarLangkah5}
            alt="alt text"
          />
        </div>

        <div className={contentarticleStyle.flex_col3}>
          <h2 className={contentarticleStyle.juduldeskripsi1}>Panggang dengan Suhu yang Tepat</h2>
          <p className={contentarticleStyle.deskripsi2}>
            Panggang kue nastar pada suhu yang sesuai, biasanya sekitar 160-170 derajat Celsius. Panggangan yang terlalu
            panas dapat membuat kue cepat gosong di bagian bawahnya, sementara bagian atasnya masih mentah.
          </p>
          <img
            className={contentarticleStyle.gambarlangkah6}
            src={gambarLangkah6}
            alt="alt text"
          />
          <p className={contentarticleStyle.deskripsi5}>
            Dengan mengikuti tips-tips di atas, Anda dapat membuat kue nastar yang lezat dan sempurna untuk disajikan di
            Hari Raya. Selamat mencoba dan selamat menyambut Hari Raya!
          </p>
        </div>

        <div className={contentarticleStyle.flex_col4}>
          <div className={contentarticleStyle.commentingbox}>
            <div className={contentarticleStyle.flex_row}>
              <img
                className={contentarticleStyle.image8}
                src={commentIcon}
                alt="alt text"
              />
              <h3 className={contentarticleStyle.subtitle}>Komentar</h3>
            </div>

            <div className={contentarticleStyle.flex_row1}>
              <img
                className={contentarticleStyle.image9}
                src={userPfp}
                alt="alt text"
              />

              <div className={contentarticleStyle.content_box3}>
                <div className={contentarticleStyle.flex_row2}>
                  <h5 className={contentarticleStyle.highlight1}>Tuliskan Komentarmu di sini!</h5>
                  <img
                    className={contentarticleStyle.image10}
                    src={sendIcon}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>
          </div>

          <h2 className={contentarticleStyle.medium_title}>Artikel Lainnya</h2>

          <div className={contentarticleStyle.flex_row3}>
            <div className={contentarticleStyle.content_box4}>
              <img
                className={contentarticleStyle.cover}
                src={contentArticleCover}
                alt="alt text"
              />
              <img
                className={contentarticleStyle.image}
                src={smallArticleimage1}
                alt="alt text"
              />
              <p className={contentarticleStyle.deskripsikecil}>
                mencoba jajanan yang terkenal dari Semarang, yakni lumpia.
                <br />
                Publisher : Wonderful Indonesia
              </p>
            </div>

            <div className={contentarticleStyle.content_box4}>
              <img
                className={contentarticleStyle.cover}
                src={contentArticleCover}
                alt="alt text"
              />
              <img
                className={contentarticleStyle.image}
                src={smallArticleimage2}
                alt="alt text"
              />
              <p className={contentarticleStyle.deskripsikecil}>
                Sup daging kuah kental berwarna hitam  makanan khas berasal dari Jawa Timur.
                <br />
                Publisher : Wonderful Indonesia
              </p>
            </div>

            <div className={contentarticleStyle.content_box4}>
              <img
                className={contentarticleStyle.cover}
                src={contentArticleCover}
                alt="alt text"
              />
              <img
                className={contentarticleStyle.image}
                src={smallArticleimage3}
                alt="alt text"
              />
              <p className={contentarticleStyle.deskripsikecil}>
                Kalau berkunjung ke Jogja, rasanya kurang lengkap jika belum makan gudeg .
                <br />
                Publisher : Wonderful Indonesia
              </p>
            </div>
          </div>

          <div
            className={contentarticleStyle.content_box7}
            style={{ '--src': `url(${'/assets/aaa2d8ebc37e207584453c0b39a4e0b4.svg'})` }}>
            <div className={contentarticleStyle.text}>Artikel Lainnya</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection2;
