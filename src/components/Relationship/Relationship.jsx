import React from 'react';
import {
  Container, Grid, makeStyles, Typography,
} from '@material-ui/core';
import IconJS from '../../assets/icons/IconJS.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '60px',
    lineHeight: '63px',
    fontStyle: 'normal',
    fontFamily: "'Nunito', sans-serif",
    color: 'rgba(0,0,0,0.87)',
    padding: '20px 20px',
    maxWidth: '600px',
  },
  subTitle: {
    minWidth: '330px',
    maxWidth: '360px',
    padding: '28px 11px 40px',
    fontSize: '16px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '25.6px',
    fontWeight: '400',
    align: 'left',
  },
  subTitle2: {
    minWidth: '330px',
    maxWidth: '360px',
    padding: '28px 11px 0px',
    fontSize: '28px',
    fontFamily: "'Nunito', sans-serif",
    lineHeight: '39.2px',
    fontWeight: '400',
    align: 'left',
  },
  img: {
    textAlign: 'center',
    align: 'center',
  },
}));

const rel = [
    {
      title: 'I’m in love with HTML',
      subtitle:
        'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
    },
    {
      title: 'CSS is my inspiration',
      subtitle:
        'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics.',
    },
    {
      title: 'JavaScript is my friend',
      subtitle:
        'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
    },
];

const Relationship = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid direction="column" alignItems="center" justify="center" container>
        <Grid item>
          <Typography
            align="center"
            className={classes.title}
            component="h1"
            variant="h1"
          >
            About my relationship with web-development
          </Typography>
        </Grid>
        <Grid item>
          {rel.map((title, subtitle) => (
            <Grid
              direction="column"
              alignItems="center"
              justify="space-between"
              container
            >
              <Grid className={classes.img} item>
                <img src={IconJS} alt="icon JS" />
              </Grid>
              <Grid item>
                <Typography className={classes.subTitle2}>
                  JavaScript is my friend
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.subTitle}>
                  JavaScript often abbreviated as JS, is a programming language
                  that conforms to the ECMAScript specification. JavaScript is
                  high-level, often just-in-time compiled, and multi-paradigm.
                  It has curly-bracket syntax, dynamic typing, prototype-based
                  object-orientation, and first-class functions.
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Relationship;
