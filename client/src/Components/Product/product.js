import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductPopup from "./productPopupp"; // Import the popup component
import {
  ProductSection,
  Containers,
  Row,
  ProductTab,
  ProductItemWrap,
  ProductItem,
  ProductThumb,
  ProImage,
  ProductActions,
  ActionButton,
  ProductToolTip,
  ProductAdd,
  ProductAddButton,
  ProductContent,
  ProductTitle,
  ProductPricing,
  ProductBadge,
  Hasnew,
  HasOffer,
  TopCol,
  SectionTitle,
  Title,
  ProductTabber,
  TabberNav,
  TabberList,
  TabberButton
} from './style/product';
import { Link } from "react-router-dom";
import { useCart } from '../../Context/cartContent';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRequireAuth } from '../../Context/useRequireAuth'


export function Products() {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [tabList, setTabList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // New state for selected product
  const { dispatch } = useCart(); 
  const requireAuth = useRequireAuth()


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://hari-1-cbck.onrender.com/api/get-all');
        const allProducts = response.data.Products;
        setProducts(allProducts);

        const sorts = allProducts
          .map(product => product.sort)
          .filter((value, index, self) => value && self.indexOf(value) === index);

        setTabList(sorts);
        console.log(sorts)

        if (sorts.length > 0) {
          setSelectedSort(sorts[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedSort
    ? products.filter(product => product.sort === selectedSort)
    : products;

  const handleTabClick = (sort) => {
    setSelectedSort(sort);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product to show the popup
  };

  const handleClosePopup = () => {
    setSelectedProduct(null); // Close the popup by setting the product to null
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  

  // ✅ Add to cart handler
  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        _id: product._id,
        name: product.title,
        price: product.price,
        image: product.imageUrl, // Assumes imageUrl has full or relative path
      },
    });

    toast.success(`${product.title} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const handleWishlist = (items) =>{
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload:{
        _id: items._id,
        name: items.title,
        price: items.price,
        image: items.imageUrl
      },
    });

    toast.success(`${items.title} added to Wishlist!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    })
  }

  return (
    <ProductSection>
      <Containers>
        <Row>
          <TopCol>
            <SectionTitle>
              <Title>Popular Products</Title>
            </SectionTitle>
          </TopCol>

          <TopCol>
            <ProductTabber>
              <TabberNav>
                {tabList.map((sort, index) => (
                  <TabberList key={index}>
                    <TabberButton
                      onClick={() => handleTabClick(sort)}
                      className={selectedSort === sort ? 'active' : ''}
                    >
                      {sort}
                    </TabberButton>
                  </TabberList>
                ))}
              </TabberNav>
            </ProductTabber>
          </TopCol>
        </Row>

        <ProductTab>
          <Row>
            {filteredProducts.map((product) => (
              <ProductItemWrap key={product._id}>
                <ProductItem>
                  <ProductThumb>
                    <Link to={`/product/${product._id}`}>
                      <ProImage
                        src={`${product.imageUrl}`}
                        alt={product.title}
                      />
                    </Link>

                    {product.sale && (
                      <ProductBadge>
                        <Hasnew>Sale</Hasnew>
                        <HasOffer>{product.salePercent}%</HasOffer>
                      </ProductBadge>
                    )}

                    <ProductActions>
                      <ActionButton onClick={() => requireAuth(() => handleWishlist(product))}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.60361 7.98635C2.83627 11.8048 7.70625 14.8923 9.00046 15.6565C10.2991 14.8844 15.2042 11.7628 16.3973 7.98985C17.1807 5.55102 16.4536 2.46177 13.5645 1.53473C12.1648 1.08741 10.5321 1.35966 9.4049 2.22804C9.16927 2.40837 8.8422 2.41187 8.60481 2.23329C7.41084 1.33952 5.85111 1.07778 4.42941 1.53473C1.5447 2.4609 0.82023 5.55014 1.60361 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path>
                        </svg>
                        <ProductToolTip>Add To Wishlist</ProductToolTip>
                      </ActionButton>

                      <ActionButton onClick={() => handleProductClick(product)}>
                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.49943 5.34978C8.23592 5.34978 7.20896 6.37595 7.20896 7.63732C7.20896 8.89774 8.23592 9.92296 9.49943 9.92296C10.7629 9.92296 11.7908 8.89774 11.7908 7.63732C11.7908 6.37595 10.7629 5.34978 9.49943 5.34978M9.49941 11.3456C7.45025 11.3456 5.78394 9.68213 5.78394 7.63738C5.78394 5.59169 7.45025 3.92725 9.49941 3.92725C11.5486 3.92725 13.2158 5.59169 13.2158 7.63738C13.2158 9.68213 11.5486 11.3456 9.49941 11.3456" fill="currentColor"></path>
                          <path d="M1.49145 7.63683C3.25846 11.5338 6.23484 13.8507 9.50001 13.8517C12.7652 13.8507 15.7416 11.5338 17.5086 7.63683C15.7416 3.7408 12.7652 1.42386 9.50001 1.42291C6.23579 1.42386 3.25846 3.7408 1.49145 7.63683V7.63683ZM9.50173 15.2742H9.49793H9.49698C5.56775 15.2714 2.03943 12.5219 0.0577129 7.91746C-0.0192376 7.73822 -0.0192376 7.53526 0.0577129 7.35601C2.03943 2.75248 5.5687 0.00306822 9.49698 0.000223018C9.49888 -0.000725381 9.49888 -0.000725381 9.49983 0.000223018C9.50173 -0.000725381 9.50173 -0.000725381 9.50268 0.000223018C13.4319 0.00306822 16.9602 2.75248 18.942 7.35601C19.0199 7.53526 19.0199 7.73822 18.942 7.91746C16.9612 12.5219 13.4319 15.2714 9.50268 15.2742H9.50173Z" fill="currentColor"></path>
                        </svg>
                        <ProductToolTip>Quick view</ProductToolTip>
                      </ActionButton>
                    </ProductActions>

                    <ProductAdd>
                      <ProductAddButton onClick={() => requireAuth(() => handleAddToCart(product))}>
                        Add to Cart
                      </ProductAddButton>
                    </ProductAdd>
                  </ProductThumb>

                  <ProductContent>
                    <ProductTitle>
                      <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </ProductTitle>
                    <ProductPricing>
                      ${product.price}
                      {product.sort}
                    </ProductPricing>
                  </ProductContent>
                </ProductItem>
              </ProductItemWrap>
            ))}
          </Row>
        </ProductTab>
      </Containers>

      {selectedProduct && <ProductPopup product={selectedProduct} onClose={handleClosePopup} />}
      <ToastContainer />
    </ProductSection>
  );
}
