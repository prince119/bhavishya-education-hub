import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryCampus from "@/assets/gallery-campus.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryCeremony from "@/assets/gallery-ceremony.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryAnnualDay from "@/assets/gallery-annual-day.jpg";
import galleryGroup from "@/assets/gallery-group.jpg";

const galleryItems = [
  { img: galleryCampus, title: "Our Campus", desc: "Modern infrastructure for quality education" },
  { img: galleryLab, title: "Computer Lab", desc: "State-of-the-art lab with latest systems" },
  { img: galleryCeremony, title: "Certificate Ceremony", desc: "Celebrating student achievements" },
  { img: galleryClassroom, title: "Classroom Sessions", desc: "Interactive learning environment" },
  { img: galleryAnnualDay, title: "Annual Day", desc: "Cultural performances & celebrations" },
  { img: galleryGroup, title: "Our Team", desc: "Dedicated faculty and staff" },
];

const GallerySection = () => {
  const [current, setCurrent] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = galleryItems.length - visibleCount;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">Our Gallery</h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">Glimpses of life at Bhavishya Computer Education</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {galleryItems.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading font-bold text-white text-lg">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {current > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {current < maxIndex && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-muted transition-colors z-10"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
