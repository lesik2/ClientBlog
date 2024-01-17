import style from '@styles/authorPage/author.module.scss';
import { AUTHORS } from '@constants/authors';


import Header from './components/Header';
import Posts from './components/Posts';




export default function AuthorPage({params}: {params: {id: string}}) {
  const author = AUTHORS.find((item)=>item.id === params.id);

  return (
    <>
      {author? 
      <section className={style.sectionAuthor}>
        <Header author={author}/>
        <Posts />
      </section> 
    :<h1>Not Found</h1>
    }
    </>
   
  );
}
