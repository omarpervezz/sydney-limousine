"use client";
import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/arrowbutton";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Title from "@/components/title";
import { libreBaskerville } from "@/lib/font";

type FleetCar = {
  image: string;
  name: string;
};

type PropType = {
  slides?: { image: string; name: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides = [], options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [fleet, setFleet] = useState<FleetCar[]>(slides);
  const [loader, setLoader] = useState(true);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Fetch fleet data when the component mounts
  useEffect(() => {
    const fetchFleet = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/fleet`,
          {
            cache: "no-store",
          }
        );
        const data: FleetCar[] = await res.json();
        setFleet(data);
        setLoader(false);
      } catch (error) {
        console.error("Failed to fetch fleet data:", error);
      }
    };

    fetchFleet();
  }, []);

  return (
    <section className="py-12">
      <div className="container px-8 md:px-10 lg:px-14 xl:px-16 mx-auto">
        <div className="text-center">
          <div className="titlepage">
            <Title text="Variety Of Cars" className="mb-2" />
            <span className="block text-gray-600 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </span>
          </div>
        </div>
        {loader ? (
          <div className="flex justify-center items-center">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-primary rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="mt-20">
            <div className="embla">
              <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex items-center">
                  {fleet.map((car, index) => (
                    <div className="embla__slide" key={index}>
                      <div className="car_box text-center">
                        <figure className="mb-3">
                          <Image
                            src={car.image}
                            alt={car.name}
                            className="w-[360px] h-[268px] object-cover mx-auto"
                            width={400}
                            height={400}
                          />
                        </figure>
                        <h3
                          className={`${libreBaskerville.className} text-[#f5f5f5] bg-[#008b8b] text-[30px] leading-[28px] h-[84px] flex items-center justify-center flex-wrap mt-[30px] p-0`}
                        >
                          {car.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="embla__controls">
                <div className="embla__buttons">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmblaCarousel;
