import React from 'react';
import PropTypes from 'prop-types';

import styles from './popupfilter.module.css';

function PopupFilter(props) {
  return (
    <div className={(styles.root, props.className, 'popup-filter')}>
      <div className={styles.flex_col}>
        <div className={styles.flex_col1}>
          <h2 className={styles.kategori_tag}>Kategori Resep Daerah</h2>

          <div className={styles.kumpulan_tag}>
            <button className={styles.button_tag}>DKI Jakarta</button>
            <button className={styles.button_tag1}>Jawa Tengah</button>
            <button className={styles.button_tag2}>Jawa Barat</button>
            <button className={styles.button_tag3}>Sulawesi Selatan</button>
            <button className={styles.button_tag4}>Kepulauan Seribu</button>
            <button className={styles.button_tag5}>Kalimantan Barat</button>
            <button className={styles.button_tag6}>Sumatera Utara</button>
          </div>
        </div>

        <div className={styles.flex_col2}>
          <h2 className={styles.kategori_tag}>Kategori Bahan Masakan</h2>

          <div className={styles.kumpulan_tag}>
            <button className={styles.button_tag7}>Keluak</button>
            <button className={styles.button_tag8}>Kecombrang</button>
            <button className={styles.button_tag9}>Kunyit</button>
            <button className={styles.button_tag10}>Daun Kemangi</button>
            <button className={styles.button_tag11}>Pete</button>
            <button className={styles.button_tag12}>Kemiri</button>
            <button className={styles.button_tag13}>Pandan</button>
            <button className={styles.button_tag14}>Daun Salam</button>
          </div>
        </div>
      </div>

      <button id="tampilkanbutton"
        className={styles.tampilkan_button}>
        <a href="resep" className={styles.alternate_button} > </a>
        <div className={styles.text1}>Tampilkan Resep</div>
      </button>
    </div>
    
    
  );
}

PopupFilter.propTypes = {
  className: PropTypes.string
};

export default PopupFilter;
