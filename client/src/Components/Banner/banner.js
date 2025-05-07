import React from "react";
import {
    BannerSection,
    Containers,
    Row,
    BannerCol,
    ContentInner,
    SubHead,
    BannerTitle,
    BannerButton,
    ThumbSec,
    Circle1,
    Circle2
} from './style/banner'

import Slider1 from '../../Image/slider-1.webp';

export function Banner() {
    return (
        <BannerSection>
            <Containers>
                <Row>
                    <BannerCol>
                        <ContentInner>
                            <SubHead>
                                Best Ear<br /> Headphones
                            </SubHead>
                            <BannerTitle>
                                Find your <br />
                                Beats Studio.
                            </BannerTitle>
                            <BannerButton to="/fashion">
                                Shop Now
                                <span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999969 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.99997 1L13 7L6.99997 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </span>
                            </BannerButton>
                        </ContentInner>
                    </BannerCol>
                    <BannerCol>
                        <ThumbSec>
                            <Circle1></Circle1>
                            <Circle2></Circle2>
                            <img src={Slider1} alt="Banner Logo" />
                        </ThumbSec>
                    </BannerCol>
                </Row>
            </Containers>
        </BannerSection>
    )
};