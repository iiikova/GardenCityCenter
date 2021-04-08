import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Swiper,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const swiper = new Swiper('.swiper-container-2', {
      // Optional parameters
      direction: 'horizontal',
      speed: 400,
      loop: true,
      autoplay: true,
      spaceBetween: 10,
      slidesPerView: 4,

      centeredSlides: true,
      // centerInsufficientSlides: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
