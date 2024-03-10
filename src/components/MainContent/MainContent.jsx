import React from 'react';
import { Performance } from '../Performance';
import { Sentiments } from '../Sentiments';
import { TabButtons } from '../TabButtons';
import { TAB_BUTTONS_ROUTES } from '../../mocks/TabButtons';
import { useLocation } from 'react-router';
import { About } from '../About';

export const MainContent = () => {
  const location = useLocation();

  console.log('location', location);

  return (
    <div className="max-w-[881px] w-full flex flex-col gap-5">
      MainContent
      <TabButtons tabs={TAB_BUTTONS_ROUTES} />
      {location.hash === '#overview' ||
        (location.hash === '' && (
          <>
            <Performance />
            <Sentiments />
            <About />
          </>
        ))}
      {location.hash === '#fundamentals' && <Performance />}
      {location.hash === '#sentiments' && <Sentiments />}
      {location.hash === '#news_insight' && <About />}
    </div>
  );
};
