// Carousel Component
"use client"
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
    images: pics,
    autoSlide = false,
    arrowBlack = false,
    autoSlideInterval = 5000,
}) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? pics.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === pics.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <>
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform ease-out duration-500"
                    style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                    {pics.map((x, index) => (
                        <img
                            key={`carousel-${index}`}
                            src={x}
                            className=""
                            alt={`slide-${index}`}
                        />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button
                        onClick={prev}
                        className={`p-1 rounded-full shadow ${
                            arrowBlack ? "text-black" : "text-white"
                        }`}
                    >
                        <ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={next}
                        className={`p-1 rounded-full shadow ${
                            arrowBlack ? "text-black" : "text-white"
                        }`}
                    >
                        <ChevronRight size={40} />
                    </button>
                </div>

                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {pics.map((_, index) => (
                            <div
                                key={`indicator-${index}`}
                                className={`
                                    transition-all w-3 h-3 bg-white rounded-full
                                    ${curr === index ? "p-0.5" : "bg-opacity-50"}
                                `}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
