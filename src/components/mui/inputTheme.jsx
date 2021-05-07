import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        height: '54px',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'Asap, sans-serif',
        '&$focused': {
          color: '#00BDD3',
        },
        '&$error': {
          color: '#CB3D40',
        },
        '& .MuiFormLabel-root.Mui-error': {
          color: '#f44336',
        },
      },
    },
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        top: '55px',
        zIndex: '1',
        fontFamily: 'Asap, sans-serif',
        fontSize: '12px',
        marginTop: '5px',
        paddingRight: '45px',
        paddingLeft: '2px',
        fontWeight: '400',
        fontStyle: 'normal',
        letterSpacing: 'normal',
        lineHeight: '17px',
        textAlign: 'left',
        color: 'rgba(0, 0, 0, 0.87)',
        '&$error': {
          color: '#CB3D40',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#00BDD3',
        },
        '&$error $notchedOutline': {
          borderColor: '#CB3D40',
        },
      },
      input: {
        // "&::placeholder": {
        //   color: "red",
        //   background:'orange'
        // },
        fontFamily: 'Asap, sans-serif',
      },
    },
  },
});
