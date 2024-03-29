/* eslint-disable react/no-unescaped-entities */
// components/AboutSection.js

import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          О нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Немного о нас
            </h3>
            <p className="text-gray-700">
              Мы команда энтузиастов, преданная идее создания мобильных бань для
              всех! Наша основательница и главный вдохновитель - Нина Троцкая,
              заядлая любительница бань и страстная защитница парилочной
              культуры.
            </p>
            <p className="text-gray-700">
              Наша миссия - принести радость и комфорт всем, кто ценит душевные
              посиделки в атмосфере настоящей русской бани!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Немного о банях с Ниной
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Нина однажды устроила банное побоище... пар был без шансов!
              </li>
              <li>
                Если Нина начнет рассказывать анекдоты, даже пару не удержишь!
              </li>
              <li>
                Вечеринка в бане с Ниной? Всегда всплеск эмоций и пары смеха!
              </li>
              <li>
                Нина знает, как поднять температуру - не только в бане, но и на
                душе!
              </li>
              <li>
                Нина настолько любит бани, что ее резюме начинается со слов "Всю
                жизнь прожила в парной".
              </li>
              <li>
                Если Нина начинает посвистывать, это точно не свисток в парилке,
                а просто ее любимый шедевр!
              </li>
              <li>
                Нина может сделать пар в любое время, даже если за окном майский
                снег.
              </li>
              <li>Когда Нина готовит пар, небо тоже решает принять ванну!</li>
              <li>С Ниной в бане даже березовый веник зеленеет от волнения!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
