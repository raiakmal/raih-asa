"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const pointerDataRef = useRef({ x: 0, y: 0 });
  const wasDraggingRef = useRef(false);

  const slides = [
    {
      id: 1,
      image: "/assets/hero1.png",
      title: "Beasiswa Yayasan Bursa Malaysia",
      description:
        "Kesempatan untuk mahasiswa berprestasi dengan beasiswa penuh",
      url: "/beasiswa/yayasan-bursa-malaysia-1",
    },
    {
      id: 2,
      image: "/assets/hero2.png",
      title: "MRC Scholarship Awards",
      description: "Program beasiswa untuk berbagai bidang studi",
      url: "/beasiswa/mrc-scholarship-awards-2",
    },
    {
      id: 3,
      image: "/assets/hero3.png",
      title: "PHFoundation Scholarships",
      description: "Beasiswa eksklusif untuk mahasiswa berprestasi",
      url: "/beasiswa/phfoundation-scholarships-3",
    },
    {
      id: 4,
      image: "/assets/hero1.png",
      title: "Beasiswa Yayasan Bursa Malaysia",
      description:
        "Kesempatan untuk mahasiswa berprestasi dengan beasiswa penuh",
      url: "/beasiswa/yayasan-bursa-malaysia-4",
    },
    {
      id: 5,
      image: "/assets/hero2.png",
      title: "MRC Scholarship Awards",
      description: "Program beasiswa untuk berbagai bidang studi",
      url: "/beasiswa/mrc-scholarship-awards-5",
    },
    {
      id: 6,
      image: "/assets/hero3.png",
      title: "PHFoundation Scholarships",
      description: "Beasiswa eksklusif untuk mahasiswa berprestasi",
      url: "/beasiswa/phfoundation-scholarships-6",
    },
  ];

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
  }, [slides.length]);

  const scrollToSlide = (index) => {
    if (!carouselRef.current || !slideRefs.current[index]) return;

    const carousel = carouselRef.current;
    const slide = slideRefs.current[index];
    const carouselWidth = carousel.offsetWidth;
    const slideWidth = slide.offsetWidth;

    const centerPosition =
      slide.offsetLeft - (carouselWidth / 2 - slideWidth / 2);

    carousel.scrollTo({
      left: centerPosition,
      behavior: "smooth",
    });

    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      scrollToSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScrollEnd = () => {
      const scrollPosition = carousel.scrollLeft;
      const carouselWidth = carousel.offsetWidth;

      let closestSlideIndex = 0;
      let minDistance = Infinity;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const carouselCenter = scrollPosition + carouselWidth / 2;
        const distance = Math.abs(slideCenter - carouselCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSlideIndex = index;
        }
      });

      if (closestSlideIndex !== currentSlide) {
        setCurrentSlide(closestSlideIndex);
      }
    };

    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScrollEnd, 100);
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSlide]);

  // Detect pointer down/up for drag detection
  const handlePointerDown = (e) => {
    pointerDataRef.current = { x: e.clientX || 0, y: e.clientY || 0 };
    wasDraggingRef.current = false;
  };

  const handlePointerUp = (e) => {
    const deltaX = Math.abs((e.clientX || 0) - pointerDataRef.current.x);
    const deltaY = Math.abs((e.clientY || 0) - pointerDataRef.current.y);
    if (deltaX > 5 || deltaY > 5) {
      wasDraggingRef.current = true;
    }
  };

  return (
    <section className="relative w-full bg-[#f0f0ff] overflow-hidden py-8 md:py-12">
      <div className="relative w-full mx-auto">
        <div
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth px-[2%] md:px-[5%] py-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`flex-none w-[70%] md:w-[60%] mx-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 snap-center ${
                currentSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-70 scale-95"
              }`}
            >
              <Link
                href={wasDraggingRef.current ? "#" : slide.url}
                onClick={(e) => {
                  if (wasDraggingRef.current) {
                    e.preventDefault();
                    wasDraggingRef.current = false;
                  }
                }}
                className="block relative w-full aspect-[16/9] group"
              >
                <div className="relative w-full aspect-[16/9]">
                  <div className="absolute inset-0 bg-black/25 z-10" />
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 2}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-t from-black/70 to-transparent">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-shadow-black">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base max-w-2xl text-shadow-black">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === index ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}