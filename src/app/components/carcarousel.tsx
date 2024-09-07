"use client";
import React from "react";
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

type PropType = {
  slides: { src: string; title: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
        <div className="mt-20">
          <div className="embla">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex items-center">
                {slides.map((slide, index) => (
                  <div className="embla__slide" key={index}>
                    <div className="car_box text-center">
                      <figure className="mb-3">
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          className="mx-auto"
                          width={400}
                          height={300}
                        />
                      </figure>
                      <h3
                        className={`${libreBaskerville.className} text-[#f5f5f5] bg-[#008b8b] text-[30px] leading-[28px] h-[84px] flex items-center justify-center flex-wrap mt-[30px] p-0`}
                      >
                        {slide.title}
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
      </div>
    </section>
  );
};

export default EmblaCarousel;
