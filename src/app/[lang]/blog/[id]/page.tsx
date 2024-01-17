import style from '@styles/blogPost/blogPost.module.scss';
import JoinOurTeam from '@components/JoinOurTeam';
import { Dictionary, getDictionary } from '@lib/dictionary';
import { POST_CARDS } from '@constants/cards';
import { AUTHORS } from '@constants/authors';

import Header from './components/Header';
import Main from './components/Main';
import Posts from './components/Posts';

import { IBlogPost } from '@/types';

export default async function BlogPost({ params: { lang, id } }: IBlogPost ) {

  const dictionary: Dictionary = await getDictionary(lang);
  const currentPost = POST_CARDS.find((card)=>card.id === id);
  const currentAuthor = AUTHORS.find((author)=>author.id === currentPost?.authorId);

  return (
    <>
      {currentPost && currentAuthor && 
      <section className={style.blogPostSection}>
        <Header author={currentAuthor} post={currentPost}/>
        <Main  imageSrc={currentPost.imageSrc}/>
        <Posts tag={currentPost.tags[0]}/>
        <JoinOurTeam dictionary={dictionary} />
      </section>
      }
    </>
    
  );
}
