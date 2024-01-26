/* eslint-disable react/no-unescaped-entities */
// components/BanyaSection.js
"use client";

import Image from "next/image";
import React, { use, useEffect } from "react";

const BanyaSection = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    let int = setTimeout(() => {
      setIsVisible(true);
    }, 1000 * 60);
    return () => clearTimeout(int);
  }, []);

  return (
    <>
      {isVisible ? (
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
              Уникальные мобильные бани
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Баня 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/banya1.jpg"
                  alt="Мобильная баня 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Мобильная баня "Печка-Гигант"
                  </h3>
                  <p className="text-gray-700">
                    Баня на колесах: купи сегодня, купайся завтра!
                  </p>
                </div>
              </div>
              {/* Баня 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/banya2.jpg"
                  alt="Мобильная баня 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Мобильная баня "Веселый деревенский двор"
                  </h3>
                  <p className="text-gray-700">
                    Перевозная баня от Троцкой Нины: дешево, быстро и
                    качественно!
                  </p>
                </div>
              </div>
              {/* Баня 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/banya3.jpg"
                  alt="Мобильная баня 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Мобильная баня "Легкая как пух"
                  </h3>
                  <p className="text-gray-700">
                    Не хватает места для бани? Закажи перевозную баню у Нины
                    Троцкой!
                  </p>
                </div>
              </div>
            </div>
            {/* Отельный блок */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Перевозная баня - идеальный подарок для себя и своих близких!
              </h2>
              <p className="text-gray-700">
                Троцкая Нина знает толк в банях: купи перевозную баню и
                наслаждайся паром!
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div className="">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
              Уникальные мобильные бани
            </h2>
            <div className="">
              <Image
                src="/figa.webp"
                alt="русский кукиш"
                width={600}
                height={600}
              />
              <p className="text-3xl p-4 ">
                Походу Нина не заплатила за хостинг сайта)
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BanyaSection;
