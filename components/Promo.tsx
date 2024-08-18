import shoes from "@/data.json";
import Image from "next/image";
import ShopCollectionButton from "./ShopCollectionButton";

export default function Promo() {
  const lastSevenShoes = shoes.slice(-7);

  return (
    <div className="relative overflow-hidden border-b border-t bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Step into Savings!
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              You&apos;re just a click away from savings! Shop now and you might
              just bag a 10% discount code.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 overflow-hidden rounded-lg border sm:opacity-0 lg:opacity-100">
                        <Image
                          src={lastSevenShoes[0].image}
                          alt={lastSevenShoes[0].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg border">
                        <Image
                          src={lastSevenShoes[1].image}
                          alt={lastSevenShoes[1].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 overflow-hidden rounded-lg border">
                        <Image
                          src={lastSevenShoes[2].image}
                          alt={lastSevenShoes[2].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full border object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg border">
                        <Image
                          src={lastSevenShoes[3].image}
                          alt={lastSevenShoes[3].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg border">
                        <Image
                          src={lastSevenShoes[4].image}
                          alt={lastSevenShoes[4].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-52 overflow-hidden rounded-lg border">
                        <Image
                          src={lastSevenShoes[5].image}
                          alt={lastSevenShoes[5].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-52 overflow-hidden rounded-lg border">
                        <Image
                          src={lastSevenShoes[6].image}
                          alt={lastSevenShoes[6].name}
                          width={176}
                          unoptimized
                          height={176}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ShopCollectionButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
