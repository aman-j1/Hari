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
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const CategoryNames = () => {
  const [categories, setCategories] = useState([]);

  // Category image mapping (image paths are relative to the public folder)
  const categoryImageMap = {
    Wireless: "/category-images/Wireless.webp",
    Electronic: "/category-images/Electronic.webp",
    Headphones: "/category-images/Headphones.webp",
    Fitness: "/category-images/Fitness.webp",
    Others: "/category-images/Others.webp",
    Default: "/category-images/product-7.webp", // fallback image
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('https://hari-1-cbck.onrender.com/api/get-all');
        const products = res.data.Products;
        console.log(res.data);

        // Extract unique categories
        const unique = {};
        products.forEach(product => {
          const cat = product.category;
          if (cat?.name && !unique[cat.name]) {
            unique[cat.name] = cat;
          }
        });

        setCategories(Object.values(unique)); // Array of unique categories
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategorySection>
      <Containers>
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          Navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          style={{ width: "100%" }}>
          {categories.map((category, index) => (
            <SwiperSlide>
              <CategoryCol key={index}>
                <Link to={`/products?category=${category.name}`}>
                  <CategoryImage
                    // Use the category image map, fallback to Default if not found
                    src={`https://hari-1-cbck.onrender.com${categoryImageMap[category.name]}`}
                    alt={category.name}
                  />
                  <p>{category.name}</p>
                </Link>
              </CategoryCol>
            </SwiperSlide>
          ))}
        </Swiper>
      </Containers>
    </CategorySection>
  );
};

export default CategoryNames;
