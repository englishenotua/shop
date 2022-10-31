import React from 'react';
import { Link } from 'react-router-dom';
import { langue } from '../langue';
import cartEmptyImg from '../assets/img/empty-cart.png';

const lang = langue;

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>
      {lang.koshik_porojniy}<span>{lang.koshik_smile}</span>
    </h2>
    <p>
      {lang.skorish_za_vse_vu_je_nezamovulu_pizzu}
      <br />
      {lang.dlya_togo_shjob_zamovutu_pizzu_pereydit_na_golovnu_storinku}
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>{lang.povernutusya_nazad}</span>
    </Link>
  </div>
);
