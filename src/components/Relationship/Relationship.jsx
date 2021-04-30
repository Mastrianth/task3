import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import HTML from '../../assets/icons/HTML.svg';
import CSS from '../../assets/icons/CSS.svg';
import JS from '../../assets/icons/JS.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '60px',
    lineHeight: '63px',
    fontStyle: 'normal',
    fontFamily: "'Nunito', sans-serif",
    color: 'rgba(0,0,0,0.87)',
    padding: '20px 20px',
    maxWidth: '700px',
    paddingBottom: '60px',
  },
  subTitle: {
    maxWidth: '360px',
    padding: '28px 11px 40px',
    fontSize: '16px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '25.6px',
    fontWeight: '400',
    align: 'left',
    [theme.breakpoints.down('md')]: {
     margin: '0 auto',
    },
  },
  subTitle2: {
    maxWidth: '360px',
    padding: '28px 11px 0px',
    fontSize: '28px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '39.2px',
    fontWeight: '400',
    align: 'left',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
    },
  },
  img: {
    textAlign: 'center',
    align: 'center',
    width: '204px',
    height: '161px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      width: '146px',
      height: 'auto',
      margin: '0 auto',
    },
  },
  container: {
    height: 'auto',
    minWidth: '340px',
    maxWidth: '1140px',
    width: '100%',
  },
}));

const rel = [
  {
    title: 'I’m in love with HTML',
    image: HTML,
    subtitle:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
  },
  {
    title: 'CSS is my inspiration',
    image: CSS,
    subtitle:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics.',
  },
  {
    title: 'JavaScript is my friend',
    image: JS,
    subtitle:
      'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
];

const Relationship = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid direction="row" alignItems="center" justify="center" container>
        <Typography
          align="center"
          className={classes.title}
          component="h1"
          variant="h1"
        >
          About my relationship with web-development
        </Typography>
      </Grid>
      <Grid
        direction="row"
        alignItems="flex-start"
        justify="space-between"
        container
      >
        {rel.map(({ title, subtitle, image }) => (
          <Grid md={4} xs={12} sm={4} alignItems="center" item>
            <Box component="div" className={classes.img} item>
              <img src={image} alt="icon" />
            </Box>
            <Typography className={classes.subTitle2}>{title}</Typography>
            <Typography className={classes.subTitle}>{subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Relationship;
