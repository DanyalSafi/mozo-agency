import React, { useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import './card.css'; // Import Tailwind CSS customizations if needed

const Card = (props) => {
  const [openStackExpandBar, setOpenStackExpandBar] = useState(false);

  return (
    <div className="card p-0 rounded-lg bg-gray-10 border border-gray-300 transition-all duration-200 overflow-hidden flex flex-col justify-between animate-zoomIn">
      <div className="picture h-64 overflow-hidden">
        <img src={props.image} alt={props.title} className="w-full h-full object-cover" />
      </div>
      <div className="card__details flex flex-col justify-between p-4">
        <div className="card__details__top border-none">
          <h2 className="title text-lg font-semibold mb-2">{props.title}</h2>
        </div>
        {/* <div className="card__details__middle pb-4 border-b border-gray-300 h-40 overflow-auto">
          <p className="description text-sm">{props.data.description}</p>
        </div> */}
        <div className="card__details__bottom flex flex-col justify-between py-4">
          <div className="stack__container flex gap-4">
            {/* <div className="stack__left border border-gray-300 px-2 rounded bg-gray-100 flex items-center">
              Stack
            </div> */}
            {/* <div className="stack__right flex-1">
              <div className="stack__box__container grid grid-cols-2 gap-2">
                {props.stack.slice(0, 4).map((list, index) => (
                  <div key={index} className="stack__box">
                    <div className="stack__icon__container flex flex-col items-center gap-1 text-sm">
                      <span className="stack__icon" style={{ color: list.iconColor }}>
                        {list.icon}
                      </span>
                      <span className="stack__name">{list.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              {props.stack.length > 4 && (
                <div className="stack__view__more w-full mt-4 relative text-sm cursor-pointer" onClick={() => setOpenStackExpandBar(!openStackExpandBar)}>
                  <div className="more__btn flex items-center justify-center"></div>
                  <div className={`stack__expand__box ${openStackExpandBar ? 'block' : 'hidden'} absolute bottom-full right-0 p-8 bg-gray-200 rounded border border-gray-300 transition-all duration-300`}>
                    <h3 className="title mb-4 text-sm font-medium">More Stack Used</h3>
                    <div className="stack__box__container grid grid-cols-2 gap-2">
                      {props.stack.slice(4).map((list, index) => (
                        <div key={index} className="stack__box">
                          <div className="stack__icon__container flex flex-col items-center gap-1 text-sm">
                            <span className="stack__icon" style={{ color: list.iconColor }}>
                              {list.icon}
                            </span>
                            <span className="stack__name">{list.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
