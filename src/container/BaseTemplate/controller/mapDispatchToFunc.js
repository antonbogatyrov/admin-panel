import { creator } from '../../../reducer/snackBar';

export default function (dispatch) {
  return {
    closeSnackBar: () => dispatch(creator.close()),
  };
}
