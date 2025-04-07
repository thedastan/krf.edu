"use client";
import { useLanguageStore } from "@/stores/useLanguageStore";
import scss from "./Gallery.module.scss";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/catalog";
import { useState, useEffect } from "react";

// Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useTranslations } from "next-intl";

namespace GALLERY {
  export type GetGalleryRes = {
    id: number;
    image: string;
  }[];
}

const Gallery = () => {

  const t = useTranslations("Gallery");

  const { data, error, isLoading } = useGetGalleryQuery() as {
    data: GALLERY.GetGalleryRes | undefined;
    error: unknown;
    isLoading: boolean;
  };

  const [visibleImages, setVisibleImages] = useState<GALLERY.GetGalleryRes>([]);

  useEffect(() => {
    if (data) {
      const validImages = data.filter((el) => el.image && el.image.startsWith("http"));
      setVisibleImages(validImages);
    }
  }, [data]);

  // Fancybox инициализация
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: {
        showOnStart: false,
      },
    });
  
    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, [visibleImages]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading gallery</div>;

  return (
    <div className={scss.Gallery}>
      <div className="container">
        <h1>{t("title")}</h1>
        <div className={scss.contant}>
          {visibleImages.map((el) => (
            <div key={el.id} className={scss.box}>
              <div className={scss.image}>
                <a href={el.image} data-fancybox="gallery">
                  <Image
                    className={scss.img}
                    src={el.image}
                    alt={`Image ${el.id}`}
                    width={500}
                    height={200}
                    objectFit="cover"
                    onError={() =>
                      setVisibleImages((prev) => prev.filter((item) => item.id !== el.id))
                    }
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
