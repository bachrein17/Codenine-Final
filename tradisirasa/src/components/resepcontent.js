import React from 'react';
import SearchIcon from '../image/resepcontent/f55510d99f5f756a3bed0328b232f5fb.svg';
import FavoritIcon from '../image/resepcontent/1cf08c1537cf1fdb97493aafce90af1d.png';
import PorsiIcon from '../image/resepcontent/efb75d21c0c4f77d1ada94d703330968.png';
import WaktuIcon from '../image/resepcontent/9369e41c22c9504ff327a7fa6c2684e8.png';
import FilterButton from '../image/resepcontent/f16cfda66dfd6d53ddd1e889a74857f6.svg';
import FilterIcon from '../image/resepcontent/5b908a3303078637501320ee0aae9184.svg';
import resepStyle from './resepcontent.module.css';

import SotoKudusImage from '../image/resepcontent/5d7506d48e3dfabc175975fc5f646e4d.png';
import OlosKhasTegal from '../image/resepcontent/314149fa094f60d6327e6c408dc97788.png';
import SerabiSolo from '../image/resepcontent/0bd7f69638f16aedbf153ec89c8e7964.png';
import GarangAsem from '../image/resepcontent/a5f3a0cef9db57f68541af6104b9517d.png';
import TahuGimbal from '../image/resepcontent/a529b5b1bcfdb20301bdc86ff378d88a.png';
import SateBlengong from '../image/resepcontent/ede34a557df2a246be06c3202bf21776.png';
import MiOngklok from '../image/resepcontent/ef9a16a8503cea4b29cd0e84440ccb34.png';
import SotoSokoraja from '../image/resepcontent/877cecdc799f4d4c0a53afc40270a217.png';
import BrambangAsem from '../image/resepcontent/5dc555a5003bddb8728d31ce1535f512.png';

function renderSection2(props) {
    return (
    <section className={resepStyle.section2}>
      <div className={resepStyle.flex_col}>
        <div className={resepStyle.flex_col1}>
          <h2 className={resepStyle.medium_title}>
            Bagikan Kreativitasmu di Dapur: Unggah Resepmu dan Inspirasi Kuliner di Sini!
          </h2>
          <p className={resepStyle.paragraph}>
            Sambutlah petualangan kulinermu dengan kelezatan autentik Indonesia yang tak tertandingi. Temukan resep yang
            sesuai selera dan kebutuhanmu di sini!
          </p>
        </div>

{/* menu  */}
        <div className={resepStyle.content_box10}>
          <div className={resepStyle.rect7} />
          <div className={resepStyle.paragraph1}>Cari Resepmu</div>
          <img className={resepStyle.image13} src={SearchIcon} alt="alt text" />
          <button
            className={resepStyle.btn}>Jawa Tengah</button>
          <button className={resepStyle.custombutton1}>Jawa Barat</button>
          <button className={resepStyle.btn2}>Sumatra Barat</button>
          <button className={resepStyle.btn3}>Sulawesi Selatan</button>

          <div className={resepStyle.content_box9}>
            <img
              className={resepStyle.filterbutton}
              src={FilterButton}
              alt="alt text"
            />
            <button id="filterbutton"
            className={resepStyle.filterbutton}>
            <a href="popupfilter" className={resepStyle.filterbutton} > </a>
            <div className={resepStyle.text1}>Filter</div>
            </button>
            <img
              className={resepStyle.image14}
              src={FilterIcon}
              alt="alt text"
            />
          </div>
        </div>
        

{/*card*/}


        <div className={resepStyle.grid}>

            {/*1*/}
          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={SotoKudusImage} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info1}>30 Menit</div>
            <div className={resepStyle.text}>Soto Kudus</div>
            <div className={resepStyle.info11}>Publisher : Intan Karina Ijo (Instagram)</div>
            <img
              className={resepStyle.image2}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

        {/*2*/}
          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={OlosKhasTegal} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info2}>5 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info3}>1 Jam</div>
            <div className={resepStyle.text2}>Olos Khas Tegal</div>
            <div className={resepStyle.info12}>Publisher : Diah Didi’s Kitchen (Blog)</div>
            <img
              className={resepStyle.image2}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

        {/*3*/}
          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={SerabiSolo} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info3}>1 Jam</div>
            <div className={resepStyle.text3}>Serabi Solo</div>
            <div className={resepStyle.info13}>Publisher : Serabisolopandanwangi (Instagram)</div>
            <img
              className={resepStyle.image2}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

        {/*4*/}
          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={GarangAsem} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info4}>45 Menit</div>
            <div className={resepStyle.text4}>Garang Asem</div>
            <div className={resepStyle.info14}>Publisher : Denvil Prasetya (Instagram)</div>
            <img
              className={resepStyle.image4}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={TahuGimbal} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info1}>30 Menit</div>
            <div className={resepStyle.text5}>Tahu Gimbal</div>
            <div className={resepStyle.info15}>Publisher : Nay’s Kitchen (cookpad)</div>
            <img
              className={resepStyle.image4}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={SateBlengong} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info1}>35 Menit</div>
            <div className={resepStyle.text6}>Sate Blengong Bebek</div>
            <div className={resepStyle.info16}>Publisher : ksmtour.com</div>
            <img
              className={resepStyle.image4}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={MiOngklok} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info1}>20 Menit</div>
            <div className={resepStyle.text7}>Mi Ongklok</div>
            <div className={resepStyle.info17}>Publisher : Chef Norman Ismail (Instagram)</div>
            <img
              className={resepStyle.image4}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={SotoSokoraja} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info5}>1 Jam</div>
            <div className={resepStyle.text4}>Soto Sokoraja</div>
            <div className={resepStyle.info18}>Publisher : mamamkuylah (Instagram)</div>
            <img
              className={resepStyle.image4}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>

          <div className={resepStyle.item}>
            <div className={resepStyle.rect} />
            <img className={resepStyle.cover} src={BrambangAsem} alt="alt text" />
            <div className={resepStyle.rect1} />
            <img className={resepStyle.image} src={PorsiIcon} alt="alt text" />
            <div className={resepStyle.info}>1 Porsi</div>
            <div className={resepStyle.rect2} />
            <img
              className={resepStyle.image1}
              src={WaktuIcon}
              alt="alt text"
            />
            <div className={resepStyle.info5}>1 Jam</div>
            <div className={resepStyle.text8}>Brambang Asem</div>
            <div className={resepStyle.info19}>Publisher : Mimam Mu (Cookpad)</div>
            <img
              className={resepStyle.image4}
              src={FavoritIcon}
              alt="alt text"
            />
          </div>
        </div>
      </div>  
    </section>
  );
}


export default renderSection2;
