import StateManagedSelect from 'react-select/dist/declarations/src/stateManager';
import langAny from './langAny.json';
import { selectLang } from './redux/lang/selectors';
import { useSelector } from 'react-redux';

//const lan = document.getElementById("#hooks");

//console.log(useSelector(selectLang));

const lann = langAny.en;
export const langue = lann;

