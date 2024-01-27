import Image from 'next/image';
import { memo } from 'react';

import style from './reviewCard.module.scss';

import { IReviewCard } from '../../interfaces';

const ReviewCard = memo(({ iconSrc, text, userName, userAddress }: IReviewCard) => (
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
));

export default ReviewCard;
