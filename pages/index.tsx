import { useState } from 'react';

import { PageHistory, usePageHistory } from 'hooks/pageHistory';

const PageContainer: React.FC = () => {
  const topPage = 1;
  const lastPage = 4;

  const [currentPage, history] = usePageHistory(topPage, lastPage);

  return <Page currentPage={currentPage} history={history} />;
};

interface PageProps {
  currentPage: number;
  history: PageHistory;
}

const Page: React.FC<PageProps> = ({ currentPage, history }: PageProps) => {
  return (
    <div>
      <div>現在のページ: {currentPage}</div>
      <button onClick={history.Top}>トップ</button>
      <button onClick={history.Next}>次へ</button>
      <button onClick={history.Back}>戻る</button>
      <button onClick={history.Last}>ラスト</button>
      <button onClick={history.Reset}>リセット</button>
    </div>
  );
};

export default PageContainer;
