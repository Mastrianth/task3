import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        fontFamily: "'Asap', sans-serif",
        fontSize: '16px',
        color: '#D0CFCF',
        '&$focused': {
          color: '#00BDD3',
        },
        '&$error': {
          color: '#f44336',
        },
      },
      focused: {},
      error: {},
      outlined: {
        '&$marginDense': {
          transform: 'translate(16px, 19px) scale(1)',
        },
        '&$shrink': {
          transform: 'translate(17px, -6px) scale(0.75)',
        },
      },
      shrink: {},
      marginDense: {},
    },
    MuiSelect: {
      root: {
        '&&': {
          minWidth: '380px',
          maxWidth: '380px',
          height: '54px',
          fontFamily: "'Asap', sans-serif",
          fontSize: '16px',
          lineHeight: '35px',
          color: 'rgba(0,0,0,0.87)',
          boxSizing: 'border-box',
        },
        '&&:focus': {
          backgroundColor: 'transparent',
        },
      },
      iconOutlined: {
        '&&': {
          top: 'calc(50% - 4px)',
          right: '13px',
        },
      },
    },
    MuiMenu: {
      paper: {
        boxShadow: '0 3px 8px rgba(1, 1, 1, 0.24)',
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          color: '#fff',
          backgroundColor: '#00BDD3',
        },
        '&$selected:hover': {
          backgroundColor: 'rgba(239, 108, 0, 0.2)',
        },
      },
      button: {
        '&:hover': {
          backgroundColor: 'rgba(239, 108, 0, 0.2)',
        },
      },
    },
    Mui: {
      selected: {},
    },
    MuiTouchRipple: {
      root: {
        color: '#ef6c00 !important',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline$notchedOutline': {
          borderColor: '#b7b7b7',
        },
        '&$focused $notchedOutline$notchedOutline': {
          borderColor: '#b7b7b7',
        },
        '&$error $notchedOutline$notchedOutline': {
          borderColor: '#f44336',
        },
      },
      input: {
        paddingLeft: '17px',
      },
      notchedOutline: {
        borderColor: '#b7b7b7',
      },
      focused: {},
      error: {},
    },
    MuiFormHelperText: {
      root: {
        fontFamily: "'Source Sans Pro', sans-serif",
        fontSize: '12px',
        lineHeight: '1',
        color: '#8d8c8c',
      },
      contained: {
        marginLeft: '17px',
      },
    },
  },
});
