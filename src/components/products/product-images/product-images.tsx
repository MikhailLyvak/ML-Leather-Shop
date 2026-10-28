import ProductImage from "./product-image"

const images = [
  {
    alt: "Ремінець для руки",
    description: "Зручно та безпечно щодня",
    id: 1,
    image: "/images/product-images/1.png",
    title: "Ремінець для руки",
  },
  {
    alt: "Зовнішня кишеня",
    description: "Швидкий доступ до смартфона",
    id: 2,
    image: "/images/product-images/2.png",
    title: "Зовнішня кишеня",
  },
  {
    alt: "Внутрішня організація",
    description: "У кожної речі своє місце",
    id: 3,
    image: "/images/product-images/3.png",
    title: "Внутрішня організація",
  },
  {
    alt: "Ключі під рукою",
    description: "Магнітний тримач всередині сумки",
    id: 4,
    image: "/images/product-images/4.png",
    title: "Ключі під рукою",
  },
]

const ProductImages = () => {
  return (
    <section
      aria-labelledby="product-images-heading"
      className="bg-[#DED8CC] pt-10 pb-15 lg:mb-30 lg:py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2.5 px-[15px] text-center sm:px-10 lg:flex-row lg:justify-between lg:gap-10 lg:text-left">
        <div>
          <p className="m-0 font-gilroy text-xs font-normal uppercase tracking-[0.15em] text-cognac lg:text-base lg:tracking-[0.2em]">
            Деталі, які мають значення
          </p>
          <h2
            className="m-0 mt-px font-serif text-[24px] font-bold uppercase leading-[normal] tracking-normal text-[#211E1A] lg:mt-4 lg:text-5xl lg:leading-none lg:tracking-[0.02em] lg:[text-box:trim-both_cap_alphabetic]"
            id="product-images-heading"
          >
            ПРОДУМАНИЙ ДО ДРІБНИЦЬ
          </h2>
        </div>
        <p className="m-0 font-gilroy text-[13px] font-normal leading-normal text-[#211E1A]/70 lg:max-w-75 lg:shrink-0 lg:text-right lg:text-base lg:font-light lg:text-[#211E1A]">
          Кожен елемент має функцію - від швидкого доступу до телефона до
          окремих внутрішніх відділень.
        </p>
      </div>
      <div className="mx-auto mt-5 grid max-w-7xl grid-cols-2 gap-x-2.5 gap-y-5 px-[15px] sm:px-10 lg:mt-10 lg:grid-cols-4 lg:gap-x-4.5 lg:gap-y-0">
        {images.map((image) => (
          <ProductImage
            key={image.id}
            alt={image.alt}
            description={image.description}
            image={image.image}
            title={image.title}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductImages
