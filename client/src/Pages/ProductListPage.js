import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductPopup from "../Components/Product/productPopupp";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRequireAuth } from "../Context/useRequireAuth";

import {
    BreadcrumArea,
    Containers,
    Row,
    BreadCol,
    BreadcrumbContent,
    BreadIcon,
    BreadcrumItem,
    Breadcrumdvd,
    ShopArea,
    ShopCol,
    ShopTop,
    ShopFilterCol,
    ShopResult,
    ShopSort,
    ShopSortItem,
    ShopSortTab,
    SortNav,
    NavLink,
    SortSelect,
    SortList,
    SortListItem,
    ShopMain,
    ShopFilter,
    ShopProductCol,
    Sidebar,
    CategoryFilter,
    CategoryItem,
    PaginationCol,
    PagList,
    PagItem,
    PagButton,
    PagSpan
} from './style/productList';


import {
    ProductSection,
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
    ProductPricing,
    ProductTitle,
    ProductBadge,
    Hasnew,
    HasOffer
} from '../Components/Product/style/product';

import { useCart } from '../Context/cartContent'; // ✅ Import useCart
import { Link } from 'react-router-dom';


const ITEMS_PER_PAGE = 9;

export function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [sortOption, setSortOption] = useState('Short Filtering');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { dispatch } = useCart(); // ✅ Get dispatch from context

    // ✅ Add to cart handler
    const handleAddToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.imageUrl, // Assumes imageUrl has full or relative path
            },
        });

        toast.success(`${product.name} added to cart!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    const handleAddToWishlist = (product) =>{
        dispatch({
          type: 'ADD_TO_WISHLIST',
          payload:{
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.imageUrl,
          },
        });
    
        toast.success(`${product.name} added to Wishlist!`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory, sortOption]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortOption]);

    const requireAuth = useRequireAuth()

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get-all');
            if (response.data.status) {
                setProducts(response.data.Products);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category.name === selectedCategory)
        : products;

    const sortedProducts = (() => {
        switch (sortOption) {
            case 'Latest Product':
                return filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            case 'Price low to high':
                return filteredProducts.sort((a, b) => a.price - b.price);
            case 'Price high to low':
                return filteredProducts.sort((a, b) => b.price - a.price);
            default:
                return filteredProducts;
        }
    })();

    const totalProducts = sortedProducts.length;
    const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = sortedProducts.slice(startIndex, endIndex);

    const uniqueCategories = Array.from(
        new Set(products.map((item) => item.category.name))
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo(0, 0);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.sort-select')) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <>
            <BreadcrumArea>
                <Containers>
                    <Row>
                        <BreadCol>
                            <BreadcrumbContent>
                                <BreadIcon>
                                    <svg width="18" height="15"><path d="..." fill="currentColor" /></svg>
                                </BreadIcon>
                                <BreadcrumItem><Link to="/">Home</Link></BreadcrumItem>
                                <Breadcrumdvd>&gt;</Breadcrumdvd>
                                <BreadcrumItem><span>Products</span></BreadcrumItem>
                            </BreadcrumbContent>
                        </BreadCol>
                    </Row>
                </Containers>
            </BreadcrumArea>

            <ShopArea>
                <Containers>
                    <ShopTop>
                        <Row style={{ alignItems: "center" }}>
                            <ShopCol>
                                <ShopResult>
                                    Showing {startIndex + 1}–{Math.min(endIndex, totalProducts)} of {totalProducts} results
                                </ShopResult>
                            </ShopCol>
                            <ShopFilterCol>
                                <ShopSort>
                                    <ShopSortItem>
                                        <ShopSortTab>
                                            <SortNav>
                                                <NavLink>
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.65 6.868V2.782C19.65 1.513 19.074 1 17.643 1H14.007C12.576 1 12 1.513 12 2.782V6.859C12 8.137 12.576 8.641 14.007 8.641H17.643C19.074 8.65 19.65 8.137 19.65 6.868Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </NavLink>
                                                <NavLink>
                                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 8H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 15H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                </NavLink>
                                            </SortNav>
                                        </ShopSortTab>
                                    </ShopSortItem>
                                    <ShopSortItem>
                                        <SortSelect
                                            className={`sort-select ${isSortOpen ? 'open' : ''}`}
                                            onClick={() => setIsSortOpen(prev => !prev)}
                                        >
                                            <span className='current'>{sortOption}</span>
                                            <SortList>
                                                <SortListItem onClick={() => setSortOption('Short Filtering')}>Short Filtering</SortListItem>
                                                <SortListItem onClick={() => setSortOption('Latest Product')}>Latest Product</SortListItem>
                                                <SortListItem onClick={() => setSortOption('Price low to high')}>Price low to high</SortListItem>
                                                <SortListItem onClick={() => setSortOption('Price high to low')}>Price high to low</SortListItem>
                                            </SortList>
                                        </SortSelect>
                                    </ShopSortItem>
                                </ShopSort>
                            </ShopFilterCol>
                        </Row>
                    </ShopTop>

                    <ShopMain>
                        <Row>
                            <ShopFilter>
                                <Sidebar>
                                    <CategoryFilter>
                                        <CategoryItem
                                            className={selectedCategory === null ? 'active' : ''}
                                            onClick={() => setSelectedCategory(null)}
                                        >
                                            All Categories
                                        </CategoryItem>
                                        {uniqueCategories.map((category, index) => (
                                            <CategoryItem
                                                key={index}
                                                className={selectedCategory === category ? 'active' : ''}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </CategoryItem>
                                        ))}
                                    </CategoryFilter>
                                </Sidebar>
                            </ShopFilter>

                            <ShopProductCol>
                                <ProductSection style={{ padding: "0px" }}>
                                    <Containers>
                                        <ProductTab>
                                            <Row>
                                                {currentItems.map(product => (
                                                    <ProductItemWrap key={product._id} style={{ width: "33.33%" }}>
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
                                                                    <ActionButton onClick={() => requireAuth(() => handleAddToWishlist(product))}>
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
                                                                <ProductTitle className="relatedTitle" style={{fontSize: "18px", fontWeight: "600", marginBottom: "10px"}}>
                                                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                                                </ProductTitle>
                                                                <ProductPricing>${product.price}</ProductPricing>
                                                            </ProductContent>
                                                        </ProductItem>
                                                    </ProductItemWrap>
                                                ))}
                                            </Row>

                                            {/* Pagination */}
                                            <Row>
                                                <PaginationCol>
                                                    <PagList>
                                                        <PagItem>
                                                            <PagButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                                                <PagSpan>Prev</PagSpan>
                                                            </PagButton>
                                                        </PagItem>
                                                        {[...Array(totalPages).keys()].map(page => (
                                                            <PagItem key={page + 1}>
                                                                <PagButton
                                                                    onClick={() => handlePageChange(page + 1)}
                                                                    className={page + 1 === currentPage ? 'active' : ''}
                                                                >
                                                                    {page + 1}
                                                                </PagButton>
                                                            </PagItem>
                                                        ))}
                                                        <PagItem>
                                                            <PagButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                                                <PagSpan>Next</PagSpan>
                                                            </PagButton>
                                                        </PagItem>
                                                    </PagList>
                                                </PaginationCol>
                                            </Row>
                                        </ProductTab>
                                    </Containers>
                                </ProductSection>
                            </ShopProductCol>
                        </Row>
                    </ShopMain>
                </Containers>
            </ShopArea>

            {selectedProduct && <ProductPopup product={selectedProduct} onClose={handleClosePopup} />}
            <ToastContainer />
        </>
    );
}
