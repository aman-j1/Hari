import React from "react";
import { Banner } from "../Components/Banner/banner";
import { Products } from "../Components/Product/product";
import CategoryNames from "../Components/Category/category";

function Home(){
    return(
        <>
            <Banner />
            <CategoryNames />
            <Products />
        </>
    );
}

export default Home;