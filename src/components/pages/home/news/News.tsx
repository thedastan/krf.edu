'use client'
import { useState } from "react";
import scss from "./News.module.scss";
import { useLanguageStore } from "@/stores/useLanguageStore";
import { useGetNewsQuery } from "@/redux/api/catalog";
import Image from "next/image";

const News = () => {
  const { t } = useLanguageStore();
  const { data } = useGetNewsQuery();
 

  

  

  return (
    <div className={scss.News}>
      <div className="container">
        <h1>{t("News.title")}</h1>
        <div className={scss.contant}>
          {data?.map((el, index) => (
            <div key={index} className={scss.box}>
              <div className={scss.image}>
                <Image
                  className={scss.img}
                  src={el.image}
                  alt="img"
                  width={500}   
                  height={350}  
                  objectFit="cover"
                />
              </div>
              <h2>{el.title}</h2>
              <p>{el.description}</p>

            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default News;
