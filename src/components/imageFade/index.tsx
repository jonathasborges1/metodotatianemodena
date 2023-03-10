import React from 'react';

import { Fade } from '@mui/material/';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  imgContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  fade: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, transparent, black)',
  },
});

function ImageFade({ src }) {
  const classes = useStyles();
  const [loaded, setLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={classes.imgContainer}>
      <img
        //className={classes.img}
        //style={{width: "200%"}}
        src={src}
        alt="imagem"
        onLoad={handleImageLoad}
      />
      <Fade in={loaded}>
        <div className={classes.fade} />
      </Fade>
    </div>
  );
}

export default ImageFade;