import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import selectImg from '../../assets/img/svg/select.svg';

const breakpoints = createBreakpoints({})

export default createMuiTheme({
  breakpoints: {
    values: {
      mobile: 576,
      tablet: 992,
      laptop: 1024,
      desktop: 1280,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        height: '54px',
        maxWidth: '328px',
        minWidth: '328px',
        [breakpoints.up('sm')]: {
          maxWidth: '380px',
          minWidth: '380px',
        },
      },
      '&$focused $notchedOutline': {
        borderColor: '#00BDD3',
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
        color: '#7E7E7E',
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
    MuiMenuItem: {
      root: {
        minHeight: 10,
        fontFamily: 'Asap, sans-serif',
        fontSize: 16,
        fontWeight: 400,
        margin: '0 4px',
        paddingLeft: 26,
        paddingTop: '2px',
        paddingBottom: '2px',
        backgroundColor: 'rgba(236, 237, 237, 1)',
      },
    },
    MuiList: {
      root: {
        backgroundColor: 'rgba(236, 237, 237, 1)',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: '#00BDD3',
          color: '#FFFFFF',
          borderRadius: '4px',
          fontSize: 16,
          fontWeight: 400,
          fontFamily: 'Asap, sans-serif',
          '&$selected': {
            backgroundColor: '#00BDD3',
            color: '#FFFFFF',
            borderRadius: '4px',
            fontSize: 16,
            fontWeight: 400,
            fontFamily: 'Asap, sans-serif',
          },
          '@media (hover: none)': {
            backgroundColor: '#00BDD3', // for touch devices
          },
        },
        '&$selected': {
          backgroundColor: 'rgba(236, 237, 237, 1)',
          // color: "#FFFFFF",
          borderRadius: '4px',
          fontSize: 16,
          fontWeight: 400,
          fontFamily: 'Asap, sans-serif',
          // position: "relative",
        },
        '&$selected:before': {
          position: 'absolute',
          top: 9,
          left: 8,
          content: '""',
          display: 'block',

          background: 'url(\'/assets/select.svg\')',
          // backgroundColor: '#000000',
          backgroundSize: '10px 10px',
          height: 10,
          width: 10,
        },
      },
    },
    MuiSelect: {
      root: {
        color: 'rgba(0,0,0,0.87)',
        '&&:focus': {
          backgroundColor: 'transparent',
        },
      },
      iconOutlined: {
        '&&': {
          top: 'calc(50%)',
          right: '13px',
          color: 'rgba(126, 126, 126, 1)',
          opacity: '50%',
        },
      },
    },
    MuiPaper: {
      root: {
        marginTop: 10,
        marginLeft: -10,
      },
    },
  },

});
