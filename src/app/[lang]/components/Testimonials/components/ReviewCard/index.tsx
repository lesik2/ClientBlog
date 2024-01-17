import { IReviewCard } from '@customTypes/index';
import style from '@styles/homePage/reviewCard.module.scss';
import Image from 'next/image';



export default function ReviewCard({ iconSrc, text, userName, userAddress }: IReviewCard) {
  return (
    <div className={style.wrapperReviewCard}>
      <h4 className={style.text}>{text}</h4>
      <div className={style.wrapperUser}>
        <Image className={style.userIcon} height={48} width={48} src={iconSrc} alt='user profile' />
        <div className={style.userInfoWrapper}>
          <h4 className={style.userName}>{userName}</h4>
          <p className={style.userAddress}>{userAddress}</p>
        </div>
      </div>
    </div>
  );
}
