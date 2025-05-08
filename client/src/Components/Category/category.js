import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  CategorySection,
  Containers,
  CategoryCol,
  CategoryImage
} from './style/category';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CategoryNames = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryImageMap = {
    Wireless: "/category-images/Wireless.webp",
    Electronic: "/category-images/Electronic.webp",
    Headphones: "/category-images/Headphones.webp",
    Fitness: "/category-images/Fitness.webp",
    Others: "/category-images/Others.webp",
    Default: "/category-images/product-7.webp",
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://hari-1-cbck.onrender.com/api/get-all');
        const products = res.data.Products;

        const unique = {};
        products.forEach(product => {
          const cat = product.category;
          if (cat?.name && !unique[cat.name]) {
            unique[cat.name] = cat;
          }
        });

        setCategories(Object.values(unique));
      } catch (err) {
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategorySection>
      <Containers>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          style={{ width: '100%' }}
        >
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <CategoryCol>
                    <Skeleton height={210} width={'100%'} />
                    <p><Skeleton width={100} /></p>
                  </CategoryCol>
                </SwiperSlide>
              ))
            : categories.map((category, index) => (
                <SwiperSlide key={index}>
                  <CategoryCol>
                    <Link to={`/products?category=${category.name}`}>
                      <CategoryImage
                        src={`https://hari-1-cbck.onrender.com${categoryImageMap[category.name] || categoryImageMap.Default}`}
                        alt={category.name}
                      />
                      <p>{category.name}</p>
                    </Link>
                  </CategoryCol>
                </SwiperSlide>
              ))
          }
        </Swiper>
      </Containers>
    </CategorySection>
  );
};

export default CategoryNames;
