import React from 'react';

import userProfileStyle from './userprofile.module.css';
import fotoProfil from '../image/userprofile/fotoprofil.png';
import fotoProfilMedium from '../image/userprofile/0cd4757a4c143b312808b24c86624ddf.png';
import fotoProfilSmall from '../image/userprofile/392f18daf1d335de217b71ec75e1e20c.png';

// icons
import clockIcon from '../image/userprofile/icons/8b64656580820e1cd7317384f55ba9f5.png';
import ratingIcon4s from '../image/userprofile/icons/8df3f8ca220a9dbabe6991db77e550f7.svg';
import tokoSmallIcon from '../image/userprofile/icons/164bcc75cb40298c2c29f2d4cf2edef5.png';
import kontakSmallIcon from '../image/userprofile/icons/ca1b8e9c06f4cc304efcc354b95cf7f0.png';
import emailSmallIcon from '../image/userprofile/icons/cca10451b5692cc7cf8ae1dfe45e9d95.png';
import iconGatau from '../image/userprofile/icons/cf38cafb3303724a63388b7ebed3ea8b.svg';
import favoritSmallIcon from '../image/userprofile/icons/6a542e40df2995e582a9477da0ae08ca.svg';
import likeSmallIcon from '../image/userprofile/icons/f6a86e3b7a2e09a6bdc6aa74eec1f6cc.svg';
import likeSmallIcon2 from '../image/userprofile/icons/dfa667e190f2b0ea53d41e52e63cb342.png';
import viewSmallIcon from '../image/userprofile/icons/a364d1f6d57bf556cc908d60cb647aaa.png';
import commentSmallIcon from '../image/userprofile/icons/20948d03e3c055cd0c2d12826552ff91.png';
import alamatSmallIcon from '../image/userprofile/icons/2cefbca01d904c9144a99e33e6e23cf8.svg';
import whatsappicon from '../image/userprofile/icons/6ff8bad004fb069e3612cd79ad1a6df5.svg';
import waktuBukaicon from '../image/userprofile/icons/0c3501d3f14437b221392d4d5e02bb42.svg';
import starIcon from '../image/userprofile/icons/825757deef932a356af0a0991027586e.svg';

//card assets
import smallCard from '../image/userprofile/card/c8a80f0d0044a3bd871242a422162c0b.svg';
import thumbnailDiskusi from '../image/userprofile/card/a61dda5c5a25872a6983ff03bdf270d3.png';
import cardBase from '../image/userprofile/card/561f1a34e20979f280dbe1bdc5a7215e.svg';
import thumbnailUsaha from '../image/userprofile/card/e75982dcacb01f3c9ce9d7be5cab965a.png';
import thumbnailResepSate from '../image/userprofile/card/d61bec3f2ff916814f65bfe8cec2811a.png';
import thumbnailResepAyam from '../image/userprofile/card/2efbe1a2d3acac6633abb6b53151a102.png';
import thumbnailResepBakso from '../image/userprofile/card/65ff072d32cdafea76718b83578e681a.png';


