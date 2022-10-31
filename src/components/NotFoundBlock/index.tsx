import React from 'react';
import styles from './NotFoundBlock.module.scss';
import {langue} from '../../langue';
import { useSelector } from 'react-redux';
import { selectLang } from '../../redux/lange/selectors';

const lang = langue;

export const NotFoundBlock: React.FC = () => {
  
  return (
    <div className={styles.root}>
      <h1>
        <span>{lang.obrajsheniu_smailik}</span>
        <br />
        {lang.nichogo_ne_znaideno}
      </h1>
      <p className={styles.description}>
        {lang.nashl_dana_storinka_vidsutna_v_nashomu_internet_magazuni}
      </p>
    </div>
  );
};
