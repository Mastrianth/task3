import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: '16px',
        color: '#8d8c8c',
        '&$focused': {
          color: '#00BDD3',
        },
        '&$error': {
          color: '#CB3D40',
        },
      },
      focused: {},
      error: {},
      // outlined: {
      //   '&$marginDense': {
      //     transform: 'translate(16px, 19px) scale(1)',
      //   },
      //   '&$shrink': {
      //     transform: 'translate(17px, -6px) scale(0.75)',
      //   },
      // },
      marginDense: {},
    },
    MuiInputBase: {
      input: {
        minWidth: '380px',
        maxWidth: '380px',
        height: '54px',
        fontFamily: "'Asap', sans-serif",
        fontSize: '16px',
        color: 'rgba(0,0,0,0.87)',
        boxSizing: 'border-box',
        '&:hover': {
          borderColor: 'rgba(0,0,0,0.87)',
        },
        '&$focused': {
          borderColor: '#00BDD3',
        },
        '&$error': {
          borderColor: '#CB3D40',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline$notchedOutline': {
          borderColor: 'rgba(0,0,0,0.87)',
        },
        '&$focused $notchedOutline$notchedOutline': {
          borderColor: '#00BDD3',
        },
        '&$error $notchedOutline$notchedOutline': {
          borderColor: '#CB3D40',
        },
      },
      input: {
        paddingLeft: '17px',
      },
      // notchedOutline: {
      //   borderColor: '#D0CFCF',
      // },
      focused: {},
      error: {},
    },
    MuiFormHelperText: {
      root: {
        fontFamily: "'Asap', sans-serif",
        fontSize: '12px',
        lineHeight: '16.8px',
        color: '#BCBCBC',
        paddingTop: '5px',
        '&$error': {
          color: '#CB3D40',
        },
      },
      contained: {
        marginLeft: '17px',
      },
    },
  },
});
