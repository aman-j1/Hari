import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext.js";
import { useCart } from '../../Context/cartContent.jsx';

import {
    Header, HeaderArea, HeaderSticky, ContainerFluid, MegaMenuWrap, Row, Logo, MenuSection, MainMenu, Ul,
    ListItem, MenuLink,
    Image,
    SubMenu,
    SubList,
    SubMenuLink,
    RightSection,
    BottomRight,
    HeaderSearch,
    Form,
    SearchInput,
    Input,
    Button,
    Actions,
    ActionList,
    ActionItem,
    ActionLink,
    ActionIcon,
    ActionButton,
    Count,
    CartMini,
    CartMiniWrap,
    CartTopWrap,
    CartTop,
    CartTitle,
    CartTitleH4,
    CartClose,
    CartCloseButton,
    CartEmpty,
    CartEmptyImage,
    CartText,
    CartLink,
    CartOverlay,
    CartWidget,
    CartWidgetItem,
    CartThumb,
    CartThumbImg,
    CartContent,
    CartConTitle,
    CartPriceWrapper,
    CartPrice,
    CartQuantity,
    RemoveBtn,
    CartCheckout,
    CartCheckoutTitle,
    CartCheckoutTitleH4,
    VeiwCart,
    CheckputBtn,
    HeaderMobileMenu,
    Hamburger,
    Overlay
} from "./style/header.js";

import { menuItems } from "./Menu.js";
import headerLogo from "../../Image/headerLogo.svg";
import EmptyCart from '../../Image/empty-cart.webp';
import './style/header.css'

