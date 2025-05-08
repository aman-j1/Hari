import React from "react";
import { Banner } from "../Components/Banner/banner";
import { Products } from "../Components/Product/product";
import CategoryNames from "../Components/Category/category";
import { Deals } from "../Components/deals";

function Home(){
    return(
        <>
            <Banner />
            <CategoryNames />
            <Products />
            <Deals />
        </>
    );
}

export default Home;