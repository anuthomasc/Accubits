import { CustomToast } from "./components/customToast/CustomToast";
import { strings } from "../globals/localisation";
export const GLOBAL_DATA = {
  textFieldIsValidated: function (textField) {
        if ( textField.length>=8 &&textField.length<=16)
          return true;
        else {
          CustomToast(strings.textFieldValidation)
          return false;
        }
      }
};
