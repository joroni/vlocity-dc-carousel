import {
    PolymerElement,
    html
    } from '@polymer/polymer/polymer-element.js';
    import '@polymer/iron-icons/iron-icons.js';
    import '@polymer/paper-styles/paper-styles.js';
    import '@fabricelements/skeleton-carousel/skeleton-carousel.js';
    import '../vlocity-dc-carousel.js';
    import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
    import '@polymer/iron-demo-helpers/demo-snippet';
    import '@polymer/iron-flex-layout/iron-flex-layout.js';
    import '@polymer/iron-image/iron-image.js';
    import '@polymer/polymer/lib/elements/dom-repeat.js';
    import '@polymer/polymer/lib/elements/dom-bind.js';
    class VlocityDCCarousel extends PolymerElement {
    static get template() {
    return html `
    <style is="custom-style">  
       @font-face {
       font-family: "Soleil";
       src: url("../../../assets/fonts/Soleil_Bold.c201af2f.woff2") format("woff2"), url("../../../assets/fonts/Soleil_Bold.c201af2f.woff") format("woff");
       font-family: "HouseSlant";
       src: url("../../../assets/fonts/houseslant.b17c2393-webfont.woff2") format("woff2"), url("../../../assets/fonts/houseslant.b17c2393-webfont.woff") format("woff");
       }
       body {
       font-family: Soleil;
       font-weight: regular;
       font-size: 16px;
       color: #333;
       letter-spacing: 0;
       }
       /* :host([direction="horizontal"]) #controls {
       font-family: HouseSlant, sans-serif;
       position: absolute;
       bottom: 10%;
       width: 95%;
       margin: 0 auto;
       text-align: left;
       } */
       :host([direction="horizontal"]) #controls,
       :host([direction="horizontal"]) #dots {
       position: absolute;
       right:50px;
       display: var(--layout-horizontal_-_display);
       -ms-flex-direction: var(--layout-horizontal_-_-ms-flex-direction);
       -webkit-flex-direction: var(--layout-horizontal_-_-webkit-flex-direction);
       flex-direction: var(--layout-horizontal_-_flex-direction);
       background-color: var(--paper-grey-10);
       }
       iron-image {
       display: block;
       }
       /********slick-customize*********/
       button {
       z-index: 102;
       /*display: none!important;*/
       }
       .slick-slide {
       -webkit-transform: scale(0.8);
       transform: scale(0.8);
       transition: 0.3s ease-in-out all;
       }
       .slick-slide.slick-center {
       opacity: 1;
       -webkit-transform: scale(1);
       transform: scale(1);
       }
       .switch {
       background: #000;
       }
       .img-box {
       padding: 0;
       }
       .img-box img {
       width: 100%;
       }
       .slick-dots {
       position: absolute;
       bottom: 20px
       }
       .slick-dots li button:before {
       font-size: 60px;
       color: #fff;
       }
       .slick-dots li.slick-active button:before {
       color: #fff !important;
       }
       .slick-slide {
       width: calc(97vw);
       box-sizing: border-box;
       margin-left: 0
       }
       .slider_tb_box {
       /*margin: 0 auto;*/
       overflow: hidden;
       position: relative;
       }
       section.slider_tb {
       position: relative;
       top: -90px;
       z-index: 1;
       /*background: #FAFAFA;*/
       }
       .slider_tb article {
       float: left;
       margin: 0;
       width: 95%;
       padding: 0;
       padding-top: 41.5%;
       background-repeat: no-repeat;
       background-size: cover;
       background-position: center;
       }
       .slider_tb article.bg_01 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_01_tb.png);
       }
       .slider_tb article.bg_02 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_02_tb.png);
       }
       .slider_tb article.bg_03 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_03_tb.png);
       }
       .slider_tb article.bg_04 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_04_tb.png);
       }
       .slider_tb article.bg_05 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_05_tb.png);
       }
       .slider_tb article.bg_06 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_06_tb.png);
       }
       @media (max-width: 1024px) {
       .slider_tb article {
       width: 100%;
       border-radius: 5px;
       -webkit-filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, .2));
       filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, .2));
       }
       .slick-initialized .slick-slide {
       margin: 0 -24px;
       margin-bottom: 10px
       }
       .slick-slide {
       width: 90vw;
       }
       }
       .slider_tb .text_box {
       color: #fff;
       padding: 16px;
       position: absolute;
       bottom: 0;
       width: 100%;
       z-index: 1;
       height: 40%
       }
       .slider_tb .text_bg {
       padding-top: 20%;
       position: absolute;
       bottom: 0;
       width: 100%;
       background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
       /* FF3.6-15 */
       background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
       /* Chrome10-25,Safari5.1-6 */
       background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
       /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
       filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000', GradientType=0);
       /* IE6-9 */
       }
       section.slider_sp {
       position: relative;
       top: -80px;
       z-index: 1;
       /*background: #FAFAFA;*/
       }
       .slider_sp_box {
       /*margin: 0 auto;*/
       overflow: hidden;
       position: relative;
       }
       .slider_sp article {
       margin: 0;
       width: 95%;
       padding: 0;
       padding-top: 98.45%;
       background-repeat: no-repeat;
       background-size: cover;
       background-position: center;
       }
       .slider_sp article.bg_01 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_01_sp_02.png);
       }
       .slider_sp article.bg_02 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png);
       }
       .slider_sp article.bg_03 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png);
       }
       .slider_sp article.bg_04 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_04_sp_02.png);
       }
       .slider_sp article.bg_05 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_05_sp_02.png);
       }
       .slider_sp article.bg_06 {
       background-image: url(../../../assets/images/h3hk/offer_slider/slider_06_sp_02.png);
       }
       @media (max-width: 480px) {
       .slider_sp article {
       width: 100%;
       border-radius: 5px;
       -webkit-filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, .2));
       filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, .2));
       }
       .slick-initialized .slick-slide {
       margin: 0 -8px;
       margin-bottom: 10px
       }
       .slick-slide {
       width: 80vw;
       }
       }
       .slider_sp .text_box {
       color: #fff;
       padding: 16px;
       position: absolute;
       bottom: 0;
       width: 100%;
       z-index: 1;
       height: 40%
       }
       .slider_sp .text_bg {
       padding-top: 50%;
       position: absolute;
       bottom: 0;
       width: 100%;
       background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
       /* FF3.6-15 */
       background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
       /* Chrome10-25,Safari5.1-6 */
       background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%);
       /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
       filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000', GradientType=0);
       /* IE6-9 */
       }
       .slider_sp article {
       margin: 5px 5px 10px 10px;
       width: 95%;
       background-repeat: no-repeat !important;
       background-size: cover !important;
       background-position: center !important;
       }
       /***************new_0424****************/
       .offer_card_heading {
       color: #fff;
       font-size: 24px;
       line-height: 1.4;
       padding: 2px 0;
       font-weight: bold;
       }
       .slider_sp_box {
       overflow: hidden;
       position: fixed;
       left: 0;
       width: 100%;
       top: 46px;
       height: 490px;
       }
       .slider_sp .text_box {
       color: #fff;
       width: 90%;
       height: 28%;
       font-family: HouseSlant, sans-serif;
       }



       .offer_slider_box.w3-hide-small.w3-hide-medium {
        width: 1150px;
        max-height: 490px;
        margin: 0 auto;
    }
       
       
       @media (min-width: 1025px){
        .w3-hide-large {
            display: none !important;
            }
        }

          
       @media (max-width: 1024px) and (min-width: 481px){
            .w3-hide-medium,   .w3-hide-large {
                display: none !important;
            }
        }
        
       @media (max-width: 480px){
            .w3-hide-small {
                display: none !important;
            }
          
       }

     
       
    </style>
    <div class="w3-hide-small w3-hide-medium offer_slider_box">
       Large
       <div class="slider_sp">
          <skeleton-carousel class="slider_sp_box " dots auto loop>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_01_pc.png" data-src="../../../assets/images/h3hk/offer_slider/slider_01_pc.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_01">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 1</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_02_pc.png" />-->
             </iron-image>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_02_pc.png" data-src="../../../assets/images/h3hk/offer_slider/slider_02_pc.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_02" style="background:url(../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png);">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 2</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png" />-->
             </iron-image>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_03_pc.png" data-src="../../../assets/images/h3hk/offer_slider/slider_03_pc.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_03" style="background:url(../../../assets/images/h3hk/offer_slider/slider_03_pc.png);">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 3</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png" />-->
             </iron-image>
          </skeleton-carousel>
       </div>
    </div>
    <div class="w3-hide-large w3-hide-small">
       Medium
       <div class="slider_sp">
          <skeleton-carousel class="slider_sp_box " dots auto loop>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_01_tb.png" data-src="../../../assets/images/h3hk/offer_slider/slider_01_tb.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_01">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 1</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_01_sp_02.png" />-->
             </iron-image>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_02_tb.png" data-src="../../../assets/images/h3hk/offer_slider/slider_02_tb.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_02" style="background:url(../../../assets/images/h3hk/offer_slider/slider_02_tb.png);">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 2</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png" />-->
             </iron-image>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_03_tb.png" data-src="../../../assets/images/h3hk/offer_slider/slider_03_tb.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_03" style="background:url(../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png);">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 3</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png" />-->
             </iron-image>
          </skeleton-carousel>
       </div>
    </div>
    <div class="w3-hide-large w3-hide-medium">
       Small
       <div class="slider_sp">
          <skeleton-carousel class="slider_sp_box " dots auto loop>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_01_sp_02.png" data-src="../../../assets/images/h3hk/offer_slider/slider_01_sp_02.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_01">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 1</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_01_sp_02.png" />-->
             </iron-image>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png" data-src="../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_02" style="background:url(../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png);">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 2</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_02_sp_02.png" />-->
             </iron-image>
             <iron-image placeholder="../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png" data-src="../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png" sizing="cover">
                <div>
                   <a href="offer-details-createplan.html">
                      <article class="bg_03" style="background:url(../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png);">
                         <div class="text_box">
                            <div class="offer_card_heading">Slider 3</div>
                            <div>This is banner text. This is banner text. This is banner text.</div>
                         </div>
                         <div class="text_bg"></div>
                      </article>
                   </a>
                </div>
                <!--<img src="../../../assets/images/h3hk/offer_slider/slider_03_sp_02.png" />-->
             </iron-image>
          </skeleton-carousel>
       </div>
    </div>
    `;
    }
    _message(fav) {
    if (fav) {
    return 'You really like me!';
    } else {
    return 'Do you like me?';
    }
    }
    }
    customElements.define('demo-element', VlocityDCCarousel);   