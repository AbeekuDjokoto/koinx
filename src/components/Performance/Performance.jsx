import React from 'react';
import { useMarketPerformance } from '../../hooks';
import { Infographic } from '../../assets/icons/icons';
import { marketPerformaceIndicator } from '../../assets/images/images';
import { formatDate } from '../../utils';
import { Loader } from '../Loader';

export const Performance = () => {
  const { bitcoin, isLoadingPerformance } = useMarketPerformance();

  function formatDateToString(dateString) {
    return new Date(dateString).toLocaleDateString();
  }

  const currentDate = new Date();

  const athDate = new Date(formatDateToString(bitcoin?.ath_date));
  const atlDate = new Date(formatDateToString(bitcoin?.atl_date));

  return (
    <div className="pt-6 pl-6 pr-[26px] pb-[53.2px] bg-white w-full flex flex-col gap-6">
      <h2 className="text-[var(--black)] text-2xl leading-[28.8px]">
        Performance
      </h2>
      {isLoadingPerformance && (
        <div className="grid place-items-center">
          <Loader />
        </div>
      )}
      {!isLoadingPerformance && (
        <>
          <section className="flex flex-col gap-[15px]">
            <div className="flex gap-[56px] items-center flex-wrap">
              <div className="flex flex-col gap-[10px] text-[var(--gray)] max-w-[100px] w-full">
                <p className="text-[13.78px] leading-5 ">Today's Lows</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.low_24h}
                </p>
              </div>
              <img
                src={marketPerformaceIndicator}
                alt=""
                className="max-w-[482.8px] w-full"
              />
              <div className="flex flex-col gap-[10px] text-[var(--gray)]">
                <p className="text-[13.78px] leading-5 ">Today's High</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.high_24h}
                </p>
              </div>
            </div>
            <div className="flex gap-[56px] items-center flex-wrap">
              <div className="flex flex-col gap-[10px] text-[var(--gray)] max-w-[100px] w-full">
                <p className="text-[13.78px] leading-5 ">52W Lows</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.low_24h}
                </p>
              </div>
              <img
                src={marketPerformaceIndicator}
                alt=""
                className="max-w-[482.8px] w-full"
              />
              <div className="flex flex-col gap-[10px] text-[var(--gray)]">
                <p className="text-[13.78px] leading-5 ">52W High</p>
                <p className="text-[15.63px] font-medium leading-[22px]">
                  {bitcoin?.high_24h}
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex gap-[6px] font-semibold text-lg leading-5">
              <h2 className="text-[var(--gray)]">Fundamentals</h2>
              <img
                src={Infographic}
                alt=""
                className="w-[16.67px] h-[16.67px]"
              />
            </div>
            <div className="flex justify-between gap-[98.83px]">
              <div className="max-w-[344px] w-full">
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Bitcoin Price</p>
                  <p className="text-[#111827]">${bitcoin?.current_price}</p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">24h Low / 24h High</p>
                  <p className="text-[#111827]">
                    ${bitcoin?.high_24h} / ${bitcoin?.low_24h}
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">7d Low / 7d High</p>
                  <p className="text-[#111827]">$16,382.07 / $16,874.12</p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Trading Volume</p>
                  <p className="text-[#111827]">{bitcoin?.total_volume}</p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Market Cap Rank</p>
                  <p className="text-[#111827]">{bitcoin?.market_cap_rank}</p>
                </div>
              </div>
              {/* Right */}
              <div className="max-w-[344px] w-full">
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Market Cap</p>
                  <p className="text-[#111827]">${bitcoin?.market_cap}</p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Market Cap Dominance</p>
                  <p className="text-[#111827]">
                    ${bitcoin?.market_cap_change_percentage_24h.toFixed(3)}%
                  </p>
                </div>
                <div className="flex justify-between py-4 text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">Volume / Market Cap</p>
                  <p className="text-[#111827]">$16,382.07 / $16,874.12</p>
                </div>
                <div className="flex justify-between py-[6.5px] items-center pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">All-Time High</p>
                  <div>
                    <div>
                      <div className="flex gap-1 text-sm font-medium leading-5 justify-end">
                        <p className="text-[#111827]">${bitcoin?.ath}</p>
                        <span
                          className={
                            bitcoin?.ath_change_percentage < 0
                              ? 'text-[#F7324C]'
                              : 'text-[#0FBA83]'
                          }
                        >
                          {bitcoin?.ath_change_percentage}%
                        </span>
                      </div>

                      <p className="text-[11.2px] leading-5 text-[#111827]">
                        {formatDate(bitcoin?.ath_date)} (
                        {`about ${
                          currentDate.getFullYear() - athDate.getFullYear()
                        } years`}
                        )
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-[6.5px] items-center text-sm font-medium leading-5 pr-3 border-b border-b-[#D3E0E6]">
                  <p className="text-[#768396]">All-Time Low</p>
                  <div>
                    <div className="flex gap-1 justify-end">
                      <p className="text-[#111827]">${bitcoin?.atl}</p>
                      <span
                        className={
                          bitcoin?.atl_change_percentage < 0
                            ? 'text-[#F7324C]'
                            : 'text-[#0FBA83]'
                        }
                      >
                        {bitcoin?.atl_change_percentage}%
                      </span>
                    </div>

                    <p className="text-[11.2px] leading-5 text-[#111827]">
                      {formatDate(bitcoin?.atl_date)} (
                      {`about ${
                        currentDate.getFullYear() - atlDate.getFullYear()
                      } years`}
                      )
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
