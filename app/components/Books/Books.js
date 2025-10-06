import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Books.css'
import BookCard from './BookCard';

import { booksData } from '../../data/booksData'

function Books() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="books" id="books" style={{backgroundColor: theme.secondary}}>

            <div className="books-body">
                <div className="books-description">
                <h1 style={{color:theme.primary}}>Books</h1>
                    {booksData.map(book => (
                        <BookCard
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            subtitle={book.subtitle}
                            link={book.link}
                            image={book.image}
                        />
                    ))}
                </div>
                <div className="books-image">
                    <img src={theme.bookimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Books