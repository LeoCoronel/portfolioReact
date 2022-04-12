import React, { useContext } from 'react';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from "swiper";

import Skill from '../Projects/Project';

import { projectEs, projectEn } from '../Projects/projectData';
import { LanguageContext } from '../../contexts/LanguageContext';

const Carousel = () => {
    let projectData = projectEs;

    const { data } = useContext(LanguageContext);

    if(data.locale === 'es') {
        projectData = projectEs;
    } else if(data.locale === 'en') {
        projectData = projectEn;
    }

    return ( 
        <Swiper 
            loop={true}
            navigation={true} 
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination]} 
            className="mySwiper"
        >
            {projectData.map((project, index) => {
                return <SwiperSlide><Skill key={index} title={project.title} desc={project.desc} techs={project.techs} img={project.img} links={project.links} /></SwiperSlide>
            })}
        </Swiper>
    );
}

export default Carousel;