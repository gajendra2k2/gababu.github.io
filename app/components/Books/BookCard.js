import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import bookImgWhite from '../../assets/svg/books/bookImgWhite.svg'
import bookImgBlack from '../../assets/svg/books/bookImgBlack.svg'
import './Books.css'

function BookCard({ id, title, subtitle, link, image }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        bookCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
                transform: 'scale(1.02)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            },
        },
    }));

    const classes = useStyles();

    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <Fade bottom>
            <div key={id} className={`book-card ${classes.bookCard}`} onClick={handleClick}>
                <div className="bookcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={image || (theme.type === 'light' ? bookImgBlack : bookImgWhite)} alt="Book" />
                </div>
                <div className="book-details">
                    <h4 style={{color: theme.tertiary}}>{title}</h4>
                    {subtitle && <h5 style={{color: theme.tertiary80}}>{subtitle}</h5>}
                    <p style={{color: theme.primary, marginTop: '10px', fontSize: '0.9em' }}>
                        Click to view →
                    </p>
                </div>
            </div>
        </Fade>
    )
}

export default BookCard