function renderUserprofile(props) {
  return (
    <section className={userProfileStyle.profil_content}>
      <div className={userProfileStyle.profile_content}>
        <div className={userProfileStyle.profile_header}>
          <div className={userProfileStyle.rect4} />
          <img
            className={userProfileStyle.foto_profil}
            src={fotoProfil}
            alt="alt text"
          />

          <div className={userProfileStyle.profile_user_info}>
            <h2 className={userProfileStyle.nama_pengguna}>Didit</h2>
            <h4 className={userProfileStyle.highlight_alamat}>Makassar, Sulawesi selatan.</h4>

            <div className={userProfileStyle.flex_row}>
              <img
                className={userProfileStyle.toko_small_icon}
                src={tokoSmallIcon}
                alt="alt text"
              />
              <div className={userProfileStyle.info}>Toko Bebek Carok Cab. Pekalongan</div>
            </div>

            <div className={userProfileStyle.flex_row1}>
              <img
                className={userProfileStyle.whatsapp_small_icon}
                src={kontakSmallIcon}
                alt="alt text"
              />
              <div className={userProfileStyle.info}>+62-8xxx-xxxx-xxxx</div>
            </div>

            <div className={userProfileStyle.flex_row1}>
              <img
                className={userProfileStyle.email_small_icon}
                src={emailSmallIcon}
                alt="alt text"
              />
              <div className={userProfileStyle.info}>aditxxx@gmail.com</div>
            </div>
          </div>

          <div className={userProfileStyle.profile_user_detail}>
            <img
              className={userProfileStyle.clock_icon}
              src={clockIcon}
              alt="alt text"
            />
            <div className={userProfileStyle.joindate}>Bergabung Februari 2024</div>
            <p className={userProfileStyle.recent_info_box}>
              <span className={userProfileStyle.recent_info}>
                <span className={userProfileStyle.recent_info_span0}>3 Resep telah dipublish</span>
                <span className={userProfileStyle.recent_info_span1}> Cek Resepnya Sekarang!</span>
              </span>
            </p>
            <p className={userProfileStyle.follower_info_box}>
              <span className={userProfileStyle.follower_info}>
                <span className={userProfileStyle.follower_info_span0}>1.124 </span>
                <span className={userProfileStyle.follower_info_span1}>Pengikut</span>
              </span>
            </p>
            <button
              className={userProfileStyle.btn}
              style={{ '--src': `url(${'/assets/3f3032a6b327ee202ab9256be9a3f2fc.svg'})` }}>
              Ikuti
            </button>
            <div className={userProfileStyle.following_info_box}>
              <span className={userProfileStyle.following_info}>
                <span className={userProfileStyle.following_info_span0}>200</span>
                <span className={userProfileStyle.following_info_span1}> Mengikuti</span>
              </span>
            </div>
          </div>
        </div>

        <div className={userProfileStyle.koleksi_resep_profil}>
          <h2 className={userProfileStyle.medium_title1}>Koleksi Resep (30)</h2>
          <button className={userProfileStyle.more_resep_button}>Tampilkan Resep Lainnya</button>

          <div className={userProfileStyle.koleksi_resep_card}>
            <img
              className={userProfileStyle.small_card_profil}
              src={smallCard}
              alt="alt text"
            />
            <img
              className={userProfileStyle.thumbnail_resep_profil}
              src={thumbnailResepSate}
              alt="alt text"
            />
            <h2 className={userProfileStyle.judul_resep_profil}>Sate Maranggi</h2>

            <div className={userProfileStyle.gatau_icon}>
              <img
                className={userProfileStyle.gatau_image}
                src={iconGatau}
                alt="alt text"
              />
            </div>

            <div className={userProfileStyle.favorit_icon}>
              <img
                className={userProfileStyle.favorit_small_icon}
                src={favoritSmallIcon}
                alt="alt text"
              />
            </div>

            <div className={userProfileStyle.suka_icon}>
              <img
                className={userProfileStyle.like_small_icon}
                src={likeSmallIcon}
                alt="alt text"
              />
            </div>
          </div>

          <div className={userProfileStyle.koleksi_resep_card1}>
            <img
              className={userProfileStyle.small_card_profil}
              src={smallCard}
              alt="alt text"
            />
            <img
              className={userProfileStyle.thumbnail_resep_profil}
              src={thumbnailResepAyam}
              alt="alt text"
            />
            <h2 className={userProfileStyle.judul_resep_profil1}>Ayam Goreng Bawang</h2>

            <div className={userProfileStyle.gatau_icon}>
              <img
                className={userProfileStyle.gatau_image}
                src={iconGatau}
                alt="alt text"
              />
            </div>

            <div className={userProfileStyle.favorit_icon}>
              <img
                className={userProfileStyle.favorit_small_icon}
                src={favoritSmallIcon}
                alt="alt text"
              />
            </div>

            <div className={userProfileStyle.suka_icon}>
              <img
                className={userProfileStyle.like_small_icon}
                src={likeSmallIcon}
                alt="alt text"
              />
            </div>
          </div>

          <div className={userProfileStyle.koleksi_resep_card2}>
            <img
              className={userProfileStyle.small_card_profil}
              src={smallCard}
              alt="alt text"
            />
            <img
              className={userProfileStyle.thumbnail_resep_profil}
              src={thumbnailResepBakso}
              alt="alt text"
            />
            <h2 className={userProfileStyle.judul_resep_profil2}>Bakso Goreng</h2>

            <div className={userProfileStyle.gatau_icon}>
              <img
                className={userProfileStyle.gatau_image}
                src={iconGatau}
                alt="alt text"
              />
            </div>

            <div className={userProfileStyle.favorit_icon}>
              <img
                className={userProfileStyle.favorit_small_icon}
                src={favoritSmallIcon}
                alt="alt text"
              />
            </div>

            <div className={userProfileStyle.suka_icon}>
              <img
                className={userProfileStyle.like_small_icon}
                src={likeSmallIcon}
                alt="alt text"
              />
            </div>
          </div>
        </div>

        <div className={userProfileStyle.diskusi_profil}>
          <h2 className={userProfileStyle.medium_title11}>Diskusi (5)</h2>
          <button className={userProfileStyle.diskusi_lainnya_btn}>Tampilkan Diskusi Lainnya</button>

          <div className={userProfileStyle.diskusi_card}>
            <div className={userProfileStyle.rect1} />
            <h5 className={userProfileStyle.diskusi_highlight}>
              Tips untuk nyimpen santen biar ga cepet basi dong, saya kalau naro santen di kulkas tetep basi, kenapa ya?
            </h5>

            <div className={userProfileStyle.tag_col}>
              <div className={userProfileStyle.flex_row2}>
                <div
                  className={userProfileStyle.tag_small}
                  style={{ '--src': `url(${'/assets/7ee809211ed00de58bd65943d6e606fb.svg'})` }}>
                  <div className={userProfileStyle.text}>Kelapa</div>
                </div>

                <div
                  className={userProfileStyle.tag_small1}
                  style={{ '--src': `url(${'/assets/d9c5856c09410fdbc13fd649857d4e65.svg'})` }}>
                  <div className={userProfileStyle.text}>Bumbu</div>
                </div>

                <div
                  className={userProfileStyle.tag_large}
                  style={{ '--src': `url(${'/assets/b8504c1e143ef43ee40a87522736b2e3.svg'})` }}>
                  <div className={userProfileStyle.text}>Bahan Masakan</div>
                </div>

                <div
                  className={userProfileStyle.tag_small2}
                  style={{ '--src': `url(${'/assets/9b58174acfc2b94b89adf757dc01c7c0.svg'})` }}>
                  <div className={userProfileStyle.text}>Lamian</div>
                </div>

                <div
                  className={userProfileStyle.tag_small1}
                  style={{ '--src': `url(${'/assets/f74fd62c2bdf3a54dbb20132679ecf45.svg'})` }}>
                  <div className={userProfileStyle.text}>Santan</div>
                </div>
              </div>

              <div
                className={userProfileStyle.tag_medium}
                style={{ '--src': `url(${'/assets/bbd7199701d3bdb91a40134ba95bab8c.svg'})` }}>
                <div className={userProfileStyle.text}>Ramyoen</div>
              </div>
            </div>

            <div className={userProfileStyle.waktu_diunggah}>Diunggah 1 Jam yang Lalu</div>

            <div className={userProfileStyle.info_pengguna_diskusi}>
              <div className={userProfileStyle.nama_pengguna_diskusi}>Didit</div>
              <div className={userProfileStyle.info1}>Owner Resto Bebek</div>
            </div>

            <img
              className={userProfileStyle.foto_profil_small}
              src={fotoProfilSmall}
              alt="alt text"
            />

            <div className={userProfileStyle.like_thing}>
              <div className={userProfileStyle.rect2} />
              <img
                className={userProfileStyle.like_icon}
                src={likeSmallIcon2}
                alt="alt text"
              />
              <h1 className={userProfileStyle.view_count}>
                3
              </h1>
            </div>

            <div className={userProfileStyle.view_thing}>
              <div className={userProfileStyle.rect2} />
              <img
                className={userProfileStyle.view_icon}
                src={viewSmallIcon}
                alt="alt text"
              />
              <h1 className={userProfileStyle.view_count}>
                5
              </h1>
            </div>

            <div className={userProfileStyle.comment_thing}>
              <div className={userProfileStyle.rect3} />
              <img
                className={userProfileStyle.comment_icon}
                src={commentSmallIcon}
                alt="alt text"
              />
              <h1 className={userProfileStyle.view_count}>
                5
              </h1>
            </div>
          </div>

          <div className={userProfileStyle.diskusi_card1}>
            <div className={userProfileStyle.rect9} />
            <img
              className={userProfileStyle.thumbnail_diskusi_card}
              src={thumbnailDiskusi}
              alt="alt text"
            />
            <h5 className={userProfileStyle.diskusi_highlight1}>
              Padahal sebelum masuk oven, nyetaknya udah bener, cantik, bagus. Tapi pas keluar dari oven jadi begini,
              kenapa ya?
            </h5>

            <div className={userProfileStyle.flex_col}>
              <div className={userProfileStyle.flex_row2}>
                <div
                  className={userProfileStyle.tag_medium1}
                  style={{ '--src': `url(${'/assets/4ea7bd3205ec9800fd36253baf159730.svg'})` }}>
                  <div className={userProfileStyle.text}>Coklat</div>
                </div>

                <div
                  className={userProfileStyle.tag_large1}
                  style={{ '--src': `url(${'/assets/253ac4fbea933eea24bfcb33405579c1.svg'})` }}>
                  <div className={userProfileStyle.text}>Kue Kering</div>
                </div>

                <div
                  className={userProfileStyle.tag_large1}
                  style={{ '--src': `url(${'/assets/370d67406171875b50ae096689403331.svg'})` }}>
                  <div className={userProfileStyle.text}>Panggang</div>
                </div>
              </div>

              <div className={userProfileStyle.flex_row2}>
                <div
                  className={userProfileStyle.tag_small3}
                  style={{ '--src': `url(${'/assets/8746eac26c273c9e5cd5a22698d7881c.svg'})` }}>
                  <div className={userProfileStyle.text}>Tips</div>
                </div>

                <div
                  className={userProfileStyle.tag_small4}
                  style={{ '--src': `url(${'/assets/2fb50e2a5f08c6b72af7abb6aea19a1e.svg'})` }}>
                  <div className={userProfileStyle.text}>Tag1</div>
                </div>

                <div
                  className={userProfileStyle.tag_small4}
                  style={{ '--src': `url(${'/assets/697aace7467973234e936d876cf54d74.svg'})` }}>
                  <div className={userProfileStyle.text}>Tag1</div>
                </div>
              </div>
            </div>

            <div className={userProfileStyle.waktu_diunggah1}>Diunggah 25 Menit yang Lalu</div>
            <img
              className={userProfileStyle.foto_profil_small1}
              src={fotoProfilSmall}
              alt="alt text"
            />

            <div className={userProfileStyle.info_pengguna_diskusi1}>
              <div className={userProfileStyle.nama_pengguna_diskusi}>Didit</div>
              <div className={userProfileStyle.info1}>Owner Resto Bebek</div>
            </div>

            <div className={userProfileStyle.like_thing1}>
              <div className={userProfileStyle.rect10} />
              <img
                className={userProfileStyle.like_icon}
                src={likeSmallIcon2}
                alt="alt text"
              />
              <h1 className={userProfileStyle.view_count}>
                5
              </h1>
            </div>

            <div className={userProfileStyle.view_thing1}>
              <div className={userProfileStyle.rect10} />
              <img
                className={userProfileStyle.view_icon}
                src={viewSmallIcon}
                alt="alt text"
              />
              <h1 className={userProfileStyle.view_count}>
                5
              </h1>
            </div>

            <div className={userProfileStyle.comment_thing1}>
              <div className={userProfileStyle.rect2} />
              <img
                className={userProfileStyle.comment_icon}
                src={commentSmallIcon}
                alt="alt text"
              />
              <h1 className={userProfileStyle.view_count}>
                5
              </h1>
            </div>
          </div>
        </div>

        <div className={userProfileStyle.ulasan_profil}>
          <h2 className={userProfileStyle.ulasan_tittle}>Ulasan (4)</h2>

          <div className={userProfileStyle.card_ulasan}>
            <div className={userProfileStyle.card_content}>
              <div className={userProfileStyle.card_content_header}>
                <img
                  className={userProfileStyle.foto_profil_medium}
                  src={fotoProfilMedium}
                  alt="alt text"
                />
                <h2 className={userProfileStyle.card_content_user}>Didit</h2>
                <img
                  className={userProfileStyle.rating_icon}
                  src={ratingIcon4s}
                  alt="alt text"
                />
              </div>

              <h3 className={userProfileStyle.card_content_description}>
                Saya baru pertama kali mencoba memasak Seblak, dan resep ini mudah diikuti. Saya menyukai penggunaan
                berbagai bumbu yang memberikan aroma dan rasa yang kaya. Seblak hasil masakan saya berhasil membuat
                seluruh keluarga ketagihan!
              </h3>
            </div>
          </div>

          <div className={userProfileStyle.card_ulasan1}>
            <div className={userProfileStyle.card_content}>
              <div className={userProfileStyle.card_content_header}>
                <img
                  className={userProfileStyle.foto_profil_medium}
                  src={fotoProfilMedium}
                  alt="alt text"
                />
                <h2 className={userProfileStyle.card_content_user}>Didit</h2>
                <img
                  className={userProfileStyle.rating_icon}
                  src={ratingIcon4s}
                  alt="alt text"
                />
              </div>

              <h3 className={userProfileStyle.card_content_description}>
                Saya baru pertama kali mencoba memasak Seblak, dan resep ini mudah diikuti. Saya menyukai penggunaan
                berbagai bumbu yang memberikan aroma dan rasa yang kaya. Seblak hasil masakan saya berhasil membuat
                seluruh keluarga ketagihan!
              </h3>
            </div>
          </div>

          <button className={userProfileStyle.ulasan_lainnya_btn}>Tampilkan Ulasan Lainnya</button>
        </div>

        <div className={userProfileStyle.usaha_profil}>
          <h2 className={userProfileStyle.usaha_tittle}>Kunjungi Usaha Milik Didit!</h2>

          <div className={userProfileStyle.usaha_card}>
            <div className={userProfileStyle.usaha_content}>
              <img
                className={userProfileStyle.cardbase}
                src={cardBase}
                alt="alt text"
              />

              <div className={userProfileStyle.row_icon}>
                <img
                  className={userProfileStyle.star_icon}
                  src={starIcon}
                  alt="alt text"
                />
                <h2 className={userProfileStyle.star_count}>5</h2>
              </div>
            </div>

            <img
              className={userProfileStyle.thumbnail_usaha_card}
              src={thumbnailUsaha}
              alt="alt text"
            />

            <div className={userProfileStyle.usaha_content_detail}>
              <h2 className={userProfileStyle.detail_tittle}>Warung Bebek Kaleyo</h2>

              <div className={userProfileStyle.detail_informasi_usaha}>
                <div className={userProfileStyle.flex_row3}>
                  <img
                    className={userProfileStyle.alamat_icon}
                    src={alamatSmallIcon}
                    alt="alt text"
                  />
                  <div className={userProfileStyle.info11}>Jl. Dr. Setiabudhi no. 294, Kec. Sukasari, Bandung</div>
                </div>

                <div className={userProfileStyle.flex_row3}>
                  <img
                    className={userProfileStyle.whatsapp_icon}
                    src={whatsappicon}
                    alt="alt text"
                  />
                  <div className={userProfileStyle.info12}>+62 xxx-xxxx-xxxx</div>
                </div>

                <div className={userProfileStyle.flex_row3}>
                  <img
                    className={userProfileStyle.waktu_buka_icon}
                    src={waktuBukaicon}
                    alt="alt text"
                  />
                  <div className={userProfileStyle.info12}>Buka Setiap Hari: 09.00-17.00 Wib.</div>
                </div>
              </div>

              <div className={userProfileStyle.tag_tittle}>tersedia:</div>

              <div className={userProfileStyle.tag_container}>
                <div className={userProfileStyle.flex_row4}>
                  <div className={userProfileStyle.bebek_tag}>
                    <div className={userProfileStyle.text1}>Bebek</div>
                  </div>

                  <div className={userProfileStyle.bebek_g_tag}>
                    <div className={userProfileStyle.text1}>Bebek Goreng Kremes</div>
                  </div>

                  <div className={userProfileStyle.bebek_b_tag}>
                    <div className={userProfileStyle.text1}>Bebek Bakar</div>
                  </div>

                  <div className={userProfileStyle.bebek_p_tag}>
                    <div className={userProfileStyle.text1}>Bebek Peking</div>
                  </div>
                </div>

                <div className={userProfileStyle.flex_row4}>
                  <div className={userProfileStyle.bebek_c_i}>
                    <div className={userProfileStyle.text1}>Bebek Cabe Ijo</div>
                  </div>

                  <div className={userProfileStyle.bebek_r}>
                    <div className={userProfileStyle.text1}>Bebek Rica</div>
                  </div>

                  <div className={userProfileStyle.sambal_tag}>
                    <div className={userProfileStyle.text1}>Sambal</div>
                  </div>

                  <div className={userProfileStyle.ayam_b_tag}>
                    <div className={userProfileStyle.text1}>Ayam Bakar</div>
                  </div>
                </div>

                <div className={userProfileStyle.makanan_tag}>
                  <div className={userProfileStyle.text1}>Makanan Halal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderUserprofile;
