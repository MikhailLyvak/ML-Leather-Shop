import React from 'react'
import ProductImage from './product-image';


const images = [
  {
    alt: 'Ремінець для руки',
    description: 'Зручно та безбечно щодня',
    id: 1,
    image: '/images/product-images/1.png',
    title: 'Ремінець для руки',
  },
  {
    alt: 'Зовнішня кишеня',
    description: 'Швидкий доступ до смартфона',
    id: 2,
    image: '/images/product-images/2.png',
    title: 'Зовнішня кишеня',
  },
  {
    alt: 'Внутрішня організація',
    description: 'У кожної речі своє місце',
    id: 3,
    image: '/images/product-images/3.png',
    title: 'Внутрішня організація',
  },
  {
    alt: 'Ключі під рукою',
    description: 'Магнітний тримач всередині сумки',
    id: 4,
    image: '/images/product-images/4.png',
    title: 'Ключі під рукою',
  },
]

const ProductImages = () => {
  return (
    <section aria-labelledby="product-images-heading" className="mb-30 bg-[#DED8CC] py-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-5 sm:px-10">
        <div>
          <p className="m-0 text-base font-normal uppercase tracking-[0.2em] text-cognac font-gilroy">
            Деталі, які мають значення
          </p>
          <h2
            className="mt-4 m-0 font-serif text-5xl font-bold uppercase leading-none tracking-[0.02em] text-[#211E1A] [text-box:trim-both_cap_alphabetic]"
            id="product-images-heading"
          >
            ПРОДУМАНИЙ ДО ДРІБНИЦЬ
          </h2>
        </div>
        <p className="m-0 max-w-75 shrink-0 text-right font-gilroy text-base font-light leading-normal text-[#211E1A]">
          Кожен елемент має функцію - від швидкого доступу до телефона до окремих
          внутрішніх відділень.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4.5 px-5 sm:px-10 mt-10">
        {images.map((image) => (
          <ProductImage key={image.id} alt={image.alt} description={image.description} image={image.image} title={image.title} />
        ))}
      </div>
    </section>
  )
};

export default ProductImages;
