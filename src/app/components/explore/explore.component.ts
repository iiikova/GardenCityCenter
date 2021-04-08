import { Component, OnInit } from '@angular/core';
import SwiperCore, { Swiper, Navigation, Pagination } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      // centeredSlides: true,
      // autoHeight: true,
      // centerInsufficientSlides: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
