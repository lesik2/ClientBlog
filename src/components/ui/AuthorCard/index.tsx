import style from '@styles/ui/authorCard.module.scss';
import Image from 'next/image';
import { ICONS } from '@constants/index';

export interface IAuthorCard {
  title: string;
  description: string;
  iconSrc: string;
}
export function AuthorCard({ title, description, iconSrc }: IAuthorCard) {
  return (
    <div className={style.wrapperCard}>
      <div className={style.content}>
        <Image className={style.icon} width={128} height={128} src={iconSrc} alt={title} />
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.wrapperSocialLinks}>
          {ICONS.map((icon) => (
            <a key={icon.src} className={`${style.socialLink}`} href='/'>
              <Image {...icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
