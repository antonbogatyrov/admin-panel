export default function (state) {
  return {
    openSnackBar: state.snackBar.open,
    snackBarMessage: state.snackBar.message,
  };
}
