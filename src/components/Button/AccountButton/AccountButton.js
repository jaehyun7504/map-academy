import React from 'react';

import styles from './AccountButton.module.scss';

const accountButton = props => (
  <div>
    <button className={styles.AccountButton}>로그인</button>
    <button
      className={`${styles.AccountButton} ${styles.AccountButton__Filled}`}
    >
      회원가입
    </button>
  </div>
);

export default accountButton;
