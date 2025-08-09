import Image from "next/image";

export default function Home() {
  return (
      <main>
          <div className="header justify-items-center">
              <h1>Paige Seafood</h1>
          </div>
          <div className="body justify-items-center">
              <h3>Body of Paige Seafood</h3>
              <Image src="/paigeseafood_store_image.jpg"
                     alt={"The storefront of the business Paige Seafood"}
                     width={600}
                     height={400}
              />
          </div>
          <div className="footer justify-items-center   ">
              <h3>Footer of Paige Seafood</h3>
          </div>
      </main>
  );
}
