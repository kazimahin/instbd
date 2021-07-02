import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';



// name ,src ,dotColor ,size
export  function MActiveAvatar(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          
          '& > *': {
            margin: theme.spacing(1),
          },
          "& .MuiBadge-dot":{
            height: `${(props.size ? props.size :40) / 5 }px`  ,
            width:`${(props.size ? props.size :40) / 5 }px`  ,
            borderRadius:"50%"
          }
        },
        Avatar:{
            height:`${(props.size ? props.size :40)  }px`  ,
            width:`${(props.size ? props.size :40)  }px`  ,
            fontSize:`${(props.size ? props.size :40) /2.2 }px`  ,
            color: props.color  ,
            background:props.background,
        }

      }));
      



const StyledBadge = withStyles((theme) => ({
    badge: {
      
      backgroundColor: props.dotColor ? props.dotColor :' #44b700',
      color: props.dotColor ? props.dotColor:' #44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: "-1px",
        left: "-1px",
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
        {...props}
      >
        <Avatar className={classes.Avatar} alt={props.name} src={props.src} />
      </StyledBadge>
      
    </div>
  );
}
