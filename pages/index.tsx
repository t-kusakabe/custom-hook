import { useState } from 'react';

import { usePageHistory } from 'hooks/pageHistory';

const Index: React.FC = () => {
  const topPage = 1;
  const lastPage = 4;

  const [currentPage, Top, Next, Back, Last, Reset] = usePageHistory(
    topPage,
    lastPage,
  );

  return (
    <div>
      <div>現在のページ: {currentPage}</div>
      <button onClick={Top}>トップ</button>
      <button onClick={Next}>次へ</button>
      <button onClick={Back}>戻る</button>
      <button onClick={Last}>ラスト</button>
      <button onClick={Reset}>リセット</button>
    </div>
  );
};

export default Index;