function Headers() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // clears context and localStorage
        navigate("/login");
    };

    const [scrolled, setScrolled] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    const { wishlist, cart, dispatch } = useCart();

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { _id: id } });
    };


    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleSubmenu = (id) => {
        setActiveSubmenu(prev => (prev === id ? null : id));
    };
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header className={scrolled ? "headerSticky" : "null"}>
                <HeaderArea>
                    <HeaderSticky>
                        <ContainerFluid>
                            <MegaMenuWrap>
                                <Row>
                                    <Logo>
                                        <div className="logo">
                                            <Link to="/">
                                                <Image src={headerLogo} alt="Header Logo" />
                                            </Link>
                                        </div>
                                    </Logo>

                                    <MenuSection>
                                        <MainMenu>
                                            <nav>
                                                <Ul>
                                                    {menuItems.map((item) => (
                                                        <ListItem
                                                            key={item.id}
                                                            className={item.children ? "has-dropdown" : ""}
                                                        >
                                                            <MenuLink to={item.path}>{item.name}</MenuLink>
                                                            {item.children && (
                                                                <SubMenu className="submenu">
                                                                    {item.children.map((child) => (
                                                                        <SubList key={child.id}>
                                                                            <SubMenuLink to={child.path}>
                                                                                {child.name}
                                                                            </SubMenuLink>
                                                                        </SubList>
                                                                    ))}
                                                                </SubMenu>
                                                            )}
                                                        </ListItem>
                                                    ))}
                                                </Ul>
                                            </nav>
                                        </MainMenu>
                                    </MenuSection>

                                    <RightSection>
                                        <BottomRight>
                                            <HeaderSearch>
                                                <Form>
                                                    <SearchInput>
                                                        <Input placeholder="Search for products..." type="text" />
                                                        <Button type="submit">
                                                            <svg
                                                                width="17"
                                                                height="17"
                                                                viewBox="0 0 17 17"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M8.12492 15.2498C12.0599 15.2498 15.2498 12.0599 15.2498 8.12492C15.2498 4.18994 12.0599 1 8.12492 1C4.18994 1 1 4.18994 1 8.12492C1 12.0599 4.18994 15.2498 8.12492 15.2498Z"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M15.9999 16L14.4999 14.5"
                                                                    stroke="currentColor"
                                                                    strokeWidth="1.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </Button>
                                                    </SearchInput>
                                                </Form>
                                            </HeaderSearch>

                                            <Actions>
                                                <ActionList>
                                                    {/* User Info or Login */}
                                                    <ActionItem className="loginArea">
                                                        {user ? (
                                                            <ActionLink
                                                                as="div"
                                                                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                                                            >
                                                                <p className="inital"
                                                                    style={{
                                                                        backgroundColor: "#ccc",
                                                                        padding: "9px 13px",
                                                                        lineHeight: "1",
                                                                        borderRadius: "50%"
                                                                    }}
                                                                >{user.firstName ? user.firstName[0].toUpperCase() : ''}</p>
                                                                <p className="user-name">
                                                                    {user.firstName}
                                                                </p>
                                                                <span
                                                                    className="logout"
                                                                    onClick={handleLogout}
                                                                    style={{
                                                                        cursor: "pointer",
                                                                        padding: "5px 10px",
                                                                        backgroundColor: "#eee",
                                                                        borderRadius: "5px",
                                                                        position: "absolute",
                                                                        top: "100%",
                                                                        display: "none"
                                                                    }}
                                                                >
                                                                    Logout
                                                                </span>
                                                            </ActionLink>
                                                        ) : (
                                                            <ActionLink to="/login">
                                                                <ActionIcon
                                                                    width="18"
                                                                    height="20"
                                                                    viewBox="0 0 18 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M17.0001 19V17C17.0001 15.9391 16.5787 14.9217 15.8285 14.1716C15.0784 13.4214 14.061 13 13.0001 13H5.00012C3.93926 13 2.92184 13.4214 2.17169 14.1716C1.42155 14.9217 1.00012 15.9391 1.00012 17V19"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M9.00012 9C11.2093 9 13.0001 7.20914 13.0001 5C13.0001 2.79086 11.2093 1 9.00012 1C6.79098 1 5.00012 2.79086 5.00012 5C5.00012 7.20914 6.79098 9 9.00012 9Z"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </ActionIcon>
                                                            </ActionLink>
                                                        )}
                                                    </ActionItem>

                                                    {/* Wishlist */}
                                                    <ActionItem>
                                                        <ActionLink to="/wishlist">
                                                            <ActionIcon width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0461 2.59133C19.5419 2.08683 18.9431 1.68663 18.2842 1.41358C17.6252 1.14054 16.9189 1 16.2056 1C15.4923 1 14.786 1.14054 14.127 1.41358C13.468 1.68663 12.8693 2.08683 12.365 2.59133L11.3185 3.63785L10.272 2.59133C9.25342 1.57276 7.87194 1.00053 6.43146 1.00053C4.99098 1.00053 3.6095 1.57276 2.59092 2.59133C1.57235 3.6099 1.00012 4.99139 1.00012 6.43187C1.00012 7.87235 1.57235 9.25383 2.59092 10.2724L3.63745 11.3189L11.3185 19L18.9996 11.3189L20.0461 10.2724C20.5506 9.76814 20.9508 9.16942 21.2239 8.51045C21.4969 7.85148 21.6374 7.14517 21.6374 6.43187C21.6374 5.71857 21.4969 5.01225 21.2239 4.35328C20.9508 3.69431 20.5506 3.09559 20.0461 2.59133V2.59133Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></ActionIcon>
                                                            <Count>{wishlist?.length || 0}</Count>
                                                        </ActionLink>
                                                    </ActionItem>

                                                    {/* Cart */}
                                                    <ActionItem>
                                                        <ActionButton className="cartBtn" onClick={toggleCart}>
                                                            <ActionIcon width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.85739 19C8.33077 19 8.71453 18.6163 8.71453 18.1429C8.71453 17.6695 8.33077 17.2857 7.85739 17.2857C7.384 17.2857 7.00024 17.6695 7.00024 18.1429C7.00024 18.6163 7.384 19 7.85739 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.286 19C17.7594 19 18.1431 18.6163 18.1431 18.1429C18.1431 17.6695 17.7594 17.2857 17.286 17.2857C16.8126 17.2857 16.4288 17.6695 16.4288 18.1429C16.4288 18.6163 16.8126 19 17.286 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1.00012 1H4.42869L6.72584 12.4771C6.80422 12.8718 7.0189 13.2263 7.3323 13.4785C7.64571 13.7308 8.03786 13.8649 8.44012 13.8571H16.7716C17.1738 13.8649 17.566 13.7308 17.8794 13.4785C18.1928 13.2263 18.4075 12.8718 18.4858 12.4771L19.8573 5.28571H5.28584" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></ActionIcon>
                                                            <Count>{cart?.length || 0}</Count>
                                                        </ActionButton>
                                                    </ActionItem>
                                                </ActionList>
                                            </Actions>

                                            <Hamburger onClick={toggleMobileMenu}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </Hamburger>
                                        </BottomRight>
                                    </RightSection>
                                </Row>
                            </MegaMenuWrap>
                        </ContainerFluid>
                    </HeaderSticky>
                </HeaderArea>
            </Header>
            <Overlay className={isMobileMenuOpen ? "opened" : ""} onClick={closeMobileMenu}></Overlay>

            <HeaderMobileMenu className={isMobileMenuOpen ? "opened" : ""}>
                <div className="closebtn" onClick={closeMobileMenu} style={{fontSize: "37px"}}>×</div>
                <nav>
                    <Ul className="mobileMenu">
                        {menuItems.map((item) => (
                            <ListItem
                                key={item.id}
                                className={item.children ? "has-dropdown" : ""}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <MenuLink to={item.path}>{item.name}</MenuLink>
                                    {item.children && (
                                        <span
                                            style={{ cursor: 'pointer', paddingLeft: '10px' }}
                                            onClick={() => toggleSubmenu(item.id)}
                                        >
                                            {activeSubmenu === item.id ? '▲' : '▼'}
                                        </span>
                                    )}
                                </div>

                                {item.children && (
                                    <SubMenu
                                        className="submenu"
                                        style={{ display: activeSubmenu === item.id ? 'block' : 'none' }}
                                    >
                                        {item.children.map((child) => (
                                            <SubList key={child.id}>
                                                <SubMenuLink to={child.path}>
                                                    {child.name}
                                                </SubMenuLink>
                                            </SubList>
                                        ))}
                                    </SubMenu>
                                )}
                            </ListItem>
                        ))}
                    </Ul>
                </nav>
            </HeaderMobileMenu>

            <CartMini className={isCartOpen ? "opened" : ""}>
                <CartMiniWrap>
                    <CartTopWrap>
                        <CartTop>
                            <CartTitle>
                                <CartTitleH4>Shopping cart</CartTitleH4>
                            </CartTitle>
                            <CartClose onClick={closeCart}>
                                <CartCloseButton>×</CartCloseButton>
                            </CartClose>
                        </CartTop>

                        {cart.length === 0 ? (
                            <CartEmpty>
                                <CartEmptyImage src={EmptyCart} alt="Close Button" />
                                <CartText>Your Cart is empty</CartText>
                                <CartLink to="/shop">Go to Shop</CartLink>
                            </CartEmpty>
                        ) : (
                            <CartWidget>
                                {cart.map((item) => (
                                    <CartWidgetItem key={item._id}>
                                        <CartThumb>
                                            <Link to={`/product/${item._id}`}>
                                                <CartThumbImg src={item.image} alt={item.title} />
                                            </Link>
                                        </CartThumb>
                                        <CartContent>
                                            <CartConTitle>
                                                <Link to={`/product/${item._id}`}>
                                                    {item.name}
                                                </Link>
                                            </CartConTitle>
                                            <CartPriceWrapper>
                                                <CartPrice>
                                                    ${item.price}
                                                </CartPrice>
                                                <CartQuantity>
                                                    * {item.quantity}
                                                </CartQuantity>
                                            </CartPriceWrapper>
                                        </CartContent>
                                        <RemoveBtn onClick={() => handleRemove(item._id)} style={{ fontSize: "25px" }}>
                                            ×
                                        </RemoveBtn>
                                    </CartWidgetItem>
                                ))}
                            </CartWidget>
                        )}
                    </CartTopWrap>
                    <CartCheckout>
                        <CartCheckoutTitle>
                            <CartCheckoutTitleH4>Subtotal: </CartCheckoutTitleH4>
                            <span>${total.toFixed(2)}</span>
                        </CartCheckoutTitle>
                        <div className="card_checkout">
                            <VeiwCart to="/cart">View Cart</VeiwCart>
                            <CheckputBtn to="/checkout">Check Out</CheckputBtn>
                        </div>
                    </CartCheckout>
                </CartMiniWrap>
            </CartMini>
            <CartOverlay className={isCartOpen ? "opened" : ""} onClick={closeCart}></CartOverlay>
        </>
    );
}

export default Headers;
