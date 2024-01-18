'use client';

import style from '@styles/blogPage/posts.module.scss';
import PostCard from '@components/ui/PostCard';
import { useState } from 'react';
import { POST_CARDS } from '@constants/cards';

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;

  const totalPages = Math.ceil(POST_CARDS.length / postsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderPostCards = () => {
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const slicedCards = POST_CARDS.slice(startIndex, endIndex);

    return slicedCards.map((postCard) => <PostCard  key={postCard.id} {...postCard} />);
  };

  return (
    <section className={style.postsSection}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>All posts</h1>
      </div>
      <div className={style.wrapperCards}>{renderPostCards()}</div>
      <div className={style.wrapperButtons}>
        <button className={style.button} type='button' onClick={handlePrevPage} disabled={currentPage === 0}>
          <h4>{`< Prev `}</h4>
        </button>
        <button
          className={style.button}
          type='button'
          onClick={handleNextPage}
          disabled={totalPages === currentPage + 1}
        >
          <h4>{` Next > `}</h4>
        </button>
      </div>
    </section>
  );
}
