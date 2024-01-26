import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Диалог о бане c "Ниной"
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8">
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Здравствуйте, я хочу купить баню по
            проекту «Нина».
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Отличный выбор! Баня «Нина» - это лучшая
            баня в мире!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Почему же?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Потому что она выполнена из бруса, имеет
            террасу и крышу, а также оснащена всем необходимым для комфортного
            отдыха.
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Ну и что?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Ну и ничего. Просто купите баню «Нина» и
            вы будете счастливы!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> А если я не куплю?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Тогда вы будете несчастны!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Почему?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Потому что вы не будете иметь баню
            «Нина»!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> А что такого в бане «Нина»?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Все! Баня «Нина» - это не просто баня, а
            целый стиль жизни!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Какой стиль жизни?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Стиль жизни банщика!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> А что такое банщик?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Банщик - это человек, который любит баню,
            пар, тепло и уют.
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> А я люблю баню, пар, тепло и уют!
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Тогда вы банщик!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Я банщик?
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Да, вы банщик!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Ура, я банщик!
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> И вы хотите купить баню «Нина»?
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Да, я хочу купить баню «Нина»!
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Тогда звоните нам прямо сейчас и мы
            построим ее для вас!
          </p>
          <p className="text-gray-700">
            <strong>Покупатель:</strong> Спасибо, я звоню!
          </p>
          <p className="text-gray-700">
            <strong>Продавец:</strong> Не за что, мы рады помочь!
          </p>
        </div>
      </div>
      <Link href="/" className="mt-12 text-center block">
        назад
      </Link>
    </section>
  );
};

export default BlogPage;
