"use client";

import React, { useState } from "react";
import Image from "next/image";
import scss from "./About.module.scss";

// Импорты изображений
import img1 from "@/assets/images/image3.png";
import img2 from "@/assets/images/dekan.jpeg";
import about_boy from "@/assets/images/about-boy.jpg";
import about_tich from "@/assets/images/about-ticher.jpg";

// RTK Query хуки
import { useGetStudentQuery, useGetTichCountQuery } from "@/redux/api/catalog";

// i18n
import { useTranslations } from "next-intl";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const t = useTranslations("About");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { data: studentsData } = useGetStudentQuery();
  const { data: teachersData } = useGetTichCountQuery();

  // Массив изображений для слайдера
  const sliderImages = [img1, img2];

  return (
    <div id="about" className={scss.About}>
      <div className="container">
        <div className={scss.line}></div>
        <div className={scss.content}>
          {/* Слайдер Swiper */}
          <div className={scss.images}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className={scss.swiper}
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className={scss.img}>
                    <Image
                      src={img}
                      alt={`Slide ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      placeholder="blur"
                      // blurDataURL="data:..." — если нужно, добавьте placeholder
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={scss.image_box}></div>
          </div>

          {/* Текстовая часть */}
          <div className={scss.text}>
            <h1>{t("title")}</h1>

            <div className={scss.box}>
              <div className={scss.box_img}>
                <div className={scss.img}>
                  <Image
                    src={about_boy}
                    alt="Boy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={scss.text}>
                <h1>{t("boy")}</h1>
                {studentsData?.map((el, index) => (
                  <h1 key={index}>{el.quantity_students}</h1>
                ))}
              </div>
            </div>

            <div className={scss.box}>
              <div className={scss.box_img}>
                <div className={scss.img}>
                  <Image
                    src={about_tich}
                    alt="Teacher"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className={scss.text}>
                <h1>{t("tich")}</h1>
                {teachersData?.map((el, index) => (
                  <h1 key={index}>{el.quantity_teachers}</h1>
                ))}
              </div>
            </div>

            <div className={scss.btn}>
              <button onClick={openModal}>{t("btn")}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className={scss.modal_overlay}>
          <div className={scss.modal_content}>
            <button className={scss.close_btn} onClick={closeModal}>
              {t("close")}
            </button>
            <p>{t("text")}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;