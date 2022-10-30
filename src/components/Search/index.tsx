import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hook';
import debounce from 'lodash.debounce';
import Select from 'react-select';
import styles from './Search.module.scss';
import { setSearchValue } from '../../redux/filter/slice';
import { selectLang} from '../../redux/lang/selectors';
import {updateValue} from '../../redux/lang/slice';
import { stringify } from 'qs';


const langueAny = [{
    value: 'ua',
    label: 'UA'
},{
    value: 'ru',
    label: 'RU'
},{
    value: 'en',
    label: 'EN'
},];

const MenuLang = () =>{

  const [curentLanguage, setCurentLanguage] = useState('ua');

  const dispatch = useAppDispatch();

  const {lang} = useAppSelector(selectLang);


  const getValue = () => {
    return curentLanguage ? langueAny.find(c =>c.value === curentLanguage) : '';
  };

  const onChange = (newValue:any) => {
    setCurentLanguage(newValue.value); 
    dispatch(updateValue(newValue.value));
  };


  return(
    <div className={styles.languejAny}>
      <span className={styles.lang}>Оберіть мову: <span id="hooks">{lang}</span></span>
      <Select onChange={onChange} value={getValue()} options={langueAny} />
    </div>
  )
} 

export const Search: FC = () => {

  const dispatch = useDispatch();
  const [value, setValue] = React.useState<string>('');
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <>
      <div className={styles.root}>
        <svg
          className={styles.icon}
          enableBackground="new 0 0 32 32"
          id="EditableLine"
          version="1.1"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="14"
            cy="14"
            fill="none"
            id="XMLID_42_"
            r="9"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            fill="none"
            id="XMLID_44_"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="27"
            x2="20.366"
            y1="27"
            y2="20.366"
          />
        </svg>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Пошук піци..."
        />
        {value && (
          <svg
            onClick={onClickClear}
            className={styles.clearIcon}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        )}
      </div>
      <MenuLang />
      </>
  );
};


export default MenuLang;

