"use client";
import { useEffect } from "react";

export default function HomeCounterSection() {
  useEffect(() => {
    function animateValue(
      obj: HTMLElement,
      start: number,
      end: number,
      duration: number
    ): void {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const expertise = document.getElementById("expertise");
    const reservation = document.getElementById("reservation");
    const customer = document.getElementById("customer");

    if (expertise && reservation && customer) {
      animateValue(expertise, 0, 23, 5000);
      animateValue(reservation, 0, 125, 5000);
      animateValue(customer, 0, 99, 5000);
    }
  }, []);

  return (
    <section className="relative p-0 m-0 box-border">
      <div className="py-8 bg-teal-700">
        <div className="flex justify-center items-center gap-[15px] p-2.5 rounded-md text-center flex-wrap md:flex-nowrap">
          <div className="w-full p-2.5">
            <div>
              <h1 className="text-5xl text-gray-100 flex justify-center p-0 m-0">
                <div id="expertise">23</div>
                <span>+</span>
              </h1>
              <p className="mt-7 text-lg leading-7 font-semibold text-gray-100 uppercase m-0">
                Years of Expertise
              </p>
              <div className="w-[100px] h-[2px] bg-gray-100 my-5 mx-auto"></div>
            </div>
          </div>
          <div className="w-full p-2.5">
            <div>
              <h1 className="text-5xl text-gray-100 flex justify-center p-0 m-0">
                <div id="reservation">125</div>
                <span>k</span>
              </h1>
              <p className="mt-7 text-lg leading-7 font-semibold text-gray-100 uppercase m-0">
                Reservations Served
              </p>
              <div className="w-[100px] h-[2px] bg-gray-100 my-5 mx-auto"></div>
            </div>
          </div>
          <div className="w-full p-2.5">
            <div>
              <h1 className="text-5xl text-gray-100 flex justify-center p-0 m-0">
                <div id="customer">99</div>
                <span>%</span>
              </h1>
              <p className="mt-7 text-lg leading-7 font-semibold text-gray-100 uppercase m-0">
                Satisfied Customers
              </p>
              <div className="w-[100px] h-[2px] bg-gray-100 my-5 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
