import asReduxFormsField from './asReduxFormsField';
import { Input } from 'reactstrap';

//imports
import NumericBox from "../../_components/Forms/NumericBox"; 
import TextBox from "../../_components/Forms/TextBox"; 
import SelectBox from "../../_components/Forms/SelectBox"; 

//exports
export const NumericBoxField = asReduxFormsField()(NumericBox);
export const TextBoxField = asReduxFormsField()(TextBox);
export const SelectBoxField = asReduxFormsField()(SelectBox);

//reactstrap fields
export const InputField = asReduxFormsField()(Input);
