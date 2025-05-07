import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  CategorySection,
  Containers,
  CategoryCol,
  CategoryImage
} from './style/category';

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
        const res = await axios.get('http://localhost:5000/api/get-all');
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
        {categories.map((category, index) => (
          <CategoryCol key={index}>
            <Link to={`/products?category=${category.name}`}>
              <CategoryImage
                // Use the category image map, fallback to Default if not found
                src={`http://localhost:5000${categoryImageMap[category.name]}`}
                alt={category.name}
              />
              <p>{category.name}</p>
            </Link>
          </CategoryCol>
        ))}
      </Containers>
    </CategorySection>
  );
};

export default CategoryNames;
