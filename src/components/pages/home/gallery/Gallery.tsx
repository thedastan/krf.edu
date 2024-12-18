"use client";
import { useLanguageStore } from "@/stores/useLanguageStore";
import scss from "./Gallery.module.scss";
import Image from "next/image";
import { useGetGalleryQuery } from "@/redux/api/catalog";
import { useState, useEffect } from "react";

// Убедитесь, что типы соответствуют
namespace GALLERY {
  export type GetGalleryRes = {
    id: number;
    image: string;
  }[];
}

const Gallery = () => {
  const { t } = useLanguageStore();

  // Указываем точный тип данных
  const { data, error, isLoading } = useGetGalleryQuery() as {
    data: GALLERY.GetGalleryRes | undefined;
    error: unknown;
    isLoading: boolean;
  };

  // Типизация состояния
  const [visibleImages, setVisibleImages] = useState<GALLERY.GetGalleryRes>([]);

  // Фильтрация корректных изображений
  useEffect(() => {
    if (data) {
      const validImages = data.filter((el) => el.image && el.image.startsWith("http"));
      setVisibleImages(validImages);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading gallery</div>;
  }

  return (
    <div className={scss.Gallery}>
      <div className="container">
        <h1>{t("Gallery.title")}</h1>
        <div className={scss.contant}>
          {visibleImages.map((el) => (
            <div key={el.id} className={scss.box}>
              <div className={scss.image}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
