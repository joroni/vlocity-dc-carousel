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

class DemoElement extends PolymerElement {
    static get template() {
        return html `
    <style is="custom-style"> 
    
    @font-face {
        font-family: 'DFPingJu';
        src:  url('../media/DFPingJu-W7-WIN-BF.929b58d9.woff2') format('woff2');
      }
      @font-face {
        font-family: 'FatFrank';
        src:  url('../media/FatFrank-Regular.3e6835a3.woff2') format('woff2');
      }
      @font-face {
        font-family: 'HouseSlant';
        src:  url('../media/HouseSlant.b17c2393.woff') format('woff2');
      }
      @font-face {
        font-family: 'Soleil';
        src:  url('../media/Soleil_Regular.ab93731c.woff2') format('woff2');
      }
      
      /* W3.CSS 4.12 November 2018 by Jan Egil and Borge Refsnes */
      html {
          box-sizing: border-box
      }
      *, *:before, *:after {
          box-sizing: inherit
      }
      /* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */
      html {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%
      }
      body {
          margin: 0;
      }
      footer {
          /*position: relative;*/
      
          height: 130px;
          /*width: 100%;
          left: 0px;
          bottom: 0px;
          position: absolute;
          overflow: hidden;*/
      }
      article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
          display: block
      }
      audio, canvas, progress, video {
          display: inline-block
      }
      progress {
          vertical-align: baseline
      }
      audio:not([controls]) {
          display: none;
          height: 0
      }
      [hidden], template {
          display: none
      }
      a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects
      }
      a:-webkit-any-link {
          text-decoration: unset;
      }
      a:active, a:hover {
          outline-width: 0;
          cursor: pointer;
      }
      abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted
      }
      dfn {
          font-style: italic
      }
      mark {
          background: #ff0;
          color: #333
      }
      small {
          font-size: 80%
      }
      sub, sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline
      }
      sub {
          bottom: -0.25em
      }
      sup {
          top: -0.5em
      }
      figure {
          margin: 1em 40px
      }
      img {
          border-style: none
      }
      svg:not(:root) {
          overflow: hidden
      }
      code, kbd, pre, samp {
          font-family: monospace, monospace;
          font-size: 1em
      }
      hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible
      }
      button, input, select, textarea {
          font: inherit;
          margin: 0
      }
      optgroup {
          font-weight: bold
      }
      button, input {
          overflow: visible
      }
      button, select {
          text-transform: none
      }
      button, html [type=button], [type=reset], [type=submit] {
          -webkit-appearance: button
      }
      button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner {
      border-style:none;
      padding:0
      }
      button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring {
      outline:1px dotted ButtonText
      }
      fieldset {
          border: 1px solid #c0c0c0;
          margin: 0 2px;
          padding: .35em .625em .75em
      }
      legend {
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal
      }
      textarea {
          overflow: auto
      }
      [type=checkbox], [type=radio] {
          padding: 0
      }
      [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
      height:auto
      }
      [type=search] {
          -webkit-appearance: textfield;
          outline-offset: -2px
      }
      [type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {
      -webkit-appearance:none
      }
      ::-webkit-input-placeholder {
      color:inherit;
      opacity:0.54
      }
      ::-webkit-file-upload-button {
      -webkit-appearance:button;
      font:inherit
      }
      /* End extract */
      /*html, body {
          font-family: 'Soleil', Verdana, sans-serif;
          font-size: 14px;
          line-height: 1.5
      }*/
      html {
          overflow-x: hidden
      }
      h1 {
          font-size: 36px
      }
      h2 {
          font-size: 30px
      }
      h3 {
          font-size: 24px
      }
      h4 {
          font-size: 20px
      }
      h5 {
          font-size: 18px
      }
      h6 {
          font-size: 16px
      }
      .w3-serif {
          font-family: serif
      }
      h1, h2, h3, h4, h5, h6 {
          font-family: 'HouseSlant', "Segoe UI", Arial, sans-serif;
          font-weight: 400;
      }
      .w3-wide {
          letter-spacing: 4px
      }
      hr {
          width: 40px;
          border: 0;
          border-bottom: 4px solid #000;
          margin: 20px 0px;
      }
      .w3-image {
          max-width: 100%;
          height: auto
      }
      img {
          vertical-align: middle
      }
      a {
          color: inherit
      }
      p{color:#333;}
      
      
      .linebreak{
          display: none !important;
      }
      .w3-table, .w3-table-all {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          display: table
      }
      .w3-table-all {
          border: 1px solid #ccc
      }
      .w3-bordered tr, .w3-table-all tr {
          border-bottom: 1px solid #ddd
      }
      .w3-striped tbody tr:nth-child(even) {
          background-color: #f1f1f1
      }
      .w3-table-all tr:nth-child(odd) {
          background-color: #fff
      }
      .w3-table-all tr:nth-child(even) {
          background-color: #f1f1f1
      }
      .w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {
          background-color: #ccc
      }
      .w3-centered tr th, .w3-centered tr td {
          text-align: center
      }
      .w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {
          padding: 8px 8px;
          display: table-cell;
          text-align: left;
          vertical-align: top
      }
      .w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {
          padding-left: 16px
      }
      .w3-btn, .w3-button {
          border: none;
          display: inline-block;
          padding: 8px 16px;
          vertical-align: middle;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background-color: inherit;
          text-align: center;
          cursor: pointer;
          white-space: nowrap
      }
      .w3-btn:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)
      }
      .w3-btn, .w3-button {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none
      }
      .w3-disabled, .w3-btn:disabled, .w3-button:disabled {
          cursor: not-allowed;
          opacity: 0.3
      }
      .w3-disabled *, :disabled * {
          pointer-events: none
      }
      .w3-btn.w3-disabled:hover, .w3-btn:disabled:hover {
          box-shadow: none
      }
      .w3-badge, .w3-tag {
          background-color: #000;
          color: #fff;
          display: inline-block;
          padding-left: 8px;
          padding-right: 8px;
          text-align: center
      }
      .w3-badge {
          border-radius: 50%
      }
      .w3-ul {
          list-style-type: none;
          padding: 0;
          margin: 0
      }
      .w3-ul li {
          padding: 8px 16px;
          border-bottom: 1px solid #ddd
      }
      .w3-ul li:last-child {
          border-bottom: none
      }
      .w3-tooltip, .w3-display-container {
          position: relative;
          height: 470px;
          overflow: hidden;
      }
      .w3-tooltip .w3-text {
          display: none
      }
      .w3-tooltip:hover .w3-text {
          display: inline-block
      }
      .w3-ripple:active {
          opacity: 0.5
      }
      .w3-ripple {
          transition: opacity 0s
      }
      .w3-input {
          padding: 8px;
          display: block;
          border: none;
          border-bottom: 1px solid #ccc;
          width: 100%
      }
      .w3-select {
          padding: 9px 0;
          width: 100%;
          border: none;
          border-bottom: 1px solid #ccc
      }
      .w3-dropdown-click, .w3-dropdown-hover {
          position: relative;
          display: inline-block;
          cursor: pointer
      }
      .w3-dropdown-hover:hover .w3-dropdown-content {
          display: block
      }
      .w3-dropdown-hover:first-child, .w3-dropdown-click:hover {
          background-color: #ccc;
          color: #333
      }
      .w3-dropdown-hover:hover > .w3-button:first-child, .w3-dropdown-click:hover > .w3-button:first-child {
          background-color: #ccc;
          color: #333
      }
      .w3-dropdown-content {
          cursor: auto;
          color: #333;
          background-color: #fff;
          display: none;
          position: absolute;
          min-width: 160px;
          margin: 0;
          padding: 0;
          z-index: 1
      }
      .w3-check, .w3-radio {
          width: 24px;
          height: 24px;
          position: relative;
          top: 6px
      }
      .w3-sidebar {
          height: 100%;
          width: 200px;
          background-color: #fff;
          position: fixed!important;
          z-index: 1;
          overflow: auto
      }
      .w3-bar-block .w3-dropdown-hover, .w3-bar-block .w3-dropdown-click {
          width: 100%
      }
      .w3-bar-block .w3-dropdown-hover .w3-dropdown-content, .w3-bar-block .w3-dropdown-click .w3-dropdown-content {
          min-width: 100%
      }
      .w3-bar-block .w3-dropdown-hover .w3-button, .w3-bar-block .w3-dropdown-click .w3-button {
          width: 100%;
          text-align: left;
          padding: 8px 16px
      }
      .w3-main, #main {
          transition: margin-left .4s
      }
      .w3-modal {
          z-index: 3;
          display: none;
          padding-top: 100px;
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.4)
      }
      .w3-modal-content {
          margin: auto;
          background-color: #fff;
          position: relative;
          padding: 0;
          outline: 0;
          width: 600px
      }
      .w3-bar {
          width: 100%;
          /*overflow: hidden;*/
          height: 70px;
      }
      .w3-center .w3-bar {
          display: inline-block;
          width: auto;
      }
      .w3-center.cart_bg{
          background-color: #F0F4F5;
      }
      .w3-bar .w3-bar-item {
          padding: 2px 4px;
          margin: 21px 16px 1px;
          float: left;
          width: auto;
          border: none;
          display: block;
          outline: 0;
          text-transform: uppercase;
      }
      .header-text{
          color: #fff;
          font-weight: 800;
          font-size: 14px;
      }
      .w3-bar .w3-bar-item.lang-link {
          padding: 2px 4px;
          margin: 23px 20px;
      }
      .w3-bar .w3-bar-item.lang-link.chi {
          margin-right: 50px;
      }
      .w3-bar .w3-bar-item.lang-link.eng {
          display:none;
      }
      .w3-bar-block .w3-bar-item.eng{
          display:none;
      }
      .w3-bar .w3-dropdown-hover, .w3-bar .w3-dropdown-click {
          position: static;
          float: left
      }
      .w3-bar .w3-button {
          white-space: normal
      }
      
      .w3-bar.w3.header-text>*:nth-child(n+3):nth-last-of-type(n+4){opacity: .8;}
      .w3-bar.w3.header-text>a:hover, .header_activate{opacity:1!important}
      
      
      .w3-bar-block .w3-bar-item {
          width: 100%;
          display: block;
          padding: 8px 16px;
          text-align: left;
          border: none;
          white-space: normal;
          float: none;
          outline: 0
      }
      .w3-bar-block.w3-center .w3-bar-item {
          text-align: center
      }
      .w3-block {
          display: block;
          width: 100%
      }
      .w3-responsive {
          display: block;
          overflow-x: auto
      }
      .w3-container:after, .w3-container:before, .w3-panel:after, .w3-panel:before, .w3-row:after, .w3-row:before, .w3-row-padding:after, .w3-row-padding:before, .w3-cell-row:before, .w3-cell-row:after, .w3-clear:after, .w3-clear:before, .w3-bar:before, .w3-bar:after {
          content: "";
          display: table;
          clear: both
      }
      .w3-col, .w3-half, .w3-third, .w3-twothird, .w3-threequarter, .w3-quarter {
          float: left;
          width: 100%
      }
      .w3-col.s1 {
          width: 8.33333%
      }
      .w3-col.s2 {
          width: 16.66666%
      }
      .w3-col.s3 {
          width: 24.99999%
      }
      .w3-col.s4 {
          width: 33.33333%
      }
      .w3-col.s5 {
          width: 41.66666%
      }
      .w3-col.s6 {
          width: 49.99999%
      }
      .w3-col.s7 {
          width: 58.33333%
      }
      .w3-col.s8 {
          width: 66.66666%
      }
      .w3-col.s9 {
          width: 74.99999%
      }
      .w3-col.s10 {
          width: 83.33333%
      }
      .w3-col.s11 {
          width: 91.66666%
      }
      .w3-col.s12 {
          width: 99.99999%
      }
      /********************************font style - theo****************************************/
      
      .slant-header{font-family: HouseSlant;
      font-weight: bold;
      font-size: 60px;
      color: #333000;
      letter-spacing: 0;}
      
      .header1{font-family: FatFrank;
      font-weight: regular;
      font-size: 32px;
      color: #333000;
      letter-spacing: 1.1px;}
      
      .header2{font-family: Soleil;
      font-weight: bold;
      font-size: 24px;
      color: #333000;
      letter-spacing: 0;}
      
      body{font-family: Soleil;
      font-weight:regular;
      font-size: 16px;
      color: #333;
      letter-spacing: 0;}
      
      .subtext{font-family: Soleil;
      font-weight: regular;
      font-size: 12px;
      color: #333;
      letter-spacing: 0;}
      
      .banner-header{font-family: HouseSlant;
      font-weight: bold;
      font-size: 48px;
      color: #333000;
      letter-spacing: 0;}
      
      .banner-text{font-family: Soleil;
      font-size: 16px;
      color: #333000;
      letter-spacing: 0;}
      
      .card-header-wrapper{
          text-transform: uppercase;
          text-align: left;
          display: inline-block;
          float: left;
          position: relative;
          /*padding: 20px;*/
      }
      .slider-header-wrapper{
          /*bottom:200px;
          position: absolute;*/
          margin-top: 100px;
          margin-left: 20px;
          float: left;
          text-transform: uppercase;
          text-align: left;
      }
      .slider-btn{
          text-align: center;
          left: 20px;
          bottom:20px;
          position: absolute;
      
      }
      
      .card-header{font-family: Soleil;
      font-weight: bold;
      font-size: 18px;
      letter-spacing: 0;
      text-align: left;text-shadow: 0.6px 0 #333;letter-spacing:0.6px;color: #333;
      
      /*display: inline-block;
      float: left;*/
      }
      .slider-text{font-family: Soleil;
      font-weight: bold;
      font-size: 24px;
      letter-spacing: 0;
      text-align: left;
      }
      
      .plan-header{font-family: Soleil;
      font-weight: 900;
      font-size: 32px;
      letter-spacing: 0;
      text-align: left;
      }
      
      .cart-header{font-family: Soleil;
      font-weight: 900;
      font-size: 32px;
      letter-spacing: 0;
      text-align: left;
      }
      
      /*
      .title.slider-text.white{
          background-color: #000 !important;
          padding: 0px 10px;
          display: block;
      }*/
      .title.slider-text.white.without-highlight{
          /*top: 24px !important;*/
          margin-top: 74px;
      }
      
      .title.card-header.white{
          /*background-color: #000 !important;
          padding: 0px 10px;*/
          float: left;
          display: block;
          margin-top: 0px;
      
          /*white-space: pre;
          left: 20px;
          top: 54px;
          position: absolute;*/
      }
      /*.title.card-header.white.without-highlight{
          *top: 24px !important;
          margin-top: 20px;
      }
      
      .plan-title.card-header{
          white-space: pre;
          left: 20px;
          top: 54px;
          position: absolute;
      }
      .plan-title.card-header.without-highlight{
          top: 24px !important;
      }*/
      
      mark {
          background: #000;
          color: #fff;
          padding: 0px 10px;
      }
      
      .card-text{font-family: Soleil;
      font-size: 12px;
      color: #333;
      letter-spacing: 0;
      float: left;}
      
      .card-subtext{font-family: Soleil;
      font-weight: bold;
      font-size: 16px;
      color: #333000;
      letter-spacing: 0;
      }
      
      .card-price{font-family: Soleil;
      font-size: 48px;
      color: #000;
      text-shadow: 1.3px 0 #000; letter-spacing: 0.2px;
      float: right;}
      
      .cart-card-price{font-family: Soleil;
      font-size: 48px;
      color: #000; text-shadow: 1.3px 0 #000;letter-spacing: 0.2px;line-height: 1em;}
      
      .plan-des-wrapper .card-price:before{
          content: '$';
          font-size: 0.5em;
      }
      
      /*.plan_extra_pack_sp.card-price{
          line-height: 2.5;
      }*/
      .plan_extra_pack_sp.card-price:before{
          content: '$';
          font-size: 0.5em;
          vertical-align: super;
      
      }
      .pack-wrapper{
          display: inline-block;
      }
      
      .card-tag{font-family: HouseSlant;
      font-weight: regular;
      font-size: 16px;
      color: #333000;
      letter-spacing: 0;}
      
      .white{color:#ffffff;}
      
      
      
      
      /* new added by Nora 0322*/
      .clearfix{display: block!important;}
      
      .clearfix::after{
        content: "";
        display: block!important;
        clear: both;
      }
      
      .title-md.im-underline {
          background-position: 0 0.8em;
          background-size: 2px 0.5em;
      }
      
      .data-range{
          display: block!important;
          margin-bottom: 10px;
          /*margin-top: 10px;*/
          /*background-color: #f5f5f5;*/
          padding: 10px 0;
      }
      
      .plan_detail{
          display: flex!important;justify-content: space-between;
      }
      
      .plan_detail_title_all{
          display: block!important;
          margin-top: 44px;
      }
      
      .plan_detail_title{
          text-align: left;
          color: #333;
          /*font-size: 1.45em;
          font-weight: bold;*/
          cursor: default;
          padding: 5px 0;
          padding-top: 19px
          width: 60%;
          display: block!important;
          font-weight: bold;
      }
      
      .plan_detail_price{
          /*font-size: 1.45em;*/
          display: block!important;
          float: right;
          text-align: right;
          width: 30%;
          line-height: 1;
          font-family: Soleil;
          font-size: 48px;
          color: #333000;
          letter-spacing: 0;
      }
      
      .plan_detail_price:before{
          content: "$";
          font-size: 0.5em;
          vertical-align: super;
      
      }
      
      /*.plan_detail_price:after{
          content: "/month";
          font-size: 0.5em;
          font-weight: normal;
      }*/
      
      .plan_extra{
          display: block!important;
      }
      
      .plan_extra_title{
          padding: 0;
      }
      
      .plan_extra_clear{
          /*font-size: 1.45em;
          font-weight: normal;*/
          display: block!important;
          float: right;
          text-align: right;
          width: 30%;
          text-decoration: underline;
          line-height: 4;
      }
      
      .plan_extra_pack_all{
          display: block!important;
          margin-bottom: 23px;
          margin-top: 10px;
      }
      
      .plan_extra_pack{
          display: block!important;
          border: 4px solid #00C9FF;
          box-shadow: 0 4px 4px 0 rgba(175,178,179,0.50);
          border-radius: 5px;
          padding: 10px 20px;
      }
      
      
      .plan_extra_pack_natural{
          border: none;
      }
      
      .plan_extra_pack_size{
          display: block!important;
          font-family: Soleil;
          font-size: 57.6px;
          color: #333000;
      }
      
      .plan_extra_pack_size:after{
          content: "GB";
          font-size: 43.2px;
      }
      
      
      .plan_extra_pack_sp{
          display: inline-block!important
      }
      .plan_extra_pack_size_img{margin-right: 10px}
      .plan_extra_pack_size_p{margin-right: 10px}
      .plan_extra_pack_size_price{}
      .float_right{float:right;}
      .no_deco{text-decoration-line: none;}
      
      @media screen and (max-width: 768px){
          .plan_extra_pack_size_img{width:120px;}
          .plan_extra_pack_size_p{width: 100%;
          margin-top: 20px;}
          .plan_extra_pack_size_price{margin-top: 20px;}
          .plan_extra_pack_sp{display: inline-block!important;}
          footer{height: 169px;}
          /*.float_right{float:none;}*/
      }
      
      /* END of new added by Nora 0322*/
      
      
      
      .float-panel {
          background-color: #FDF401 !important;
          width: 100%;
          z-index:300;
          padding:0px; 
          transform: translateZ(0);
          transition:all 0.5s;padding-top: 5px;
      }
      .float-panel .page-width{border-bottom: 1px solid #000;}
      @media screen and (max-width: 768px) {.float-panel .page-width{border:0;}.float-panel{border-bottom: 1px solid #000;}}
      
      .float-panel .nav_button{
          border: none;
          display: inline-block;
          padding: 8px 16px;
          vertical-align: middle;
          /*overflow: hidden;*/
          text-decoration: none;
          color: inherit;
          background-color: inherit;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
          min-width:200px;color: #999;font-weight: bold;border-bottom: 5px solid rgba(0, 0, 0, 0.0);text-transform: uppercase;
      }
      @media screen and (max-width: 768px) {.float-panel .nav_button{min-width: 145px}}
      .submenu-text{
          font-size: 14px;
      }
      .float-right .submenu-text{
          font-size: 14px;
          float: none;
      }
      .float-panel .nav_button:hover {
          /*border-bottom: 4px solid #fff;
          background: #00C9FF;*/
      
          border-bottom: 5px solid #000;
          color: #333;
      
      }
      .float-panel .selected {
          /*border-bottom: 4px solid #fff;
          background: #00C9FF;*/
          font-weight: 800;
          border-bottom: 5px solid #000;
          color: #333;
      }
      
      .float-panel .content-area {
          max-width:1440px;
          margin:0px auto;
      }
      
      .fixed {
          box-shadow:0 2px 6px rgba(0,0,0,0.2);  
          padding:0px 0;
          animation:slide-down 0.7s;
          opacity:0.9;    
      }                  
      
      
      @keyframes slide-down {
          0% {
              opacity: 0;
              transform: translateY(-100%);
          } 
          100% {
              opacity: 0.9;
              transform: translateY(0);
          } 
      }
      
      
      @media (min-width:601px) {
      .w3-col.m1 {
          width: 8.33333%
      }
      .w3-col.m2 {
          width: 16.66666%
      }
      .w3-col.m3, .w3-quarter {
          width: 24.99999%
      }
      .w3-col.m4, .w3-third {
          width: 33.33333%
      }
      .w3-col.m5 {
          width: 41.66666%
      }
      .w3-col.m6, .w3-half {
          width: 49.99999%
      }
      .w3-col.m7 {
          width: 58.33333%
      }
      .w3-col.m8, .w3-twothird {
          width: 66.66666%
      }
      .w3-col.m9, .w3-threequarter {
          width: 74.99999%
      }
      .w3-col.m10 {
          width: 83.33333%
      }
      .w3-col.m11 {
          width: 91.66666%
      }
      .w3-col.m12 {
          width: 99.99999%
      }
      }
      
      @media (min-width:993px) {
      .w3-col.l1 {
          width: 8.33333%
      }
      .w3-col.l2 {
          width: 16.66666%
      }
      .w3-col.l3 {
          width: 24.99999%
      }
      .w3-col.l4 {
          width: 33.33333%
      }
      .w3-col.l5 {
          width: 41.66666%
      }
      .w3-col.l6 {
          width: 49.99999%
      }
      .w3-col.l7 {
          width: 58.33333%
      }
      .w3-col.l8 {
          width: 66.66666%
      }
      .w3-col.l9 {
          width: 74.99999%
      }
      .w3-col.l10 {
          width: 83.33333%
      }
      .w3-col.l11 {
          width: 91.66666%
      }
      .w3-col.l12 {
          width: 99.99999%
      }
      }
      .w3-rest {
          overflow: hidden
      }
      .w3-stretch {
          margin-left: -16px;
          margin-right: -16px
      }
      .w3-content, .w3-auto {
          margin-left: auto;
          margin-right: auto
      }
      .w3-content {
          /*max-width: 1920px;*/
          padding-top: 70px;
      }
      .w3-auto {
          width: 100%!important;
      }
      .w3-cell-row {
          display: table;
          width: 100%
      }
      .w3-cell {
          display: table-cell
      }
      .w3-cell-top {
          vertical-align: top
      }
      .w3-cell-middle {
          vertical-align: middle
      }
      .w3-cell-bottom {
          vertical-align: bottom
      }
      .w3-hide {
          display: none!important
      }
      .w3-show-block, .w3-show {
          display: block!important
      }
      .w3-show-inline-block {
          display: inline-block!important
      }
      
      @media (max-width:1205px) {
      .w3-auto {
          max-width: 95%
      }
      }
      
      @media (max-width:600px) {
      .w3-modal-content {
          margin: 0 10px;
          width: auto!important
      }
      .w3-modal {
          padding-top: 30px
      }
      .w3-dropdown-hover.w3-mobile .w3-dropdown-content, .w3-dropdown-click.w3-mobile .w3-dropdown-content {
          position: relative
      }
      .w3-hide-small {
          display: none!important
      }
      .w3-mobile {
          display: block;
          width: 100%!important
      }
      .w3-bar-item.w3-mobile, .w3-dropdown-hover.w3-mobile, .w3-dropdown-click.w3-mobile {
          text-align: center
      }
      .w3-dropdown-hover.w3-mobile, .w3-dropdown-hover.w3-mobile .w3-btn, .w3-dropdown-hover.w3-mobile .w3-button, .w3-dropdown-click.w3-mobile, .w3-dropdown-click.w3-mobile .w3-btn, .w3-dropdown-click.w3-mobile .w3-button {
          width: 100%
      }
      }
      
      @media (max-width:768px) {
      .w3-modal-content {
          width: 500px
      }
      .w3-modal {
          padding-top: 50px
      }
      }
      
      @media (min-width:1025px) {
      .w3-modal-content {
          width: 900px
      }
      .w3-hide-large {
          display: none!important
      }
      .w3-sidebar.w3-collapse {
          display: block!important
      }
      }
      
      @media (max-width:1024px) and (min-width:601px) {
      .w3-hide-medium {
          display: none!important
      }
      }
      
      @media (max-width:992px) {
      .w3-sidebar.w3-collapse {
          display: none
      }
      .w3-main {
          margin-left: 0!important;
          margin-right: 0!important
      }
      .w3-auto {
          max-width: 100%
      }
      }
      .w3-top, .w3-bottom, .w3-top_2 {
          position: fixed;
          width: 100%;
          z-index: 1000;height: 70px;
      }
      .w3-top {
          top: 0;
          background: #000!important;
      }
      .w3-top_2{top: 70px;background:#FDF401!important;}
      .page-width{
          max-width: 1200px;
          margin: auto;
          display: block !important;
      }
      
      /* Cart Multi-Step Progress Bar */
      
      .container-fluid{
          top: -75px;
          position: absolute;
          display: flex;
          max-width: 1200px;
      }
      
      .multi-steps > li.is-active:before, .multi-steps > li.is-active ~ li:before {
           font-family: inherit;
           font-weight: 700;
      }
       .multi-steps > li.is-active:after, .multi-steps > li.is-active ~ li:after {
           background-color: #ededed;
      }
       .multi-steps {
           display: table;
           table-layout: fixed;
           width: 100%;
      }
       .multi-steps > li {
           text-align: center;
           display: table-cell;
           position: relative;
           color: #00c9ff;
      }
       .multi-steps > li:before {
           content: "\ ";
           display: block;
           margin: 0px auto 4px;
           background-color: #fff;
           width: 20px;
           height: 20px;
           line-height: 32px;
           text-align: center;
           font-weight: bold;
           border-width: 4px;
           border-style: solid;
           border-color: #00c9ff;
           border-radius: 50%;
      }
       .multi-steps > li:after {
           content: "";
           height: 2px;
           width: 100%;
           background-color: #00c9ff;
           position: absolute;
           top: 10px;
           left: 50%;
           z-index: -1;
      }
       .multi-steps > li:last-child:after {
           display: none;
      }
       .multi-steps > li.is-active:before {
           background-color: #fff;
           border-color: #00c9ff;
           border-width: 10px;
      }
       .multi-steps > li.is-active ~ li {
           color: #808080;
      }
       .multi-steps > li.is-active ~ li:before {
           border-color: #ededed;
           border-width: 4px;
      }
       
      
      
      /* END of Cart Multi-Step Progress Bar */
      
      /* Cart Tabs */
      
      .cart_form_fill {
          justify-content: space-between;
          align-items: flex-end;
          position: relative;
          margin: 0 25px;
          padding-top: 25px;
          padding-bottom: 15px;
      }
      
      .cart-tabs-select{
          width: 100%;
          overflow: hidden;
          margin: 10px auto;
      
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
      }
      
      .cart-tabs-option{
          border: 4px solid #00C9FF;
          border-radius: 5px;
          padding: 15px 20px;
          display: inline-block;
          width: 49%;
          margin: 10px 0px;
          text-transform: uppercase;
          min-height: 70px;
      }
      
      .cart-tabs-select button {
          background-color: inherit;
          border: 1px solid #979797;
          cursor: pointer;
          outline: none;
      }
      
      .cart-tabs-select button:hover {
          border: 4px solid #00C9FF;
      }
      
      .cart-tabs-select button.active {
          border: 4px solid #00C9FF;
      }
      
      .cart-tabcontent {
          display: none;
      }
      
      .cart-delivery-select{
          border: 1px solid #979797;
          border-radius: 5px;
          padding: 15px 20px;
          display: inline-block;
          width: 100%;
          margin: 0px 0px 20px;
          min-height: 70px;
          outline: none;
          text-align: left;
          cursor: pointer;
      }
      .cart-delivery-select:hover{
          border: 4px solid #00C9FF;
          border-radius: 5px;
      }
      .txt_link{
          text-decoration: underline;
      }
      .delivery_select_left{
          float: left;
      }
      .delivery_select_right{
          float: right;
      }
      #add_address_content_express{
          display: none;
      }
      #add_address_content_postage{
          display: none;
      }
      .tel_number_select{
          border: 2px solid black;
          padding: 2px 20px;
          display: inline-block;
          border-radius: 45px;
          font-weight: bold;
          margin: 5px 2px;
      }
      .tel_number_select:hover{
          background-color: #000;
          color: #fff;
          cursor: pointer;
      }
      
      .btn_refresh{
          background-color: #00C9FF;
          color: #fff;
          padding: 5px 30px;
          margin: 10px 0px;
          display: inline-block;
          border-radius: 45px;
          font-weight: bold;
          min-height: 28px;
      }
      .btn_edit{
          border: 2px solid black;
          padding: 5px 30px;
          text-align: center;
          display: inline-block;
          border-radius: 45px;
          font-weight: bold;
          min-height: 28px;
          float: right;
      }
      .btn_edit:hover{
          cursor: pointer;
          background-color: #000;
          color: #fff;
      }
      
      .btn_send{
          border: 2px solid black;
          padding: 5px 0px;
          text-align: center;
          margin: 10px 0px;
          display: inline-block;
          border-radius: 45px;
          font-weight: bold;
          min-height: 28px;
          vertical-align: 30px;
      }
      .btn_send:hover{
          cursor: pointer;
          background-color: #000;
          color: #fff;
      }
      
      .otp_tel_wrapper .text-input{
          width: 65% !important;
          display: inline-block;
      }
      
      .refresh_icon{
          background: url(../images/refresh.svg) no-repeat center center;
          height: 20px;
          width: 20px;
          display: inline-block;
          vertical-align: middle;
          position: relative;
      }
      
      .refresh_text{
          margin-left: 5px;
          display: inline-block;
      }
      
      .cart-card-header.disable{
          opacity: 0.2;
      }
      .cart-card-header.with_edit{
          display: inline-block;
      }
      
      .confirm_txt_wrapper{
          line-height: 1.2;
      }
      .confirm_txt{
          margin: 20px 0px;
      }
      
      /* END of Cart Tabs */
      
      .w3-bottom {
          bottom: 0
      }
      .w3-overlay {
          position: fixed;
          display: none;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          z-index: 2
      }
      .w3-bg {
          background: rgba(0,0,0,0.8);
          max-width: 360px;
          text-align: left;
      }
      @media screen and (max-width: 768px) {}
      @media screen and (max-width: 500px) {.w3-bg{max-width: none}}
      
      .w3-display-topleft {
          position: absolute;
          left: 0;
          top: 0
      }
      .w3-display-topright {
          position: absolute;
          right: 0;
          top: 0
      }
      .w3-display-bottomleft {
          position: absolute;
          left: 0;
          bottom: 0
      }
      .w3-display-bottomright {
          position: absolute;
          right: 0;
          bottom: 0
      }
      .w3-display-middle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%)
      }
      .w3-display-left {
          /*position: absolute;*/
          top: 50%;
          max-width: 1200px;
          display: block;
          margin: auto;
          transform: translate(0%, -110%);
          /*left: 0;
          transform: translate(0%, -50%);*/
          -ms-transform: translate(-0%, -50%)
      }
      
      .w3-display-left h1, .w3-display-left p  {
          line-height: 150%;
          margin: 0;
      }
      .w3-display-left h1{line-height: 1em}
      .w3-display-left p{font-weight: 900}
      .hr-pink{width: 50px;height: 4px;background-color:#FF00FF;margin-top: 15px;margin-bottom:15px;border-bottom: 0}
      
      .hr-black{width: 64px;height: 4px;background-color:#333;margin-top: 15px;margin-bottom:15px;border-bottom: 0}
      .hr-grey{width: 100%;height: 1px;background-color:#D8D8D8;margin-top: 17px;margin-bottom: -33px;border-bottom: 0}
      .hr-grey02{width: 100%;height: 1px;background-color:#D8D8D8;border-bottom: 0}
      .hr-grey_02{width: 100%;height: 1px;background-color:#D8D8D8;margin-top: 17px;border-bottom: 0}
      .hr-black_02{width: 100%;height: 1px;background-color:#333;border-bottom: 0}
      
      .w3-display-right {
          position: absolute;
          top: 50%;
          right: 0%;
          transform: translate(0%, -50%);
          -ms-transform: translate(0%, -50%)
      }
      .w3-display-topmiddle {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0%);
          -ms-transform: translate(-50%, 0%)
      }
      .w3-display-bottommiddle {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 0%);
          -ms-transform: translate(-50%, 0%)
      }
      .w3-display-container:hover .w3-display-hover {
          display: block
      }
      .w3-display-container:hover span.w3-display-hover {
          display: inline-block
      }
      .w3-display-hover {
          display: none
      }
      .w3-display-position {
          position: absolute
      }
      .w3-circle {
          border-radius: 50%
      }
      .w3-round-small {
          border-radius: 2px
      }
      .w3-round, .w3-round-medium {
          border-radius: 4px
      }
      .w3-round-large {
          border-radius: 8px
      }
      .w3-round-xlarge {
          border-radius: 16px
      }
      .w3-round-xxlarge {
          border-radius: 32px
      }
      .w3-row-padding, .w3-row-padding>.w3-half, .w3-row-padding>.w3-third, .w3-row-padding>.w3-twothird, .w3-row-padding>.w3-threequarter, .w3-row-padding>.w3-quarter, .w3-row-padding>.w3-col {
          padding: 0 8px
      }
      .w3-container, .w3-panel {
          padding: 0.01em 16px
      }
      
      
      @media screen and (max-width: 768px) {}
      @media screen and (max-width: 500px) {.w3-display-left{max-width:none;padding: 0; /*transform: translate(0%, -168%);*/position: absolute;bottom:21px;}}
      
      
      
      .w3-panel {
          margin-top: 16px;
          margin-bottom: 16px
      }
      .w3-code, .w3-codespan {
          font-family: Consolas, "courier new";
          font-size: 16px
      }
      .w3-code {
          width: auto;
          background-color: #fff;
          padding: 8px 12px;
          border-left: 4px solid #4CAF50;
          word-wrap: break-word
      }
      .w3-codespan {
          color: crimson;
          background-color: #f1f1f1;
          padding-left: 4px;
          padding-right: 4px;
          font-size: 110%
      }
      .w3-card, .w3-card-2 {
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)
      }
      .w3-card-4, .w3-hover-shadow:hover {
          box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19)
      }
      .w3-spin {
          animation: w3-spin 2s infinite linear
      }
      @keyframes w3-spin {
      0% {
      transform:rotate(0deg)
      }
      100% {
      transform:rotate(359deg)
      }
      }
      .w3-animate-fading {
          animation: fading 10s infinite
      }
      @keyframes fading {
      0% {
      opacity:0
      }
      50% {
      opacity:1
      }
      100% {
      opacity:0
      }
      }
      .w3-animate-opacity {
          animation: opac 0.8s
      }
      @keyframes opac {
      from {
      opacity:0
      }
      to {
      opacity:1
      }
      }
      .w3-animate-top {
          position: relative;
          animation: animatetop 0.4s
      }
      @keyframes animatetop {
      from {
      top:-300px;
      opacity:0
      }
      to {
      top:0;
      opacity:1
      }
      }
      .w3-animate-left {
          position: relative;
          animation: animateleft 0.4s
      }
      @keyframes animateleft {
      from {
      left:-300px;
      opacity:0
      }
      to {
      left:0;
      opacity:1
      }
      }
      .w3-animate-right {
          position: relative;
          animation: animateright 0.4s
      }
      @keyframes animateright {
      from {
      right:-300px;
      opacity:0
      }
      to {
      right:0;
      opacity:1
      }
      }
      .w3-animate-bottom {
          position: relative;
          animation: animatebottom 0.4s
      }
      @keyframes animatebottom {
      from {
      bottom:-300px;
      opacity:0
      }
      to {
      bottom:0;
      opacity:1
      }
      }
      .w3-animate-zoom {
          animation: animatezoom 0.6s
      }
      @keyframes animatezoom {
      from {
      transform:scale(0)
      }
      to {
      transform:scale(1)
      }
      }
      .w3-animate-input {
          transition: width 0.4s ease-in-out
      }
      .w3-animate-input:focus {
          width: 100%!important
      }
      .w3-opacity, .w3-hover-opacity:hover {
          opacity: 0.60
      }
      .w3-opacity-off, .w3-hover-opacity-off:hover {
          opacity: 1
      }
      .w3-opacity-max {
          opacity: 0.25
      }
      .w3-opacity-min {
          opacity: 0.75
      }
      .w3-greyscale-max, .w3-grayscale-max, .w3-hover-greyscale:hover, .w3-hover-grayscale:hover {
          filter: grayscale(100%)
      }
      .w3-greyscale, .w3-grayscale {
          filter: grayscale(75%)
      }
      .w3-greyscale-min, .w3-grayscale-min {
          filter: grayscale(50%)
      }
      .w3-sepia {
          filter: sepia(75%)
      }
      .w3-sepia-max, .w3-hover-sepia:hover {
          filter: sepia(100%)
      }
      .w3-sepia-min {
          filter: sepia(50%)
      }
      .w3-tiny {
          font-size: 10px!important
      }
      .w3-small {
          font-size: 12px!important
      }
      .w3-medium {
          font-size: 15px!important
      }
      .w3-large {
          font-size: 18px!important
      }
      .w3-xlarge {
          font-size: 24px!important
      }
      .w3-xxlarge {
          font-size: 36px!important
      }
      .w3-xxxlarge {
          font-size: 48px!important
      }
      .w3-jumbo {
          font-size: 64px!important
      }
      .w3-left-align {
          text-align: left!important
      }
      .w3-right-align {
          text-align: right!important
      }
      .w3-justify {
          text-align: justify!important
      }
      .w3-center {
          text-align: center!important
      }
      .w3-border-0 {
          border: 0!important
      }
      .w3-border {
          border: 1px solid #ccc!important
      }
      .w3-border-top {
          border-top: 1px solid #ccc!important
      }
      .w3-border-bottom {
          border-bottom: 1px solid #ccc!important
      }
      .w3-border-left {
          border-left: 1px solid #ccc!important
      }
      .w3-border-right {
          border-right: 1px solid #ccc!important
      }
      .w3-topbar {
          border-top: 6px solid #ccc!important
      }
      .w3-bottombar {
          border-bottom: 6px solid #ccc!important
      }
      .w3-leftbar {
          border-left: 6px solid #ccc!important
      }
      .w3-rightbar {
          border-right: 6px solid #ccc!important
      }
      .w3-section, .w3-code {
          margin-top: 16px!important;
          margin-bottom: 16px!important
      }
      .w3-margin {
          margin: 16px!important
      }
      .w3-margin-top {
          margin-top: 16px!important
      }
      .w3-margin-bottom {
          margin-bottom: 16px!important
      }
      .w3-margin-left {
          margin-left: 16px!important
      }
      .w3-margin-right {
          margin-right: 16px!important
      }
      .w3-padding-small {
          padding: 4px 8px!important
      }
      .w3-padding {
          padding: 8px 16px!important
      }
      .w3-padding-large {
          padding: 12px 20px!important
      }
      .w3-padding-16 {
          padding-top: 16px!important;
          padding-bottom: 16px!important
      }
      .w3-padding-24 {
          padding-top: 24px!important;
          padding-bottom: 24px!important
      }
      .w3-padding-32 {
          padding-top: 32px!important;
          padding-bottom: 32px!important
      }
      .w3-padding-48 {
          padding-top: 48px!important;
          padding-bottom: 48px!important
      }
      .w3-padding-64 {
          padding-top: 64px!important;
          padding-bottom: 64px!important
      }
      .w3-left {
          float: left!important
      }
      .w3-right {
          float: right!important
      }
      .w3-button:hover, .header_activate {
          border-bottom: 4px solid #00C9FF!important;
      }
      
      .w3-transparent, .w3-hover-none:hover {
          background-color: transparent!important
      }
      .w3-hover-none:hover {
          box-shadow: none!important
      }
      /* Colors */
      .w3-amber, .w3-hover-amber:hover {
          color: #333!important;
          background-color: #ffc107!important
      }
      .w3-aqua, .w3-hover-aqua:hover {
          color: #333!important;
          background-color: #00ffff!important
      }
      .w3-blue, .w3-hover-blue:hover {
          color: #fff!important;
          background-color: #2196F3!important
      }
      .w3-light-blue, .w3-hover-light-blue:hover {
          color: #333!important;
          background-color: #87CEEB!important
      }
      .w3-brown, .w3-hover-brown:hover {
          color: #fff!important;
          background-color: #795548!important
      }
      .w3-cyan, .w3-hover-cyan:hover {
          color: #333!important;
          background-color: #00bcd4!important
      }
      .w3-blue-grey, .w3-hover-blue-grey:hover, .w3-blue-gray, .w3-hover-blue-gray:hover {
          color: #fff!important;
          background-color: #607d8b!important
      }
      .w3-green, .w3-hover-green:hover {
          color: #fff!important;
          background-color: #4CAF50!important
      }
      .w3-light-green, .w3-hover-light-green:hover {
          color: #333!important;
          background-color: #8bc34a!important
      }
      .w3-indigo, .w3-hover-indigo:hover {
          color: #fff!important;
          background-color: #3f51b5!important
      }
      .w3-khaki, .w3-hover-khaki:hover {
          color: #333!important;
          background-color: #f0e68c!important
      }
      .w3-lime, .w3-hover-lime:hover {
          color: #333!important;
          background-color: #cddc39!important
      }
      .w3-orange, .w3-hover-orange:hover {
          color: #333!important;
          background-color: #ff9800!important
      }
      .w3-deep-orange, .w3-hover-deep-orange:hover {
          color: #fff!important;
          background-color: #ff5722!important
      }
      .w3-pink, .w3-hover-pink:hover {
          color: #fff!important;
          background-color: #e91e63!important
      }
      .w3-purple, .w3-hover-purple:hover {
          color: #fff!important;
          background-color: #9c27b0!important
      }
      .w3-deep-purple, .w3-hover-deep-purple:hover {
          color: #fff!important;
          background-color: #673ab7!important
      }
      .w3-red, .w3-hover-red:hover {
          color: #fff!important;
          background-color: #f44336!important
      }
      .w3-sand, .w3-hover-sand:hover {
          color: #333!important;
          background-color: #fdf5e6!important
      }
      .w3-teal, .w3-hover-teal:hover {
          color: #fff!important;
          background-color: #009688!important
      }
      .w3-yellow, .w3-hover-yellow:hover {
          color: #333!important;
          background-color: #ffeb3b!important
      }
      .w3-white, .w3-hover-white:hover {
          color: #333!important;
          background-color: #fff!important
      }
      .w3-black, .w3-hover-black:hover {
          color: #fff!important;
          background-color: #00C9FF!important
      }
      .w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {
          color: #333!important;
          background-color: #9e9e9e!important
      }
      .w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {
          color: #fff!important;
          background-color: #000!important
      }
      .w3-dark-grey, .w3-hover-dark-grey:hover, .w3-dark-gray, .w3-hover-dark-gray:hover {
          color: #fff!important;
          background-color: #616161!important
      }
      .w3-pale-red, .w3-hover-pale-red:hover {
          color: #333!important;
          background-color: #ffdddd!important
      }
      .w3-pale-green, .w3-hover-pale-green:hover {
          color: #333!important;
          background-color: #ddffdd!important
      }
      .w3-pale-yellow, .w3-hover-pale-yellow:hover {
          color: #333!important;
          background-color: #ffffcc!important
      }
      .w3-pale-blue, .w3-hover-pale-blue:hover {
          color: #333!important;
          background-color: #ddffff!important
      }
      .w3-text-amber, .w3-hover-text-amber:hover {
          color: #ffc107!important
      }
      .w3-text-aqua, .w3-hover-text-aqua:hover {
          color: #00ffff!important
      }
      .w3-text-blue, .w3-hover-text-blue:hover {
          color: #2196F3!important
      }
      .w3-text-light-blue, .w3-hover-text-light-blue:hover {
          color: #87CEEB!important
      }
      .w3-text-brown, .w3-hover-text-brown:hover {
          color: #795548!important
      }
      .w3-text-cyan, .w3-hover-text-cyan:hover {
          color: #00bcd4!important
      }
      .w3-text-blue-grey, .w3-hover-text-blue-grey:hover, .w3-text-blue-gray, .w3-hover-text-blue-gray:hover {
          color: #607d8b!important
      }
      .w3-text-green, .w3-hover-text-green:hover {
          color: #4CAF50!important
      }
      .w3-text-light-green, .w3-hover-text-light-green:hover {
          color: #8bc34a!important
      }
      .w3-text-indigo, .w3-hover-text-indigo:hover {
          color: #3f51b5!important
      }
      .w3-text-khaki, .w3-hover-text-khaki:hover {
          color: #b4aa50!important
      }
      .w3-text-lime, .w3-hover-text-lime:hover {
          color: #cddc39!important
      }
      .w3-text-orange, .w3-hover-text-orange:hover {
          color: #ff9800!important
      }
      .w3-text-deep-orange, .w3-hover-text-deep-orange:hover {
          color: #ff5722!important
      }
      .w3-text-pink, .w3-hover-text-pink:hover {
          color: #e91e63!important
      }
      .w3-text-purple, .w3-hover-text-purple:hover {
          color: #9c27b0!important
      }
      .w3-text-deep-purple, .w3-hover-text-deep-purple:hover {
          color: #673ab7!important
      }
      .w3-text-red, .w3-hover-text-red:hover {
          color: #f44336!important
      }
      .w3-text-sand, .w3-hover-text-sand:hover {
          color: #fdf5e6!important
      }
      .w3-text-teal, .w3-hover-text-teal:hover {
          color: #009688!important
      }
      .w3-text-yellow, .w3-hover-text-yellow:hover {
          color: #d2be0e!important
      }
      .w3-text-white, .w3-hover-text-white:hover {
          color: #fff!important
      }
      .w3-text-black, .w3-hover-text-black:hover {
          color: #333!important
      }
      .w3-text-grey, .w3-hover-text-grey:hover, .w3-text-gray, .w3-hover-text-gray:hover {
          color: #757575!important
      }
      .w3-text-light-grey, .w3-hover-text-light-grey:hover, .w3-text-light-gray, .w3-hover-text-light-gray:hover {
          color: #f1f1f1!important
      }
      .w3-text-dark-grey, .w3-hover-text-dark-grey:hover, .w3-text-dark-gray, .w3-hover-text-dark-gray:hover {
          color: #3a3a3a!important
      }
      .w3-border-amber, .w3-hover-border-amber:hover {
          border-color: #ffc107!important
      }
      .w3-border-aqua, .w3-hover-border-aqua:hover {
          border-color: #00ffff!important
      }
      .w3-border-blue, .w3-hover-border-blue:hover {
          border-color: #2196F3!important
      }
      .w3-border-light-blue, .w3-hover-border-light-blue:hover {
          border-color: #87CEEB!important
      }
      .w3-border-brown, .w3-hover-border-brown:hover {
          border-color: #795548!important
      }
      .w3-border-cyan, .w3-hover-border-cyan:hover {
          border-color: #00bcd4!important
      }
      .w3-border-blue-grey, .w3-hover-border-blue-grey:hover, .w3-border-blue-gray, .w3-hover-border-blue-gray:hover {
          border-color: #607d8b!important
      }
      .w3-border-green, .w3-hover-border-green:hover {
          border-color: #4CAF50!important
      }
      .w3-border-light-green, .w3-hover-border-light-green:hover {
          border-color: #8bc34a!important
      }
      .w3-border-indigo, .w3-hover-border-indigo:hover {
          border-color: #3f51b5!important
      }
      .w3-border-khaki, .w3-hover-border-khaki:hover {
          border-color: #f0e68c!important
      }
      .w3-border-lime, .w3-hover-border-lime:hover {
          border-color: #cddc39!important
      }
      .w3-border-orange, .w3-hover-border-orange:hover {
          border-color: #ff9800!important
      }
      .w3-border-deep-orange, .w3-hover-border-deep-orange:hover {
          border-color: #ff5722!important
      }
      .w3-border-pink, .w3-hover-border-pink:hover {
          border-color: #e91e63!important
      }
      .w3-border-purple, .w3-hover-border-purple:hover {
          border-color: #9c27b0!important
      }
      .w3-border-deep-purple, .w3-hover-border-deep-purple:hover {
          border-color: #673ab7!important
      }
      .w3-border-red, .w3-hover-border-red:hover {
          border-color: #f44336!important
      }
      .w3-border-sand, .w3-hover-border-sand:hover {
          border-color: #fdf5e6!important
      }
      .w3-border-teal, .w3-hover-border-teal:hover {
          border-color: #009688!important
      }
      .w3-border-yellow, .w3-hover-border-yellow:hover {
          border-color: #ffeb3b!important
      }
      .w3-border-white, .w3-hover-border-white:hover {
          border-color: #fff!important
      }
      .w3-border-black, .w3-hover-border-black:hover {
          border-color: #333!important
      }
      .w3-border-grey, .w3-hover-border-grey:hover, .w3-border-gray, .w3-hover-border-gray:hover {
          border-color: #9e9e9e!important
      }
      .w3-border-light-grey, .w3-hover-border-light-grey:hover, .w3-border-light-gray, .w3-hover-border-light-gray:hover {
          border-color: #f1f1f1!important
      }
      .w3-border-dark-grey, .w3-hover-border-dark-grey:hover, .w3-border-dark-gray, .w3-hover-border-dark-gray:hover {
          border-color: #616161!important
      }
      .w3-border-pale-red, .w3-hover-border-pale-red:hover {
          border-color: #ffe7e7!important
      }
      .w3-border-pale-green, .w3-hover-border-pale-green:hover {
          border-color: #e7ffe7!important
      }
      .w3-border-pale-yellow, .w3-hover-border-pale-yellow:hover {
          border-color: #ffffcc!important
      }
      .w3-border-pale-blue, .w3-hover-border-pale-blue:hover {
          border-color: #e7ffff!important
      }
      /* new add style 20190308 */
      a.txt-link, .txt-link {
          text-decoration: underline;
          font-weight: bold;text-shadow: 0.4px 0 #000;letter-spacing:0.5px;
      }
      .share-box a.txt-link{
          text-decoration: underline !important;
          vertical-align: -2px !important;
      }
      a:hover.txt-link, .txt-link:hover {
          color: #00C9FF;text-shadow: 0.4px 0 #00C9FF;
      }
      .w3-footer-link a {
          text-decoration: none;
          font-size: 0.8rem;
          padding: 0 30px 0 0;
          display: inline-block;
      }
      @media screen and (max-width: 768px){
          .w3-footer-link a{font-size: 12px; margin-bottom: 16px;padding-right:16px;}
          .w3-footer-link a:last-child{padding-right:0}
      }
      .w3-footer-dot a:before {
          content: "・";
          font-size: 1rem;
      }
      .w3-link-sp {
          /*margin-top: 40px;*/
      }
      .w3-link-sp a:nth-child(n+2):before {
          content: '|';
          padding-right: 30px;
      }
      @media screen and (max-width: 768px){
          .w3-link-sp a:nth-child(n+2):before{padding-right: 16px;}
      }
      ul.slider-nav {
          margin-left: -40px;
      }
      .slider-nav li {
          list-style: none;
          display: inline-block;
          font-size: 0.8em;
          margin-right: 3px;
      }
      .slider-nav li.active {
          color: #FF00FF;
      }
      .footer-link {
          width: 69%;
          display: inline-block;
      }
      @media screen and (max-width: 768px){
          .footer-link{width:70%;}
      }
      .footer-icon {
          width: 30%;
          text-align: right;
          float: right;
      }
      .footer-icon .fab {
          font-size: 1.5em;
          margin: 0 5px;
      }
      /*.banner-txt {
          max-width: 1200px;
      }*/
      #intro {
          background-color:  #FDF401;
          padding: 30px 0 60px;
      }
      #intro .search-container{
          border: 3px solid black;
          height: 48px;
          border-radius: 42px;
          max-width: 50%;
          margin: auto;
          display: block;
          background-color: #fff;
      }
      #intro input[type=text] {
        padding: 6px;
        margin-top: 4px;
        /*font-size: 17px;*/
        border: none;
        width: 80%;
        background-color: rgba(0, 0, 0, 0);
      
        font-family: 'Soleil', Verdana, sans-serif;
        font-size: 14px;
        line-height: 1.5;
      }
      #intro .search-container button {
        padding: 6px 10px;
        margin-bottom: 5px;
        margin-right: -3px;
        background-color: rgba(0, 0, 0, 0);
        font-size: 17px;
        border: 3px solid black;
        border-radius: 42px;
        cursor: pointer;
        float: right;
      }
      
      .right-panel .w3-row .region-areas{
          margin-top: 20px !important;
          margin-bottom: 20px !important;
          text-align: left;
      }
      .right-panel .w3-row .selected{
          background-color: #000;
          color: #fff;
          display: inline;
          margin: 10px;
          padding: 2px 20px;
          border-radius: 42px;
          text-align: center;
      }
      .right-panel .w3-row .region{
          display: inline;
          margin: 10px;
          text-align: center;
      }
      .right-panel .w3-row .region:hover{
          color: #00C9FF;
      }
      #band {
          margin-top: -20px;
      }
      /*hr {
          border: 0;
          border-bottom: 1px solid #979797;
          width: 100%;
      }*/
      .right-panel, .left-panel {
          display: inline-block;
          vertical-align: top;
      }
      .region-picker{
          width: 100%;
          border: 3px solid black;
          border-radius: 42px;
          height: 48px;
          margin-bottom: 20px;
      }
      .region-select{
          height: 100%;
          line-height: 2.5;
          width: 24%;
          border-radius: 42px;
          background-color: #fff;
          display: inline-block;
      }
      .region-select.selected{
          background-color: black;
          color:#fff;
      }
      h2.intro-title {
          /*font-size: 3em;*/
          line-height: 120%;
          margin: 20px 0 0;
      }
      .sim-description {
          width: 30%;
          padding-right: 40px;
      }
      .sim-plans {
          width: 69%;
      }
      /*.travelpass-plans{
          width:47%;
          margin:10px;
      }*/
      .primary-plan {
          width: 100%;
          /*min-height: 250px;*/
          position: relative;
          margin-bottom: 24px;
      }
      .primary-plan .plan-icon {
          /*position: absolute;
          top:20px;
          right: 20px;
          margin-right: 20px;*/
          float: right;
          text-align: right;
          
      }
      .primary-plan .plan {
          background-color: #fff;
      }
      .primary-plan .plan-box {
          background-color: #fff;
          position: relative;
          padding: 16px;
      }
      .primary-plan .black-title {
          position: absolute;
          top:-20px;
          left: 20px;
          font-size: 1.3em;
          padding: 5px 10px;
          background-color: #000;
          color: #fff;
          text-transform: uppercase;
      }
      .primary-plan .highlight-title {
          /*white-space: pre;
          position: absolute;
          top:30px;
          left: 20px;*/
          min-height: 24px;
          text-align: left;
          font-size: 1em;
          padding: 0px 10px;
          background-color: #FDF401;
          color: #333;
          text-transform: uppercase;
          font-family: 'HouseSlant', "Segoe UI", Arial, sans-serif;
          display: inline-block;
      }
      
      .highlight-black {
          /*white-space: pre;
          position: absolute;
          top:30px;
          left: 20px;
          background-color: #000;
          padding: 0px 10px;
          float: left;
          */
          
          min-height: 24px;
          text-align: left;
          font-size: 1em;
          color: #fff;
          text-transform: uppercase;
          font-family: 'HouseSlant', "Segoe UI", Arial, sans-serif;
          display: block;
      }
      .primary-plan .plan-des {
          text-align: left;
          /*font-size: 0.9em;*/
      }
      .plan-img-full {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 7px 7px 0px 0px;position: relative;
      }
      .bg-img1{
          width:100%;
          height:180px;
          background-image: url("../images/plan-1.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
      }
      .bg-img2{
          width:100%;
          height:150px;
          background-image: url("../images/plan-2.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
      }
      .bg-img3{
          width:100%;
          height:150px;
          background-image: url("../images/shutterstock_2.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
      }
      .bg-img4{
          width:100%;
          height:150px;
          background-image: url("../images/shutterstock_3.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
      }
      .bg-img5{
          width:100%;
          height:150px;
          background-image: url("../images/shutterstock_4.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
      }
      .bg-img6{
          width:100%;
          height:150px;
          background-image: url("../images/shutterstock_5.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
      }
      .primary-plan .plan-price {
          float: right;
      }
      .price_0508{line-height: 1em;}
      .primary-plan .plan-price p, .price_0508 p {
          /*font-size: 1.5em;*/
          margin: 0;
      }
      .primary-plan .plan-price p.cross , .price_0508 p.cross{
          text-decoration: line-through;
          line-height: 1em;text-align: right;
      }
      .card-startfrom{
          line-height: 1em;
          float: right; font-weight: bold;
      }
      .primary-plan .plan-price span, .price_0508 span {
          /*font-size: 4em;*/
          line-height: 100%;
      }
      .primary-plan .plan-price span:before,  .price_0508 span:before {
          content: '$';
          font-size: 0.8em;
          position: relative;
          top: -4px;
      }
      .secondary-plan {
          width: calc(100% / 2 - 10px);
          position: relative;
          display: inline-block;margin-bottom: 24px
      }
      .secondary-plan:last-child, .secondary-plan:nth-last-child(2){margin-bottom: 0}
      @media screen and (max-width: 768px) {
          .secondary-plan:nth-last-child(2){margin-bottom: 24px}
      }
      .onethird-size {
          width: calc(100% / 2 - 10px);
          position: relative;
          display: inline-block;
      }
      
      .onethird-size .plan-icon {
          /*position: absolute;
          right: 0px;
          margin-right: 20px;*/
          float: right;
          text-align: right;
          
      }
      .onethird-size .plan {
          background-color: #fff;
      }
      .onethird-size .plan-box {
          background-color: #fff;
          position: relative;
          padding: 20px;
      }
      .card-wrapper{
          overflow:hidden;
          border-radius: 7px;
      }
      .plan-box{
          border-radius: 7px;
      }
      .onethird-size .black-title {
          position: absolute;
          top:-20px;
          left: 20px;
          font-size: 1.3em;
          padding: 5px 10px;
          background-color: #000;
          color: #fff;
          text-transform: uppercase;
      }
      .slider-header-wrapper .highlight-title {
          margin-top: 50px;
      }
      .onethird-size .highlight-title {
          /*position: absolute;
          top:30px;
          left: 20px;*/
          display: block;
          min-height: 24px;
          text-align: left;
          float: left;
          font-size: 1em;
          padding: 0px 10px;
          background-color: #FDF401;
          color: #333;
          text-transform: uppercase;
          font-family: 'HouseSlant', "Segoe UI", Arial, sans-serif;
      }
      .onethird-size .plan-des {
          text-align: left;
          /*font-size: 0.9em;*/
      }
      .plan-title{
          text-align: left;
      }
      
      /*.secondary-plan .plan-title {
          font-size: 2em;
          font-weight: bold;
          text-align: left;
          letter-spacing: -1px;
          line-height: 120%;
          min-height: 80px;
      }*/
      .secondary-plan .plan-icon {
          margin: 0;
          text-align: right;
          float: right;
      
          /*position: absolute;
          right: 20px;
          top: 20px;*/
      }
      .icon-inline{
          display: inline-block;
          position: relative;
      }
      .icon-shadow{
          width: 80px;
          -webkit-filter: drop-shadow(0px 5px 20px rgba(5,59,126,.35));
          filter: drop-shadow(0px 5px 20px rgba(5,59,126,.35))
      }
      .secondary-plan .plan-des {
          text-align: left;
          /*font-size: 0.9em;*/
          /*min-height: 70px;*/
      }
      .secondary-plan .plan-price {
          /*font-size: 3em;*/
          color: #000;
          text-align: right;line-height: 1em;
      }
      .secondary-plan .plan-price:before {
          content: '$';
          font-size: 0.8em;
          position: relative;
          top: -3px;
      }
      
      .idv-plan {
          /*max-width: 500px;*/
          width: 50%;
          float: left;
      }
      .idv-details {
          /*max-width: 500px;*/
          width: 50%;
          float: right;
          background-color: #fff;
      }
      .padding4 {
          padding: 4px;
      }
      .padding8 {
          padding: 8px;
      }
      .padding16 {
          padding: 16px;
      }
      .padding10 {
          padding: 10px;
      }
      .padding16 {
          padding: 16px;
      }
      .padding20 {
          padding: 20px;
      }
      .padding30 {
          padding: 30px;
      }
      .padding40 {
          padding: 40px;
      }
      
      
      @media screen and (max-width: 768px) {.w3-display-left>div{padding:24px;}}
      
      
      .radius10 {
          border-radius: 7px;
      }
      .radius5 {
          border-radius: 5px;
      }
      .width-90 {
          width: 90%;
      }
      .width-80 {
          width: 80%;
      }
      .width-75 {
          width: 75%;
      }
      .width-70 {
          width: 70%;
      }
      .width-60 {
          width: 60%;
      }
      .width-50 {
          width: 50%;
      }
      .width-40 {
          width: 40%;
      }
      .width-30 {
          width: 30%;
      }
      .width-25 {
          width: 25%;
      }
      .width-20 {
          width: 20%;
      }
      .width-10 {
          width: 10%;
      }
      .width-full {
          width: 100%;
          display: inline-flex;
      }
      .shadow {
          position:relative;background: #fff;
          box-shadow:0 0 20px rgba(0,0,0,0.1);
      }
      
      .title-sm {
          font-size: 1.2em;
          font-weight: bold;
      }
      /*.title-md {
          font-size: 1.6em;
          font-weight: bold;
      }*/
      .title-lg {
          font-size: 2em;
          font-weight: bold;
      }
      .gray-box {
          background-color: #EFEFEF;
          margin: 20px 0;
          margin-top: 40px;
          /*font-size: 0.9em;*/
      }
      @media screen and (max-width: 768px) {.gray-box{margin-top: 56px;}}
      
      .plan-des-wrapper{
          position: absolute;
          left: 0px;
          bottom: 0px;
          padding: 20px;
      }
      .bg-yallow {
          background-color: #FDF401;
      }
      .bg-green {
          background-color: #04DC60;
      }
      .bg-cyan {
          background-color: #00BEF2;
      }
      .bg-magenta {
          background-color: #F200F2;
      }
      .bg-white{background-color: #fff;}
      .bg-black{background-color: #000;}
      .bg-yellow{background-color: #FFFF30;}
      .bg-red{background-color: #FF0048;}
      .bg-grey{background-color: #EEEEEE}
      .bg-grey-02{background-color: #E6EAEB;}
      @media screen and (max-width: 768px) {
          .bg-white-sp{background-color: #fff;}
      }
      
      .share-box {
          width: 100%;
      }
      .promo-box {
          border: 5px solid #000;
          padding: 20px;
          text-align: left;
          margin-bottom: 30px;
          font-size: 0.9em;
      }
      .promo-box h3 {
          margin: 0;
      }
      .auto-renew {
          margin: 20px 0 40px;
      }
      .set_default_address {
          margin: 5px 0px;
      }
      .inner-banner {
          height: 306px;
      }
      .btnWrapper .widget_button {
          height: 55px;
          min-width: 14rem;
      }
      .btnWrapper .widget_button:nth-child(n+2) {
          margin-left: 20px;
      }
      .btnWrapper .widget_button .outline {
          background-color: #ffff30;
      }
      @media screen and (max-width: 1024px){
          .btnWrapper .widget_button{min-width: 15.9rem;}
          .widget_button .outline, .widget_button a, .widget_button button{border-radius: 2.8rem;}
          .detail_btn{margin:48px 0 0!important;}
      }
      .main-img {
        position: relative;
        max-height: 100%;
        height: 100%;
        background-position: center center;
        background: no-repeat;
        background-size: cover;
      }
      .slider-img {
        position: relative;
        width: 100%;
        height: 313px;
        background-image: url("../images/slider-img.png");
        background-position: center;
        background-size: cover;
      }
      .slider-img2 {
        position: relative;
        width: 100%;
        height: 313px;
        background-image: url("../images/shutterstock_1.png");
        background-position: center;
        background-size: cover;
      }
      .slider-img3 {
        position: relative;
        width: 100%;
        height: 313px;
        background-image: url("../images/shutterstock_6.png");
        background-position: center;
        background-size: cover;
      }
      .slider-img4 {
        position: relative;
        width: 100%;
        height: 313px;
        background-image: url("../images/netflix.png");
        background-position: center;
        background-size: cover;
      }
      .slider-nav-dot{
          float: right;
          padding-right: 20px;
          padding-bottom: 10px;
          bottom: 0px;
          right:0px;
          position: absolute;
      }
      }
      .banner-img {
        /*background-image: url(../images/mv4.jpg);*/
        position: relative;
        max-height: 100%;
        height: 100%;
        background-position: center center;
        background: no-repeat;
        background-size: cover;
      }
      .detail-banner{
        position: relative;
        max-height: 100%;
        height: 313px;
        background-position: center center;
        background: no-repeat;
        background-size: cover;
      }
      .detail-banner.createplan{
        background-image: url(../images/mv4.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;
      }
      
      .detail-banner.travelbox{
        background-image: url(../images/travel.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;
      }
      .detail-banner.merchandise{
          background-image: url(../images/merchandise.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;}
      .detail-banner.travelpass{
        background-image: url(../images/travelpass-jp.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;
      }
      .detail-banner.travelpass_02{
        background-image: url(../images/travel_pass_2.png);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;
      }
      .detail-banner.reward {
          background-image: url(../images/reward_bg.png);
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: cover;
          height: 313px;
          background-attachment: fixed;
      }
      .detail-banner.reward_03{
        background-image: url(../images/slider-img.png);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;
      }
      .detail-banner.promotion{
        background-image: url(../images/promotion_bg.png);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        height: 313px; 
        background-attachment: fixed;
      }
      .component-features .detail-features {
          background: #fdf401 ; /* Old browsers */
      background: -moz-linear-gradient(left, #fdf401 0%, #fdf401 50%, #ffffff 51%, #ffffff 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, #fdf401 0%,#fdf401 50%,#ffffff 51%,#ffffff 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, #fdf401 0%,#fdf401 50%,#ffffff 51%,#ffffff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdf401', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */
      
          /*background-color: #FDF401 !important;*/
      }
      @media screen and (max-width: 768px){
          .detail-banner.createplan, .detail-banner.travelbox, .detail-banner.merchandise, .component-features .detail-features{height: 284px;}
      }
      /* tab */
      .tabs-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          font-size: 0.9em;
      }
      .tabs-nav li:first-child a {
          margin-right: 20px;
      }
      .tabs-nav .tab-active a {
          text-align: center;
          color: #000;
          /*font-size: 1.8em;
          font-weight: bold;*/
          cursor: default;
          border-bottom: 5px solid #000;
          padding: 5px 0;text-shadow: 0.8px 0 #000;
      }
      .tabs-nav a {
          display: block;
          /*font-size: 1.8em;
          font-weight: bold;*/
          padding: 5px 0;
          text-decoration: none;
          color: #AFAFAF;text-shadow: 0.8px 0 #AFAFAF;
      }
      .tabs-nav li {
          float: left;
      }
      .tabs-stage { 
          clear: both;
          margin-bottom: 20px;
          position: relative;
          top: -1px;
          border-top: 1px solid #979797;
          text-align: left;
      
      }
      .tabs-stage p {
          margin: 0;
          font-size: 0.9em;
          line-height: 150%;
          padding: 10px 0;
      }
      .tabs-stage hr {
          width: 40px;
          border: 0;
          border-bottom: 4px solid #000;
      }
      .tabs-stage ul.dot-ul {
          margin-left: -20px;
      }
      .tabs-stage ul.dot-ul li {
          list-style: disc outside none;
          margin-top: 24px;
          font-size: 0.9em;
      }
      .tabs-stage ul.dot-ul li:first-child{margin-top: 0}
      .title-md.im-underline {
          background-position: 0 0.8em;
          background-size: 2px 0.4em;
      }
      .shopping-cart {
          margin: 15px;
      }
      .account-login{
          margin: 15px ;
      }
      .login{
          background: url(../images/login.svg) no-repeat center center;
          height: 40px;
          width: 30px;
          position: relative;
          background-size: 76%;
      }
      .logged{background: url(../images/logged.svg) no-repeat center center;}
      .cart {
          background: url(../images/cart.svg) no-repeat center center;
          height: 38px;
          width: 40px;
          position: relative;
          background-size: 57%;
          bottom: -1px;
      }
      .cart .circle{
          background-color: #FDF401;
          border-radius: 48px;
          width: 18px;
          height: 18px;
          float: right;
      }
      .cart .count {
          text-align: center;
          color: #333000;
          font-size: 0.7em;
          width: 100%;
          margin-top: 0px;
          display: inline-table;
          vertical-align: 2px;
      }
      
      .cart-card-wrapper{
          border: 2px solid #F0F4F5;
          border-radius: 10px;
      }
      .cart-card{
          padding: 20px;
      }
      .cart-card-subitem-wrapper{
          border-top: 1px solid #F0F4F5;
      }
      
      .cross-icon{
          background: url(../images/logged-menu/close.svg) no-repeat center center;
          height: 20px;
          width: 20px;
      }
      .cart-cross{
          display: inline-block;
          float: right;
          margin-top: 15px;
      }
      .cart-header{
          display: inline-block;
      }
      
      .cart-card-icon{
          float: left;
          display: inline-block;
      }
      .cart-plan-icon{
          background: url(../images/icon-cart-plan.svg) no-repeat center center;
          height: 55px;
          width: 55px;
      }
      .cart-mdse-icon{
          background: url(../images/icon_interest_movie.svg) no-repeat top center;
          height: 55px;
          width: 55px;
      }
      
      .cart-travel-icon{
          background: url(../images/dashboard/travel_pass.svg) no-repeat top center;
          height: 55px;
          width: 55px;
          background-size: 76%
      }
      
      .cart-card-des{
          display: inline-block;
          margin-left: 20px;
          /*max-width: 350px;*/
      }
      .cart-txt-link{
          text-decoration: underline;
      }
      .cart-card-header{
          font-family: Soleil;
          font-weight: bold;
          font-size: 18px;
          letter-spacing: 0;text-shadow: 0.6px 0 #333;
      }
      .delivery_cost:before {
          content: '$';
          font-size: 0.5em;
          vertical-align: super;
      }
      .delivery_cost{
          font-family: Soleil;
          font-size: 2.1em;
          line-height: 0.8;
          color: #333000;
          letter-spacing: 0;
      
      
      }
      .cart_btn{
          max-width: 305px;
          cursor: pointer;
      }
      .cart-qty{
          /*float: right;
          display: inline-block;*/
          width: 100px;
      }
      /*.cart-qty_select{
      }
      .cart-card-price{
          float: right;
          display: inline-block;
      }*/
      .remove-txt{
          float: right;
          display: inline-block;
      }
      .cart-card-des .auto-renew {
          margin: 20px 0px 10px;
      }
      .cart-card-price:before{
          content: '$';
          font-size: 0.8em;
          position: relative;
          top: -4px;
      }
      
      
      /* responsive */
      @media screen and (max-width: 1200px) {
          
      }
      @media screen and (max-width: 992px) {
          
      }
      @media screen and (max-width: 1024px) {
          .login_content {
          display: block;
          }
          .right-panel, .left-panel {
          width: 100% !important;
          /*padding: 20px;*/
          }
      
      }
          
      }
      @media screen and (max-width: 768px) {
      
      .linebreak{
          display: block !important;
      }
      .w3-bar .w3-bar-item {
          padding: 10px;
          margin: 12px 0px;
      }
      .w3-padding-large {
          padding: 10px;
      }
      /*.component-features h1 {
          font-size: 3em;
      }*/
      #intro {
          width: 100%;
          text-align: left;
          padding: 20px 20px 50px 20px;
      }
      .right-panel, .left-panel {
          width: 100% !important;
          padding: 20px;
      }
      .secondary-plan {
          margin-bottom: 30px;
          width: 100%;
      }
      
      .onethird-size {
          margin-bottom: 30px;
          width: 100%;
      }
      .sim-description {
          padding: 20px;
          max-width: none;
      }
      .features.width-full {
          display: block;
      }
      .btnWrapper {
          text-align: center;
      }
      .btnWrapper .widget_button:nth-child(n+2) {
          margin: 20px 0 0 0;
      }
      footer {
          height: auto;
      }
      .w3-light-grey .width-full {
          display: block;
      }
      .footer-link, .footer-icon {
          width: 100%;
      }
      .footer-link .w3-footer-dot a {
          width: 49%;
          display: inline-block;
      }
      .footer-icon {
          margin-top: 10px;
          text-align: left;
      }
      .idv-plan, .idv-details {
          /*max-width: 500px;*/
          width: 50%;
          float: left;
          padding: 15px;
      }
      .w3-display-left {
          top: 75%;
      }
      .w3-row.w3-padding-32 {
          padding: 0 !important;
      }
      .fa-bars {
          font-size: 2em;
      }
      }
      @media screen and (min-width: 480px) {
          .remove-txt-mob{
          display: none !important;
          }
      }
      @media screen and (max-width: 480px) {
          .cart-card-header.with_edit {
              max-width: 50%;
          }
          .multi-steps{
              max-width: 90%;
          }
          .cart_btn{
              max-width: 100% !important;
          }
          .delivery_select_right{
              float: left;
              margin-top: 20px;
          }
          .cart-tabs-option{
          width: 100%;
          margin: 5px 0px;
      }
          /*.remove-txt{
          display: none !important;
          }*/
          .remove-txt-mob{
          display: inline-block;
          float: right;
          }
          .cart-card-icon{
              display: inline-block !important;
              max-width: 60px;
              float: none;
          }
          .cart-card-des{
              margin-left: 0px !important;
              width: 100% !important;
              display: block !important;
          }
          .cart-card-price {
          float: none;
          }
      
          .page-width{
          padding: 0px !important;
          }
          #intro .search-container{
              max-width: 80%;
          }
          .shopping-cart {
              margin: 15px 8px;
              margin-right: 16px;
          }
          .account-login{
              margin: 15px 8px;
          }
          .w3-bar .w3-bar-item {
          /*padding: 15px;*/
          }
          .w3-padding-large{padding: 2px 4px!important;}
          .idv-plan, .idv-details {
              max-width: none;
              width:100%;
              padding: 15px;
          }
          .scrolling-wrapper {
            overflow-x: scroll;
            overflow-y: hidden;
            white-space: nowrap;
            padding-right:20px;
      
            /*.card {
              display: inline-block;
            }*/
          }
          .scrolling-wrapper.float-right{
              padding-right: 0px !important;
          }
          .float-right .submenu-text{
          float: right;
          }
          .overlay-gradient{
              z-index: 2;
              background-image: linear-gradient(90deg, rgba(253,254,1,0), #FDF401);
              width: 6%;
              height: 47px;
              right:0;
              top:0;
              position: fixed;
          }
          .overlay-gradient2{
              z-index: 2;
              background-image: linear-gradient(-90deg, rgba(253,254,1,0), #FDF401);
              width: 6%;
              height: 47px;
              left:0;
              top:0;
              position: fixed;
          }
      }
      
      /** STYLE.CSDS **/
      

   

/*offer page inclination background*/
.inclination_bg {
  position: relative;
  overflow: hidden;
  padding: 580px 0;
  margin: 0;padding-top: 0;
}
.inclination_bg:before{content: '';background: url(../images/offer-bg.svg) no-repeat center top;width: 120%;
  height: 80%;position: absolute; z-index: 1;top: 15px;left: 164px;}

.inclination_bg:after {
  content: '';
  position: absolute;
  top: -120px;
  left: 0;
  width: 120%;
  height: 80%;
  margin: 2% -10% 0;
  background: #FDF401;
  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: rotate(-3deg);
  -ms-transform: rotate(-3deg);
  transform: rotate(-3deg);
  z-index: 0;
}

.inclination_bg_submenu, .inclination_bg_db, .inclination_bg_btn{padding-bottom: 650px;}
.inclination_bg_submenu:before, .inclination_bg_db:before, .inclination_bg_btn:before{top: 55px;}
.inclination_bg_submenu:after, .inclination_bg_db:after, .inclination_bg_btn:after{top: -156px;}


/*offer page main slider*/
.offer_main_slider_01{background-image:url(../images/mv1_pc.jpg);background-position: center;}
@media screen and (max-width: 768px) {.offer_main_slider_01{background-image:url(../images/mv1_sp.jpg);}}


/*offer page inclination on top content*/
.offer-header{font-family: HouseSlant;font-size: 60px;color: #000;letter-spacing: 0;margin: 0;}
.offer-header-p{/*max-width: 643px*/}
.inclination_ontop{position:relative;max-width: 1200px;padding: 0px 16px 0px 16px;margin:0 auto;top: -527px;margin-bottom: -427px;z-index: 1;}
.inclination_ontop.listing{padding: 0px 8px 0px 24px;}
.inclination_ontop.dashboard_ontop, .inclination_ontop.dashboard_btn_ontop, .inclination_ontop.inbox_ontop{top: -557px;margin-bottom: -435px;}
.inclination_ontop_submenu{top: -557px;}

@media screen and (max-width: 1024px) {
  .inclination_bg{padding-bottom: 630px}
  .inclination_bg:before{background-size: 46%;left: 35px;}
  .inclination_bg:after{/*height: 105%;*/height: 57%;}
  .inclination_ontop, .inclination_ontop.listing{top: -605px; margin-bottom: -475px;padding:0 16px;}
  .inclination_bg_submenu{height: 670px}
  .inclination_ontop_contact{margin-bottom: -555px;}
  .footer_padding_contact{padding-bottom: 160px;}
  .inclination_bg.inclination_bg_submenu.slick_listing:after{height: 781px !important;}
}
@media screen and (max-width: 480px){
  .inclination_bg:after {height: 57%}
  .inclination_bg.listing:after {/*height: 550px !important;*/}
  .inclination_bg.listing:before {top:15px;}
  .inclination_bg.inclination_bg_submenu.listing:before{top:58px;}
  .inclination_ontop.listing, .inclination_ontop.inbox_ontop{margin-bottom: -505px;top: -605px;}
  .inclination_bg.inclination_bg_submenu.listing:after {height: 710px !important;}
  .inclination_bg.inclination_bg_submenu.slick_listing:after {height: 590px !important;}
  .inclination_bg_db:before{top: -25px}
  .inclination_bg_btn:before{top: 55px}
  .inclination_bg_btn:after{top: -76px;}
}

/*logged in submenu*/
.w3-top_2 .w3-button{color: #333;}
.w3-top_2 .w3-bar.w3.header-text>a{opacity: 1}
.w3-top_2 .w3-button:hover{border-bottom: 0!important}
/*offer page slider keyframes*/
@keyframes slidy {
0% { left: 0%; }
20% { left: 0%; }
25% { left: -100%; }
45% { left: -100%; }
50% { left: -200%; }
70% { left: -200%; }
75% { left: -300%; }
95% { left: -300%; }
100% { left: -400%; }
}

/*offer page slider dots keyframes*/
@keyframes dot01_color {
0% { color:#00C9FF; }
20% { color:#00C9FF; }
25% { color:#fff; }
95% { color:#fff; }
100% { color:#00C9FF; }
}

@keyframes dot02_color {
0% { color:#fff; }
20% { color:#fff; }
25% { color:#00C9FF; }
45% { color:#00C9FF; }
50% { color:#fff; }
100% { color:#fff; }
}

@keyframes dot03_color {
0% { color:#fff; }
45% { color:#fff; }
50% { color:#00C9FF; }
70% { color:#00C9FF; }
75% { color:#fff; }
100% { color:#fff; }
}

@keyframes dot04_color {
0% { color:#fff; }
70% { color:#fff; }
75% { color:#00C9FF; }
95% { color:#00C9FF; }
100% { color:#fff; }
}

div#slider { overflow: hidden; position: relative;width: 98%;}
.slider_content div { width: 20%; float: left; display: inline-block;position: relative;}
.slider_content div img{width: 100%}
.slider_content { 
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  text-align: left;
  animation: 20s slidy infinite; 
}


.offer_slider_dot{position: absolute;bottom: 20px;right: 35px;z-index: 2;}
.offer_slider_dot .slider-nav li{color: #fff;}
.offer_slider_dot .slider-nav li:first-child{animation: 20s dot01_color infinite;}

.offer_slider_dot .slider-nav li:nth-child(2){animation: 20s dot02_color infinite;}

.offer_slider_dot .slider-nav li:nth-child(3){animation: 20s dot03_color infinite;}

.offer_slider_dot .slider-nav li:nth-child(4){animation: 20s dot04_color infinite;}
.offer_slider_box{position: relative;}
.slider_bg img{opacity: 0;width: 100%;}
.slider_bg{border: 7px solid #000;width: 98%;position: absolute;top: 20px;right: 0;z-index: -1;height: 100%;}


@media screen and (max-width: 768px) {
  div#slider, .slider_bg {width:95%}
  .offer_slider_dot{bottom: 0px; right: 13px;}
}


/*offer page content*/
.offer_content{padding-left: 16px;padding-right:16px;display: flex!important}
.offer_left{width: 376px;padding-right: 32px;padding-top: 5px;}
.offer_right{width: calc(100% - 375px);margin-bottom:80px;}

@media screen and (max-width: 768px) {
  .offer_content{flex-direction:column;padding-left: 16px!important;padding-right:16px!important;}
  .offer_left, .offer_right{width: 100%}
  .offer_right{margin-top: 40px;margin-bottom: 40px}
  .offer_left{padding-right: 0}
}

/*offer page heading*/
.offer_heading_highlight{font-family: HouseSlant;font-size: 16px;text-transform: uppercase;letter-spacing: 0.2px; margin-top: 1px;text-align: left;}
.offer_heading_highlight span{background-color: #FFFF30;display: inline;padding: 2px 4px;box-decoration-break: clone;-webkit-box-decoration-break: clone;}
.offer_heading_highlight_black{font-family: HouseSlant;font-size: 16px;text-transform: uppercase;letter-spacing: 0.2px; margin-top: 1px;text-align: left;}
.offer_heading_highlight_black span{background-color: #000;color:#fff;display: inline;padding: 2px 4px;box-decoration-break: clone;-webkit-box-decoration-break: clone;}
.offer_heading{font-size: 30px;font-family: Soleil;font-weight: 900;color:#000;text-shadow: 0.8px 0 #000;letter-spacing:0.6px; margin-top: 7px;margin-bottom: 0;}
.offer_heading_p{margin-top:16px;margin-bottom: 0;min-height: 69px;}
.offer_heading_a{display: inline-block;}
@media screen and (max-width: 768px) {.offer_heading_p{min-height: auto;}}

/*offer page content right panel*/
.offer_card_flex{display: flex;width: 100%;flex-wrap: wrap;justify-content: space-between;align-items:stretch;}
.offer_card_flex>div{width: 48.5%;border-radius: 5px;overflow: hidden;transition: 0.3s ;}

.offer_plan:before{
  z-index: 2;
  background: #fff;
  content: "";
  height: 500px;
  left: -330px;
  opacity: .2;
  position: absolute;
  top: -100px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 200px;}
  .offer_plan{-webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;}
  /*.offer_plan:hover{opacity:  0.6 ;
  -webkit-transform: rotate(-2deg);
  -ms-transform: rotate(-2deg);
  -o-transform: rotate(-2deg);
  transform: rotate(-2deg);}
.offer_plan:hover::before {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}*/

@media screen and (max-width: 480px) {
  .offer_card_flex{flex-direction:column;}
  .offer_card_flex>div{width: 100%;margin-bottom: 24px}
  .offer_card_flex>div:last-child{margin-bottom: 0}

}


/*offer page card*/
.offer_card_bg{width: 100%;height: 150px;background-repeat: no-repeat;background-size: cover;background-position: center;}
.offer_card_bg1{background-image: url(../images/offer_card/card_01.png);}
.offer_card_bg2{background-image: url(../images/offer_card/card_02.png);}
.offer_card_bg3{background-image: url(../images/offer_card/card_03.png);}
.offer_card_bg4{background-image: url(../images/offer_card/card_04.png);}
.offer_card_bg5{background-image: url(../images/offer_card/card_05.png);}
.offer_card_bg6{background-image: url(../images/offer_card/card_06.png);}
.offer_card_bg7{background-image: url(../images/offer_card/card_07.png);}
.offer_card_bg8{background-image: url(../images/offer_card/card_08.png);}
.offer_card_bg9{background-image: url(../images/offer_card/card_09.png);}
.offer_card_bg10{background-image: url(../images/offer_card/card_10.png);}
.offer_card_bg11{background-image: url(../images/offer_card/card_11.png);}
.offer_card_bg12{background-image: url(../images/offer_card/card_12.png);}
.offer_card_bg13{background-image: url(../images/offer_card/card_13.png);}
.offer_card_bg14{background-image: url(../images/offer_card/card_14.png);}
.offer_card_bg15{background-image: url(../images/offer_card/card_15.png);}
.offer_card_bg16{background-image: url(../images/offer_card/card_16.png);}

.db_right .cart_total_box .cart_item:not( :first-child ){border:0;}
.offer_card_heading{color: #fff;font-size: 24px;line-height: 1.4; 
  padding: 2px 0;font-weight: bold}
.offer_card_heading span{background-color: #000;display: inline;padding: 2px 4px;box-decoration-break: clone;-webkit-box-decoration-break: clone;}
.offer_card_shadow_z-1{content: ""; position: absolute; z-index: -1; box-shadow: 0 0 20px rgba(0,0,0,0.1); top: 50%; bottom: 0; left: 10px; right: 10px;}

.four_digits{width: calc(100% - 144px)}
@media screen and (max-width: 480px) {.four_digits{width: calc(100% - 124px)}}


/*offer page card*/
.offer_remarks{font-family: Soleil;font-size: 12px;margin:0;color:#333;}
.offer_remarks_p{margin:0;}


/*merchandise plan*/
.merchandise_plan .plan-des{width: 64%}
.merchandise_plan .plan-price, .merchandise_plan .price_0508{width: 36%}

/*offer page logged in*/
.logged-menu{/*box-shadow: 0 5px 5px -2px rgba(0,0,0,0.14);*/
  /*background-color: #fff;*/
  position: absolute;
  z-index: 1201 !important;
  border: 0;color:#333;
  width: 255px;
  line-height: 17px;
  display:none;
  left: -112px;top: 26px;
  -moz-transition: all 0.218s;
  -o-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
  border-top: 23px solid rgba(0, 0, 0, 0.0);}
.logged:hover .logged-menu {
  display: block;
}

.logged-menu-arrow {position: absolute;}
.logged-menu-arrow:before, .logged-menu-arrow:after {
  content: "";
  display: block;
  height: 0;
  position: absolute;
  width: 0;
}
.logged-menu-arrow:before {border: 9px solid;border-color: transparent #E2E7E9;top: -9px;left: -1px;}
.logged-menu-arrow:after {border: 8px solid;border-color: transparent #FFFF30;top: -8px;}

.logged-menu-arrowright {left: 50%;top: -8px;margin-left: 0!important;transform: rotate(-270deg);}
.logged-menu-arrowright:before, .logged-menu-arrowright:after {border-left-width: 0;}

@media screen and (max-width: 768px) {
  .logged-menu{right: -120px; left: inherit;}
  .logged-menu-arrowright{left: inherit;right: 134px;}
}

.logged-menu-header{background-color: #FFFF30;display: flex;font-weight: 900;align-items:center;justify-content:space-between;padding:8px 16px;}
.logged-menu-item{display: flex;align-items:center;margin: 0 16px; padding: 8px 0;border-bottom:1px solid #F0F0F0;text-transform: uppercase;font-weight: normal;}
.logged-menu-item:nth-last-child(1){border-bottom:0;}
.logged-menu-item>div:first-child{width:23px;margin-right:16px;}




/*offer details main flex*/
.detail_content{display: flex!important;min-height: calc(100vh - 383px);}
.detail_content_wo_banner{min-height: calc(100vh - 160px);}
.detail_left, .detail_right{width: 50%}
.detail_left{padding-left: 16px;padding-right:40px;padding-top:32px;background-color:#FDF401;position: relative;display: flex;justify-content:flex-end;}
.detail_left_content{z-index: 1;position: relative;}
.detail_left_logo:after {content: ''; background: url(../images/offer-bg.svg) no-repeat left bottom; width: 120%; height: 80%; position: absolute; z-index: 0; bottom: 0; left: 0;}
.detail_right{padding-left: 40px;padding-right: 16px;padding-top:32px;display: flex;justify-content:flex-start;z-index: 1}

.detail_panel{width: 544px}
.detail_left_content{max-width: 544px;width: 100%}

@media screen and (max-width: 1024px) {
	.detail_content{flex-direction:column;}
	.detail_left, .detail_right{width: 100%;padding-left: 16px;padding-right: 16px}
	.detail_left{padding-bottom: 40px}
	.detail_left_logo:after{width:100%;left:16px;background-size: 57%}
  .detail_panel{width: 100%}
}

/*offer details heading*/
.detail_heading{margin-top: 0}
.detail_heading_flex{display: flex;justify-content: space-between;}
.detail_icon{/*position: absolute;*/width: 80px;right: 40px}
.detail_icon img{width: 100%;-webkit-filter: drop-shadow(0 2px 4px rgba(0,0,0,0.20));filter: drop-shadow(0 2px 4px rgba(0,0,0,0.20));}
.detail_heading_startfrom{font-weight: bold;top: 16px; position: relative;text-align: right;}
.detail_heading_price{font-family: Soleil;font-size: 48px;color: #000;text-shadow: 1.3px 0 #000; letter-spacing: 0.2px; margin: 0;line-height: 1em}
.detail_heading_price:before{content: '$'; font-size: 0.8em; position: relative; top: -3px;}
.detail_heading_a{padding-top:32px;margin-top:32px;border-top: 1px solid #979797}
.detail_heading_a img{padding-right: 16px}
@media screen and (max-width: 480px) {
  .detail_heading_price{font-size: 32px;text-align: right;}
  .detail_icon{width: 66px}
}
/*offer details content*/
.detail_main_p{margin-top: 24px!important;}
.detail_main_hr{margin:16px 0px;}



/*offer details vas*/
.detail_vas_box{margin-top: 48px}
.detail_vas_item{display: flex;justify-content:space-between;margin-top: 24px;cursor: pointer;background-color: #F5F5F5;border-radius: 5px;color: #999;border: 2px solid #F5F5F5;}
.detail_vas_item_icon{width: 114px;background-color: #999;padding: 16px;    display: flex;align-items: center;justify-content: space-around;border-radius: 5px 0 0 5px;}
.detail_vas_item_icon_circle{width: 70px;height: 70px;border-radius: 50%;background-color: #fff;padding: 15px;display: flex;}
.detail_vas_item_icon_circle img{width: 90%;margin: 0 auto}
.detail_vas_content{width: calc(100% - 114px);text-align: left; padding: 16px;display: flex;justify-content: space-between;}
.cart_item.detail_vas_content{padding-top: 20px;}
.detail_vas_txt{padding-right: 16px;width:calc(100% - 96px);}
.detail_vas_item .plan_extra_title{color: #999;text-shadow: 0.8px 0 #999;}
.detail_vas_item .detail_vas_price span:after{color: #999}
.detail_vas_price{width: 96px;text-align: right;display: flex;align-items: center;justify-content:flex-end}
.detail_vas_price span, .cart_edit_price span{font-size: 32px;font-weight: 900;text-shadow: 0.4px 0 #999; letter-spacing: 0.4px;top: -4px; position: relative;}
.detail_vas_price span:before, .cart_edit_price span:before {content: '$'; font-size: 0.8em; position: relative; top: -3px;}
.detail_vas_price span:after{content: '/month'; font-weight: 100;display: block; font-size: 0.5em; line-height: 0.5em;text-shadow:none;letter-spacing:normal;color:#333;}
.detail_vas_item_active{border:2px solid #00C9FF;background-color: #fff;color: #000;}
.detail_vas_item_active .detail_vas_price span{text-shadow: 0.4px 0 #000;}
.detail_vas_item_active .detail_vas_item_icon{padding: 11px;padding-right: 16px;width: 113px;border-radius: 4px 0 0 4px;background-color: #000;}
.detail_vas_item_active .detail_vas_price span:after{color: #333}
.detail_vas_item_active .plan_extra_title{color: #000;text-shadow: 0.8px 0 #000;}
.detail_vas_item_active .detail_vas_item_icon_circle{border:2px solid #00C9FF;}
.offer_detail_show_extra>div{margin-top: 24px}

@media screen and (max-width: 768px) {
	.detail_vas_item{display: block;position: relative;}
	.detail_vas_item_icon{background-color: transparent;width: 70px; padding: 0;}
	.detail_vas_content{width: auto;padding-top: 0;}
	.detail_vas_content .plan_extra_title{position: absolute;position: absolute;top: 21px;left: 70px;line-height: 1;font-size: 20px;padding-right: 16px;}
	.detail_vas_content .plan_extra_title_02{top: 15px;}
  .detail_vas_item_active .detail_vas_item_icon{padding: 0;padding-right: 0;width: 70px;background: transparent;}
  .detail_vas_item_icon_circle{background-color: transparent;padding: 8px; width: 54px; height: 54px;padding-top: 16px;}
	.detail_vas_item_active .detail_vas_item_icon_circle{border:0;}
}



/*offer details Auto renew*/
.detail_auto{text-align: left;}
.auto-renew label{font-weight: bold;text-shadow: 0.4px 0 #333;letter-spacing:0.2px;}
.detail_auto .auto-renew{text-shadow: 0.8px 0 #000; letter-spacing: 0.6px;font-size: 20px;display: flex; align-items: center;margin-bottom: 0;margin-top: 0;}
.detail_auto .altCbx{margin-right: 8px}
.detail_auto p{margin-left: 32px; margin-top: 0;margin-bottom: 0;}
.detail_btn{margin-top: 72px;margin-bottom: 72px}
.checkbox_mrg_l_0 .altCbx{margin-left: 0}
@media screen and (max-width: 480px) {
  .bulk_renew label{float: right; width: 164px; margin-left: 4px;}
}

/*travel pass region menu*/
.travel_region_menu{}
.travel_region{width: 100%;border-bottom: 1px solid #000;margin-bottom: 16px;}
.travel_region .nav_button{border: none; display: inline-block; padding: 8px 16px; vertical-align: middle; text-decoration: none; background-color: inherit; text-align: center; cursor: pointer; white-space: nowrap;  color: #999; font-weight: bold; border-bottom: 5px solid rgba(0, 0, 0, 0.0); text-transform: uppercase;margin: 0 4px;}
.travel_region .nav_button:first-child {margin-left: 0;}
.travel_region .nav_button:last-child {margin-right: 0;}
.travel_region .nav_button.selected{border-bottom: 5px solid #000; color: #333;}
.travel_region .nav_button:hover{color:#00C9FF;border-color: #00C9FF}
.travel_search{width: 50%;text-align: left;margin-bottom: 16px;}
.travel_search i{padding-bottom: 13px;padding-left: 8px;width:64px;transition: 0.15s all ease;}
.travel_search_focus{display: none;}
.travel_search i:focus {width:90%;outline: none;position: relative;padding-right:8px;}
.travel_search i:focus .travel_search_focus{padding-bottom: 13px;width:100%;display: block;position: absolute;top:-16px;color: #B4B4B4;left: 32px;border-bottom: 1px solid #000;}
.travel_region_menu{position: relative;}
.new_search{position: absolute;right: 8px;top:14px;}
.travel_region_search{width: 100%;border-bottom: 1px solid #000;margin-bottom: 16px;text-align: left;position: relative;padding: 8px 8px 13px}
.travel_region_search>*{display: inline-block;}
.travel_region_search>p{color: #B4B4B4;}
.travel_region_search>img{position: absolute;right: 8px;top:14px;width: 12px}
@media screen and (max-width: 768px) {
  .travel_region_menu{flex-direction:column-reverse;overflow-x: scroll;  white-space: nowrap;}
  .travel_region_menu>div{width: calc(100% - 32px);overflow-y: hidden;}
  .travel_search i, .travel_search i:focus {width: 100%;position: relative;text-align: left;padding-left: 8px;overflow: hidden;
    padding-bottom: 14px;}
  .travel_search_focus{padding-bottom: 13px;width:100%;display: block!important;position: absolute;top:-16px;color: #B4B4B4;left:32px;border-bottom: 1px solid #000;}
}

/*hide and show more*/
.hide_detail_title{margin-bottom: -30px}
.c-slide-toggle, .c-slide-toggle>span, .c-slide-toggle>span span{display: block}
.c-slide-toggle__nav--hide, .c-slide-toggle__nav--show:target {display: none;}
.c-slide-toggle__nav--show:target ~ .c-slide-toggle__nav--hide {display: block;}
.c-slide-toggle__nav--show:target ~ .c-slide-toggle__details-wrap .c-slide-toggle__details {margin-bottom: -100%;}
.c-slide-toggle__details-wrap {min-height: 0px;overflow: hidden;}
.c-slide-toggle__details {margin-bottom: 0%;transition: all 350ms cubic-bezier(0, 0, 0.2, 1);}
.c-slide-toggle--nav-bottom {position: relative;display: inline-block;margin-top: 30px}
.asdghqawsed{position: absolute;top: -50px;}
.c-slide-toggle--nav-bottom [class*="c-slide-toggle__nav"] {position: relative;left: 19px;top: 16px;text-align: left}
.c-slide-toggle--disabled [class*="c-slide-toggle__nav"] {display: none;}
.c-slide-toggle--disabled .c-slide-toggle__details {margin-bottom: 0;}
.c-slide-toggle__nav--hide, .c-slide-toggle__nav--show {text-align: center;}
.c-slide-toggle__nav--hide i, .c-slide-toggle__nav--show i{padding-left: 8px}
@media screen and (max-width: 768px) {
  .c-slide-toggle__nav--show:target ~ .c-slide-toggle__details-wrap .c-slide-toggle__details {margin-bottom: -200%;}
}
.hided_detail{margin-bottom: 0}
.offer_detail_show_extra_02{position: relative;left: 19px;top: 16px;text-align: left}

/*Cart title*/
.cart_heading_p{font-size: 18px;font-weight: bold;margin-top: 0;}
.cart_highlight{background: -moz-linear-gradient(top, rgba(0,201,255,0) 0%, rgba(0,201,255,0) 50%, rgba(0,201,255,1) 51%, rgba(0,201,255,1) 75%, rgba(0,201,255,0) 76%, rgba(0,201,255,0) 100%); /* FF3.6-15 */background: -webkit-linear-gradient(top, rgba(0,201,255,0) 0%,rgba(0,201,255,0) 50%,rgba(0,201,255,1) 51%,rgba(0,201,255,1) 75%,rgba(0,201,255,0) 76%,rgba(0,201,255,0) 100%); /* Chrome10-25,Safari5.1-6 */background: linear-gradient(to bottom, rgba(0,201,255,0) 0%,rgba(0,201,255,0) 50%,rgba(0,201,255,1) 51%,rgba(0,201,255,1) 75%,rgba(0,201,255,0) 76%,rgba(0,201,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0000c9ff', endColorstr='#0000c9ff',GradientType=0 ); /* IE6-9 */}

.w3-hide-small .cart_btn, .port_btn .cart_btn{margin-top: 32px}

/*Cart card*/
.cart_edit_icon{margin-left: 16px}
.cart_p{margin-right: 8px}
.breakdown_discription{margin:0!important;}
.cart_icon_none{width: 55px}
.breakdown_box{position: relative;margin: 0 16px;padding-top:15px;padding-bottom: 15px;border-top: 1px solid #000;}
.cart_item_disable .cart_item_left, .cart_item_disable .cart_item_right{opacity: .2;pointer-events: none;}
.cart_mdse_qty{width: 80px}

/*Checkout progress*/
.list-item {width: 200px;/*margin-left: 8px;*/display: inline-block;padding: 16px;background-color: #00BEF2;}
.scroll{margin-bottom: 16px;background-color: #00BEF2;}
@media screen and (max-width: 480px) {
  .scroll { overflow-x: scroll;overflow-y: hidden;white-space: nowrap;width: auto;margin-right: -16px;margin-left: -16px;background: transparent;}
  .scroll .list-item:first-child{margin-left: 16px}
  .w_16_block{width:16px;height:1px;display: inline-block;}
  .scroll_02{background-color: #00BEF2;margin-left:0;margin-right:0;}
  .scroll.scroll_02 .list-item:first-child{margin-left: 0}
  /*.scroll .list-item:last-child{margin-right: 16px}*/
}

/*Checkout card*/
.checkout-card-header{font-family: Soleil;font-weight: bold;font-size: 24px;letter-spacing: 0;text-shadow: 0.6px 0 #000;color:#000;}
.checkout_card_p{margin: 0!important}
.cart_item .auto-renew{margin: 8px 0px 10px;}
.checkout_cb{margin: 16px 0 8px}
.cart_border_top_deactive{border-top:2px solid rgba(0, 0, 0, .2);}
.checkout_price{font-size: 18px;line-height: 80%;margin-top: 6px;margin-left: 4px}
.checkout_price:before{content: '$';vertical-align: top;}
@media screen and (max-width: 1024px) {
  .checkout-card-header{font-size: 21px;}
  .cart-card-price{font-size:35px;text-shadow:0.7px 0 #000;}
  .cart_item{/*min-height: 100px;*/}
  .cart_item .cart_item_left{min-height: 65px}
  .cart_item_left p{margin-right: 8px;}
}

/*choose number*/
.a_block{display: block;height: 72px; width: 100%; position: absolute;}
.cn_btn_box{flex-wrap:wrap;}
.cn_btn{background: #F5F5F5;border-radius: 5px;width: 32%;padding:16px;margin-bottom: 8px}
.cn_tel_no{font-weight: 900;color: #999999;font-size: 18px;margin-left: 8px}
.cn_refresh_icon{margin-right:8px;}
.cn_btn:hover, .cn_btn_active{background-color: #fff;border: 2px solid #00C9FF;padding:14px;}
.cn_btn_active .cn_tel_no{color: #333}
.cn_chose_icon{margin-right:16px;}
.cart_operator_select .select-input{margin-bottom: 0}
.cn_mnp > div{flex: 2}
.cn_changename_btn>div{width: 305px;}
.cn_changename_btn>div:nth-child(2){margin-left: 16px;background: #fff;border:2px solid #333;color: #333;}

.warning_date{font-size: 24px;text-shadow: 0.4px 0 #333;letter-spacing:0.2px;font-weight: bold;}
.warning_msg{background: #F6F6F6;padding: 16px}

/*Delivery*/
.delivery_option_day{margin-left: 24px}
.d_express_form, .new_address, .display_none, .d_locker_form, .d_postage_form{ display:none;}
.delivery_cb_txt{margin-left: 4px}
.delivery_address_btn, .interest_btn{background: #F5F5F5;border-radius: 5px;padding:16px;margin-bottom: 16px;color: #999;margin-top:8px;}
.delivery_address_btn .checkout-card-header{color: #999;text-shadow: 0.6px 0 #999;}
.delivery_address_btn .cross, .delivery_address_btn .cart-card-price, .interest_btn{color: #999;}
.delivery_address_btn .cart-card-price{text-shadow: 1.3px 0 #999;}
.delivery_address_btn .subtext{color:#999;}
.delivery_address_btn .txt-link, .delivery_address_btn .extra_b_16, .delivery_address_btn b{text-shadow: 0.4px 0 #999;}
.delivery_address_btn:hover, .delivery_address_btn_active, .interest_btn:hover{background-color: #fff;border: 2px solid #00C9FF;padding:14px;}
.delivery_address_btn_active, .delivery_address_btn_active .subtext, .delivery_address_btn_active .cross{color: #333}
.delivery_address_btn_active .txt-link, .delivery_address_btn_active .extra_b_16, .delivery_address_btn_active b{text-shadow: 0.4px 0 #333;}
.delivery_address_btn .txt-link:hover, .delivery_address_btn_active .txt-link:hover{text-shadow: 0.4px 0 #00C9FF;}
.delivery_address_btn_active .cart-card-price{color: #000;text-shadow: 1.3px 0 #000;}
.delivery_address_btn_active .checkout-card-header{color: #000;text-shadow: 0.6px 0 #000;}
.payment_extra:hover{background: #F5F5F5;padding: 16px;border: 0}
.payment_extra_selected, .payment_extra_selected:hover{background: #fff;border: 2px solid #999;padding:14px;}
.payment_existing{margin-bottom: 4px;background: #eee; padding: 4px;}
.delivery_address_btn_active .subtext.active_color_cyan{color: #00C9FF}

.new_address_box{}
.address_detail > div{width: 48.5%;}
.address_district > div, .address_name>div, .chooseno_custom>div{width: 48.5%;}
.delivery_link{color: #fff;font-size: 12px;text-shadow: 0.4px 0 #fff; letter-spacing: 0.5px;text-decoration: underline;}
.delivery_link:hover{color: #00C9FF; text-shadow: 0.4px 0 #00C9FF;}

@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 480px) {
  .address_district > div:first-child{margin-bottom: 16px;}
  .address_district > div{width: 100%;}
  .address_name>div{width: 100%}
}

.address_set_default{padding: 16px}
.delivery_option{margin: 0}
.delivery_card_header{width: calc(100% - 38px)}
.delivery_confirm_txt{position: relative;top: 4px}
.delivery_confirm_address{text-indent:-12px;margin-left: 12px;}

/*Payment*/
.payment_auto{margin-left: 32px}
.payment_auto_p{margin:0;text-indent:-12px;margin-left: 12px;}
.payment_item_content{padding: 0 8px}
.payment_chosen_highlight{background-color: #FFFF30;
    display: inline;
    padding: 2px 4px;}
.payment_method{flex-wrap: wrap;}
.payment_method>div{width: 48.5%;text-transform: uppercase;}
.delivery_address_btn b, .interest_btn b{text-shadow: 0.4px 0 #999;}
.delivery_address_btn_active b{text-shadow: 0.4px 0 #333;}
.credit_info>div:first-child{width: 48.5%}
.credit_info>div:last-child{width: 48.5%}
.credit_date_slash{font-size: 110%}
/*#myModal .credit_info>div:first-child, #test-popup .credit_info>div:first-child{width: 62%;}
#myModal .credit_info>div:last-child, #test-popup .credit_info>div:last-child{width: 35%}*/
@media screen and (max-width: 480px) { 
  .credit_info>div:first-child, .credit_info>div:last-child, .credit_info>div:first-child>div, .credit_info>div:last-child, #myModal .credit_info>div:first-child, #myModal .credit_info>div:last-child, #test-popup .credit_info>div:first-child,#test-popup .credit_info>div:last-child{width: 100%}
  .credit_info>div:last-child{margin-bottom: 16px!important}
}
@media screen and (max-width: 480px){
  .payment_method>div{width: 100%}
    .credit_info>div:first-child{margin-right: 0}
  }
}
.credit_edit_box{background: #F5F5F5; border-radius: 5px; padding: 16px; margin-bottom: 16px; margin-top: 8px;}
.credit_edit>div:first-child{padding-right: 8px;border-right: 2px solid #000;margin-right: 8px;}


.processing_page_content, .processed_page_content{position: relative;}
.processing_page_content>div, .processed_page_content>div{position: absolute; top: 0; bottom: 0; left: 0; right: 0; width: 50%; height: 30%; margin: auto;text-align: left!important;padding:4px;}
.processed_page_content>div{height: 60%;}
.processing_header{font-size: 78px;color: #00C9FF;margin:0!important;/*padding:4px;*/}
.flash_fail_header{color:#FFF;}
.flash_subhead{margin: 0;font-weight:bold;text-shadow: 0.5px 0 #000;letter-spacing:0.2px;font-size: 24px;color: #000;}
.flash_subhead.txt_white{text-shadow: 0.5px 0 #fff;}
.txt_white .txt-link{text-shadow: 0.4px 0 #fff;}
.btnWrapper.flash_fail_btn .widget_button .outline {background-color: #FF0048;}
.processing_p{margin:0;}
@media screen and (max-width: 1024px) {
  .processing_page_content>div, .processed_page_content>div{width: 100%;padding: 56px;}
  .processing_header{font-size: 13vw;margin:0!important;}
}
@media screen and (max-width: 480px) {
  .processed_page_content>div{height: 70%;}
  .processing_page_content>div, .processed_page_content>div{padding: 16px; padding: 16px 40px;}
  .processing_header{font-size: 14vw;}
}
.processed_btn{ min-width: 20rem!important;}


.effective_date{min-height: 38px;}
.effective_date .fa-calendar-alt{top:10px;}
.effective_date input{border: 1px solid #CCCCCC; border-radius: 5px;}
.effective_date.text-input input:focus, .effective_date.text-input .filled{padding: 6px 10px;}
.effective_date.text-input input:focus + label, .effective_date.text-input .filled + label{transform: translateY(-31px) translateX(-7px) scale(0.77);}
.select-input.select_01 label.filled{margin-left: -15px;}
.select-input.select_02 label.filled{margin-left: 0px;}
.select-input.select_03 label.filled{margin-left: -3px;}
.select-input.select_04 label.filled{margin-left: -9px;}
@media screen and (max-width: 1024px) {
  .effective_date{margin-bottom: 16px!important}
}
@media screen and (max-width: 480px) {
  .select-input.select_01 label.filled{margin-left: -12px;}
  .select-input.select_02 label.filled{margin-left: 2px;}
.select-input.select_03 label.filled{margin-left: -2px;}
.select-input.select_04 label.filled{margin-left: -7px;}
}

.port_upload{padding: 16px; min-height: 280px}
.port_upload img{width: 100%}
@media screen and (max-width: 480px) {
  .port_upload{margin-bottom: 16px;padding:32px 16px;}
}

.port_confirm_header{background-color: #000;color: #fff;padding: 12px}
.port_confirm_info{flex-wrap: wrap;}
.port_confirm_info > div{width: 48.5%;margin-bottom: 16px}
.port_sim_info > div{margin-bottom: 16px}
.port_sim_info > div:last-child{margin-bottom: 0}

.address_set_default.dispaly_flex_left .altCbx{top: 8px;min-width: 20px;}

.sign_area {
  position: relative;
  border: 2px dashed #464646;
  /* Individual border image properties */
  border-image-source: url("../images/port/sign_box_border.svg");
  border-image-slice: 2;
  border-image-repeat: round;
  padding: 8px
}
.sign_area .edit-txt{top:8px;right:8px;}
.sign_here img{margin:0 auto 40px;display: block;width: 100%;padding: 0 49px}

@media screen and (max-width: 768px) {
  .sign_here img{padding: 0 8px;margin-bottom:8px;padding-top: 40px;}
}


.port_signed{padding: 16px; background: #E6EAEB;}

.warning_btn>div {width: 48.5%;}


/*Dashboard*/
.db_left{width: 385px;padding-right: 16px}
.db_right{width: calc(100% - 385px);text-align: left;flex: 1; /*margin-right: 30px;*/}
.db_right .detail-banner{background-position: 0% 0%;background-attachment: scroll; height: 230px;}
.db_right .cart_item:not( :first-child ) {border: 0;}
.contact_left{width: calc(100% - 385px);text-align: left;flex: 1;}
.contact_right{ width: 385px;padding-left: 16px}
.invite_left{flex: 5;padding: 16px}
.sms_right{flex:7;}
.invite_right{flex:7;padding: 100px 24px}
.transfer_right{padding: 0}
.transfer_right .cart_item{margin-left: 30px; margin-right: 30px;}
@media screen and (max-width: 768px) {
  .db_left{padding-right: 0}
  .invite_left{padding-top: 24px; padding-bottom: 0}
  .invite_left img{width: 112px}
  .invite_right{padding:0; background: transparent;border-top: 0;}
  .invite_right>div{margin:0; padding:0;}
  .transfer_right .cart_item{margin:0;}
  .invite_right .offer-header{text-align: left}
  .contact_right{padding-left: 0}
}
.header_icon{width: 80px}
@media screen and (max-width: 768px) {
  .invite_heading{flex-wrap: wrap;}
  .invite_heading> *:first-child{order:1;}
  .invite_heading> *:nth-child(2){order:3;width: 100%}
  .invite_heading> *:last-child{order:2;}
  .header_icon>img{height: 82px}
  .faq_cat{overflow-x: scroll;overflow-y: hidden;white-space: nowrap;}
}

.db_menu_item{display: flex;align-items: center;position: relative;padding: 0 16px;padding-top: 20px;padding-bottom: 15px;}
.db_menu_hr{width: calc(100% - 32px); height: 1px; background-color: #D8D8D8; margin: 0 auto; border-bottom: 0;}
.db_menu_item_edit{position: absolute; top: 20px; right: 16px;z-index: 1}
.db_menu_item_a{cursor: pointer;}
.db_menu_icon{margin-right: 16px; width: 46px}
.db_menu_icon img{display: block;margin: 0 auto;}
.db_data_plan_type{text-shadow: 0.4px 0 #333;letter-spacing:0.2px;font-weight: bold;font-size: 18px}
.db_data_box{display: flex; justify-content: space-between; position: relative;}
.db_main_box{width: calc(100% - 295px);margin-right: 16px;}
.db_data_used{font-weight: bold; text-shadow: 0.4px 0 #000; letter-spacing: 0.5px;}

.db_data_left{padding-top: 24px;padding-bottom: 16px; width: 100%}
.db_data_phone_01, .phone_02_content_box{padding-right: 16px;padding-left: 16px}
.db_data_right{padding: 24px 16px 16px; padding-right: 16px;padding-left: 16px;width: 295px;background: #F6F6F6;}
.db_data_usage{margin-top: 16px}
.db_data_icon{margin-right: 16px; width: 24px}
.db_data_icon img{display: block;margin: 0 auto;}
.db_inbox_circle{width: 26px;height: 26px;background-color: #FDF401;border-radius: 50%}
.db_inbox_circle .db_inbox_count{text-align: center; color: #333; font-size: 16.5px; width: 100%; margin-top: 0px; display: inline-table; vertical-align: 2px;text-shadow: 0.4px 0 #333;letter-spacing:0.2px;font-weight: bold}
.db_inbox_date{color: #707070;}
.db_inbox_item{padding-top: 8px;padding-bottom:8px;border-bottom: 1px solid #D8D8D8;margin-bottom: 0;}
.db_inbox_item:last-child{border-bottom: 0;padding-bottom: 0;margin-bottom: 0}
.db_inbox_item .payment_chosen_highlight{text-transform: uppercase;}
.db_inbox_item .bg-cyan{background-color: #00BEF2;}
.db_instruction{width: 279px;}
.db_instruction_item{margin-bottom: 16px;}
.db_instruction_item{background: #FFFF30;padding:16px;display: flex;align-items: center;border-left: 4px solid #000;border-radius: 0 5px 5px 0}
.db_item_right{text-align: right;width: 80px}
.db_date_select label{color: #333;}
.db_transfer_box{text-align: center}

.db_instruction_item_inactive{background: #F5F5F5;border-color:#C4C4C4;pointer-events: none;}
.db_transfer_box_inactive{pointer-events: none;}
.db_instruction_item_inactive>div, .db_transfer_box_inactive>div{opacity: .2;}
.db_autopay_max{border-bottom: 1px solid #D8D8D8; padding-bottom: 8px;}

@media screen and (max-width: 1024px) {
  .db_data_box{flex-direction: column;}
  .db_data_box>div{width: 100%}
  .db_left{padding-right: 0}
  .db_main_box{width: calc(100% - 257px);}
  .db_instruction{width: 242px}
}
@media screen and (max-width: 480px) {
  .db_main_box{width: 100%;}
}



.bg-cyan .txt-link:hover{color: #fff;}
.float-panel{position: fixed; top: 70px;}
.nav_button{margin: 0 4px; width: auto; min-width: auto!important;}
.nav_button:first-child {margin-left: 0;}
.nav_button:last-child {margin-right: 0;}
.inbox_btn{background: rgba(255,255,255,0.70); border-radius: 5px;padding:16px;width: 209px;text-transform: uppercase;}
.inbox_btn{display: flex;align-items: center;background: rgba(255,255,255,0.70); border-radius: 5px;padding:16px;width: 209px;text-transform: uppercase;}
.inbox_btn_txt{margin-right: 8px}
.inbox_cat{padding:8px 0 0}
.inbox_back_btn{margin:24px 16px 112px;}
.inbox_menu_btn .remove-txt{right:16px;}
.inbox_empty{min-height: 500px}
.inbox_empty>div{padding:20px 16px 15px;text-align: center;max-width:230px;}
.inbox_few_items{min-height: 500px}
.inbox_coupon_header{border-bottom: 1px solid #000}
.inbox_coupon_code{padding:16px;background: #F5F5F5;display: inline-block;}
.inbox_unread_circle{background-color: #00BEF2; border-radius: 48px; width: 10px; height: 10px; display: inline-block;}
.bg-cyan .inbox_unread_circle{background-color: #fff;}

@media screen and (max-width: 768px) {
  .inbox_btn{display: none!important}
  .inbox_btn_txt{margin-right: 0}
  .inbox_content_box .cart_border_top{border-top:0;}
}


.phone_number_detail{background: #000;color: #fff;}
.phone_number_detail .port_confirm_info > div{margin-top: 16px;/*margin-right: 16px;*/}
.phone_number_detail .port_confirm_info > div:last-child {margin-right: 0;}
.track_header{padding:0 0px;}
.track_content_box{flex-wrap:wrap;margin-top: 8px}
.track_content_box>div{width: 48.5%;margin-bottom: 16px}
.track_content_box>div:last-child{width: 100%}
.track_content{padding: 2px 0px;}
.phone_number_detail .font-grey{color: #fff;}
.delivery_status_box{position: relative;min-height: 112px;}
.delivery_status_bg{background-image: url(../images/dashboard/line.svg); background-repeat: repeat-y; min-height: 88px; width: 10px; top: 24px; background-position-x: 5px; position: absolute;}
.delivery_status_date{color: #666;}
.order_status_box{min-height: 136px;}
.order_status_bg{min-height: 112px;background-image: url(../images/dashboard/line.svg); background-repeat: repeat-y; background-position-x: 5px; margin-top: 20px; margin-bottom: 8px; width: 14px; position: relative;}
.order_status_dot{position: absolute; top: -21px;}
.db_heading{display: flex;align-items: center;justify-content: space-between;}

@media screen and (max-width: 768px) {
  .bg-cyan_delete_sp{background: #fff!important}
}


.update_card_flex{display: flex; width: 100%; flex-wrap: wrap; justify-content: flex-start; align-items: stretch;}
.update_card_flex>div{width: 48.5%; border-radius: 5px; overflow: hidden;margin-right: 3%}
.update_card_flex>div:nth-child(2n){margin-right: 0}
.secondary-plan{margin-bottom: 24px!important}
.minheight{/*min-height: 260px;*/}
.minheight_220{min-height: 220px;}
@media screen and (max-width: 480px) {
  .update_card_flex{flex-direction:column;}
  .update_card_flex>div{width: 100%}
  .secondary-plan:last-child, .secondary-plan:nth-last-child(2){margin-bottom: 24px }
  .minheight_174_sp{min-height: 174px;}
  .minheight_131_sp{min-height: 131px;}
}

.warning_date{font-size: 24px;text-shadow: 0.4px 0 #333;letter-spacing:0.2px;font-weight: bold;}
.warning_msg{background: #F6F6F6;padding: 16px}
.warning_btn>div{width: 48.5%;max-width: initial;}
.cart_btn.cancel{background: transparent;color: #656565;}
@media screen and (max-width: 426px) {
  .warning_btn{display: block!important}
  .warning_btn>div{width: 100%}
  .warning_btn>div:first-child{margin-bottom: 8px}
}

.transfer_data_box>img{width: 100%}
.transfer_data_price{color: #AAA;text-shadow: 1.3px 0 #AAA;}
.bills_item_left{width: calc(100% - 120px)}
.bills_item_right{text-align: right; width: 120px;}
.bills_plan_title{background-color: #000;padding: 8px 16px}

.order_history_label{color: #afb2b3;font-weight: bold; margin-bottom: 4px;}
.order_history_txt_green{color: #33FF89;font-weight: bold}
.order_history_txt_red{color: #FF5858;font-weight: bold}
.order_history_delivery{margin-left: 16px}
.order_history_price{text-align: right;margin-left: 8px;min-width: 80px}
.order_history_details{padding-bottom: 16px}
.transaction_data{font-family: Soleil; font-size: 36px; color: #333; text-shadow: 1.3px 0 #333; letter-spacing: 0.2px; line-height: 0.8em;}
.rewards_point_box{border:4px solid #000;}
.rewards_point_box_content{padding: 8px 16px;}
.rewards_point_box_content.bg-yellow{border-top:4px solid #000; }
.rewards_jfk-bubble{bottom: -82px;left: 26px;}
.rewards_jfk-bubble-arrow{top: 18px;}
@media screen and (max-width: 768px) {
  .rewards_jfk-bubble{right: -10px;top: 25px; left: inherit;height: 100px;}
  .rewards_jfk-bubble-arrow{left: inherit; right: 17px; top: -8px; bottom: 106px; transform: rotate(90deg); }
}

.rewards_tab_menu{border-bottom: 1px solid #000;display: flex;justify-content: flex-start;}
.rewards_tab_btn{text-transform: uppercase;padding: 8px 16px;border-bottom: 5px solid transparent;font-weight: bold;text-shadow: 0.8px 0 #999999;letter-spacing:0.4px;color: #999999;margin-right: 4px}
.rewards_tab_btn:hover, .rewards_tab_btn_active{border-bottom: 5px solid #000;padding: 8px 16px; text-transform: uppercase;text-shadow: 0.8px 0 #333;color: #333}
.rewards_tab_content_02{text-align: left}
.reward_green_line{background: #00E560;height: 4px;border-radius: 2px;width: 100%}
.rewards_detail_header{font-size: 24px}
.rewards_achievement{/*padding: 0 16px;*/text-align: left}
.rewards_achievement>div{width: 48.5%}
.rewards_achievement_icon{height: 53px; width: 61px;}
.rewards_achievement_icon img{width: 100%}
.rewards_meter_box{background: #F0F4F5;padding: 16px}
.rewards_meter_box img{width: 100%}
.rewards_achievement_d{min-height: 80px}
.rewards_meter_img_box{min-height: 119px;}
.rewards_arrow{position: absolute; top: 30%; right: -18px;width: 35px!important;padding:10px;opacity: 0;-webkit-transition: opacity 0.2s ease-in-out; -moz-transition: opacity 0.2s ease-in-out; -ms-transition: opacity 0.2s ease-in-out; -o-transition: opacity 0.2s ease-in-out; transition: opacity 0.2s ease-in-out;}
.rewards_arrow:hover{opacity: 1}
.rewards_arrow_left{transform: rotateZ(180deg);right: auto;left:-18px;}
.rewards_item_locked{opacity: .7;pointer-events: none;}
.rewards_item_locked_icon:before{content: url('../images/rewards/locked.svg');position: absolute;top: 0;left: 0;opacity:1;z-index: 2}

.rewards_menu_icon{margin-right: 24px; width: 52px}
.rewards_menu_icon img{display: block;margin: 0 auto;}
.rewards_remarks{padding:20px 16px;}
.reward_item_content{padding:0 16px;position: relative;}

@media screen and (max-width: 768px) {
  .rewards_achievement>div{width: 100%}
  .rewards_meter_img_box{overflow-x: scroll; overflow-y: hidden; white-space: nowrap; width: auto;min-height:none}
  .rewards_meter_box img{width: 400px}
  .rewards_achievement_d{min-height: none}  .reward_item_content{overflow-x: scroll; overflow-y: hidden; white-space: nowrap; width: auto; display: block;padding: 0}
  .reward_item_content>div.primary-plan{display: inline-block;width: 60%;white-space: normal;}

}
@media screen and (max-width: 480px) { 
  .reward_item_content>div.primary-plan{width: 290px}
}
.faq_box{padding: 24px;border-radius: 5px;border:2px solid #F0F4F5;background: #FFFFFF;box-shadow: 0 5px 5px -2px rgba(0,0,0,0.14);position: relative;    margin-left: 24px;padding-left: 40px}
.faq_box:before{content:url(../images/faq_active.svg);display: block;position: absolute; left: -28px;top: 10px;}
.faq_box_icon_white:before{content:url(../images/faq_icon.svg);}
.faq_q{font-size: 14px;width: calc(100% - 27px);}
.faq_a{font-size: 12px;color: #646666;}
.faq_arrow{position: absolute;right: 24px;}
.faq_livechat{position: fixed;bottom: 8px; right: 16px;z-index: 2;}
.faq_livechat_box{position: relative;}
.faq_cat{border-bottom: 1px solid #000;text-transform: uppercase;color: #999;text-shadow: 0.6px 0 #999; letter-spacing: 0.6px;font-weight: 800}
.faq_cat_item{padding:8px 16px;border-bottom:4px solid;border-color: transparent;margin: 0 4px;cursor: pointer;}
.faq_cat_item:first-child{margin-left: 0}
.faq_cat_item:last-child{margin-right: 0}
.inbox_cat_item{width: 50%;text-align: center;}
.faq_cat_active, .faq_cat_item:hover{color: #333;border-color: #333;text-shadow: 0.6px 0 #333;
    letter-spacing: 0.6px;}
.hover_content{display: block;}
.faq_livechat_detail{position: absolute;bottom: 48px; right: 0;display: none;padding-bottom: 40px;}
.faq_livechat_hover:hover + .faq_livechat_detail, .faq_livechat_detail:hover{display: block}

.friend_code_heading{color: #afb2b3;font-weight: bold;}
.friend_code_box{width:100%;background: #F5F5F5;padding: 16px;text-align: center;font-size: 24px;text-shadow: 0.4px 0 #333;letter-spacing:0.2px;font-weight: bold;text-transform: uppercase;}
.myaccount_nonedit{/*margin-left: 8px*/}

.header_icon{width: 80px}
@media screen and (max-width: 768px) {
  .invite_heading{flex-wrap: wrap;}
  .invite_heading> *:first-child{order:1;}
  .invite_heading> *:nth-child(2){order:3;width: 100%}
  .invite_heading> *:last-child{order:2;}
  .header_icon>img{height: 82px}
  .faq_cat{overflow-x: scroll;overflow-y: hidden;white-space: nowrap;}
}


.promotion_mrg_b{margin-bottom: 80px}




progress {
  display: block; /* default: inline-block */
  width: 100%;
  margin: 8px auto;
  border: 0 none;
  background: #F3F3F4;
  border-radius: 1.5px;
}
progress::-moz-progress-bar {
  border-radius: 1.5px;
  background: #00C9FF;
  
}

progress.progress_magenta::-moz-progress-bar {
  background: #F200F2;
  
}
progress.progress_green::-moz-progress-bar {
  background: #04DC60;
  
}
/* webkit */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  progress {
    height: 3px;
  }
}
progress::-webkit-progress-bar {
    background: transparent;
}  
progress::-webkit-progress-value {  
  border-radius: 1.5px;
  background: #00C9FF;
} 
progress.progress_magenta::-webkit-progress-value {
  background: #F200F2;
} 
progress.progress_green::-webkit-progress-value {
  background: #04DC60;
} 


.textarea{position: relative;}
.textarea_count{position: absolute;bottom: 16px;right: 16px;color: #afb2b3;}


/*popup*/
.sim_icon_shadow{-webkit-filter: drop-shadow(0px 4px 4px rgba(175,178,179,.5));filter: drop-shadow(0px 4px 4px rgba(175,178,179,.5));}

/**/
.activate_fail_title{font-size: 24px;letter-spacing: 0;text-shadow: 0.6px 0 #000;color:#000}
.activate_fail_p{max-width: 580px}
.activate_fail_btn{margin-top: 16px}
@media screen and (max-width: 768px) {
.activate_fail_btn>div{width: 48.5%}
.activate_fail_btn>div img{width: 100%}
}



.bg_light_grey{background-color: #FAFAFA!important;}
.txt_uppercase{text-transform: uppercase;}
.txt_right{text-align: right;}
.txt_left{text-align: left;}
.txt_center{text-align: center;}
.width_100{width: 100%}
.font-grey{color: #999}
.font-grey_02{color: #afb2b3}
.font-eee{color: #eee}
.font-white{color: #fff}
.font-333{color: #333}
.bg-white{background: #fff;}
.extra_b_16{text-shadow: 0.4px 0 #333;letter-spacing:0.2px;font-weight: bold;}
.extra_b_16_w{text-shadow: 0.4px 0 #fff;letter-spacing:0.2px;color: #fff}
.cross, .line-cross{text-decoration: line-through;}
.mrg_0{margin: 0px!important}
.mrg_r_8{margin-right: 8px}
.mrg_r_16{margin-right: 16px}
.mrg_b_0{margin-bottom: 0!important}
.mrg_b_8{margin-bottom: 8px}
.mrg_b_16{margin-bottom: 16px}
.mrg_b_24{margin-bottom: 24px}
.mrg_t_0{margin-top: 0}
.mrg_t_4{margin-top: 4px}
.mrg_t_16{margin-top: 16px}
.mrg_l_0{margin-left: 0}
.mrg_l_8{margin-left: 8px}
.mrg_l_16{margin-left: 16px}
.mrg_l_28{margin-left: 28px}
.pdg_t_0{padding-top: 0}
.pdg_t_8{padding-top: 8px}
.pdg_b_0{padding-bottom: 0}
.pdg_b_8{padding-bottom: 8px}
.pdg_r_8{padding-right: 8px}
.txt-link_disable, .txt-link_disable:hover{color: #AAAAAA;text-shadow: 0.4px 0 #AAAAAA;}
.txt-link_nodeco:hover{color: #00BEF2}
.fa-bars:before{font-size: 24px;color: yellow;}
.txt_white{color: white}
.txt_grey{color:#999;}
.extra_b_16.txt_grey{text-shadow: 0.4px 0 #999;}
.txt_cyan{color:#00BEF2;}
.extra_b_16.txt_cyan{text-shadow: 0.4px 0 #00BEF2;}
.d_block{display: block}
.txt_red{color:#FF0048;}
.extra_b_16.txt_red{text-shadow: 0.4px 0 #FF0048;}
.d_inline-block{display: inline-block}
.font-10{font-size: 10px}
.txt_20, .font-20{font-size: 20px}
.font_24{font-size: 24px}
.opacity_1{opacity: .01;}
.opacity_20{opacity: .2;}
.height_180{min-height: 180px}
.width-100{width: 100%;max-width: none}
.display_none{display:none;}
.bg_t{background: transparent;}
.header_icon{width: 80px}
.lh_1em{line-height: 1em}
.lh_normal{line-height: normal;}
.position_r{position: relative;}
.fa-bars:before{font-size: 24px;color: yellow;}
.img_center{margin:0 auto;}
.inbox_display_none{display:none!important;}
.hr-grey_03{width: 100%; height: 1px; background-color: #D8D8D8; border-bottom: 0;margin: 8px 0;}
@media (max-width: 1024px) and (min-width: 481px){
  .pdg_r_0_tb{padding-right: 0}
}
@media screen and (max-width: 480px) {
  .display_none_sp{display: none;}
  .txt_left_sp{text-align: left;}
  .width_100_sp{width: 100%}
}


/*flex 左右揃い*/
.dispaly_flex{display: flex;justify-content: space-between;}
/*flex 左揃い*/
.dispaly_flex_left{display: flex;}
@media screen and (max-width: 768px) {
  .dispaly_flex_left_sp{display: flex;}
}
/*flex 右揃い*/
.dispaly_flex_right{display: flex;justify-content:flex-end;}
/*flex 中央揃い*/
.dispaly_flex_center{display: flex;justify-content:center;}
/*flex 上*/
.align_top{align-items:flex-start;}
@media screen and (max-width: 480px) {
  .align_top_sp{align-items:flex-start!important;}
}
/*flex 下*/
.align-items-flex-end,
.align_bottom{align-items:flex-end;}
/*flex 中央*/
.align-items-center,
.align_center{align-items: center;}
/*flex SPで一列*/
.flex_column {
    flex-direction: column;
}
@media (max-width: 1024px) and (min-width: 481px){
  .flex_column_tb{flex-direction:column;}
  .flex_column_tb>*{width: 100%}
}
@media screen and (max-width: 480px) {
  .flex_column_sp{flex-direction:column;}
  .flex_column_sp>*{width: 100%}
}

@media screen and (max-width: 768px) {
  .flex_column_r_sp{flex-direction: column-reverse;}
  .flex_column_r_sp>div{width: 100%}
}


.db_menu_item_a.bg-cyan:after {content: '';width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;border-left: 17px solid #00BEF2;position: absolute;right: -16px;z-index: 1;}
.db_menu_item.bg-black:after {content: '';width: 0;height: 0;border-top: 20px solid transparent;border-bottom: 20px solid transparent;border-left: 17px solid #000;position: absolute;right: -16px;z-index: 1;}
.db_menu_item.bg-black{color: #fff}

@media screen and (max-width: 1024px) {
  .db_menu_item_a.bg-cyan:after, .db_menu_item.bg-black{content: normal;}
  .db_menu_item.bg-black:after{content: none}
}
.popup_advance .delivery_address_btn .cart-card-price{line-height: 83%;margin-top: -5px;}
.popup_advance b.extra_b_16{font-size: 20px}
.credit_edit_box{background: #F5F5F5; border-radius: 5px; padding: 16px; margin-bottom: 16px; margin-top: 8px;}


footer{padding: 30px 0;}
.footer-link{padding-left: 16px}
  .footer-icon{padding-right: 16px}
.footer_sp{display: flex;justify-content: space-around;align-items:stretch;}
.footer_sp>div{text-align: center;display: flex;flex-direction:column;align-items:center;justify-content:space-between;}
.footer_sp img {width: 36px;}
.db_travel_msg{position: absolute; z-index: 999; top: 70px; padding: 16px 32px; color: #fff; width: 100%; background: rgba(0,0,0,0.80);display: none}
.db_travel_msg_cross{position: absolute;right: 0px;top:0px;width: 12px}
.db_travel_msg>div{position: relative;}
.db_travel_msg_cross img{width: 100%}
.dashboard_phone_menu .cart_total_box{margin-bottom: 0}
.db_travel_card{position: absolute;bottom: 16px;left: 16px;color: #fff;letter-spacing: 0;text-shadow: 0.6px 0 #fff;}
.db_travel_card_activated_tag{background: #000;padding:8px;color: #fff;text-transform: uppercase;}
.db_travel_card.offer_heading_highlight{color: #000;text-shadow: 0;}
.db_travel_popup_icon{position: absolute;bottom: 16px;right: 16px;}
.db_travel_popup_date{padding: 2px 0;}
.db_travel_popup_date span{color:#fff;background-color: #000; display: inline; padding: 2px 4px; box-decoration-break: clone; -webkit-box-decoration-break: clone;}
.db_travel_popup_status{position: absolute;bottom: 20px;left: 20px;}
.db_instruction_sp>div{width: 23%}
.offer_detail_show_extra_02{position: relative; left: 19px; top: 16px; text-align: left;}
.vas_item:after{content: normal!important}
.plan-img-full.padding20, .gray-box.padding20, .secondary-plan .padding20{padding: 16px}
.primary-plan .offer_card_heading{/*position: absolute;top: 23px;*/}
.primary-plan.travel-popup-link, .primary-plan.travel-popup-link .minheight{min-height: initial;}
.reward_item_content .primary-plan .offer_card_heading{position: static;top:auto;}
.secondary-plan .plan-title.checkout-card-header{position: absolute;top: 21px;}
.db_delivery_copy_box{margin-top: 4px;padding: 4px;width: 45%;text-align: center;margin-right: 16px}
.plan-img-full >div{z-index: 1}
.primary-plan .text_bg{ padding-top: 25%; position: absolute; bottom: 0;left: 0;z-index: 0; width: 100%; background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%); background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 100%); background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.3) 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );}
.primary-plan .cart_btn{width: 98px}
.no_discount {min-height: 100px}
.no_discount .plan-price{position: relative;}
.no_discount .card-price{position: absolute; top: 14px; right: 0;}
.flash_close{display: none}
.mfp-close img{width: 100%}
.setting_pw_forgot{width: 192px; text-align:right;}
.cart_update_title{background-color: #EEE;padding: 8px 16px}
.cart_update_title_deactive{color: #CCC; text-shadow: 0.4px 0 #CCC;}
.credit_title{background-color: #EEE;padding: 16px}
.nav_logo{opacity: 1!important}
.create_acc_popup{padding: 0;background: rgba(0,0,0,0.50);left: 0;top: 70px;min-height: 100%;width: 100%;border-radius: 0}
.create_acc_popup_01{background:#fff; color: #000;left: 14%;right: 14%;padding: 0;position: absolute;border-radius: 10px;top:25%;}
.create_acc_popup_msg{padding: 24px 24px;}
.create_acc_popup_btn>*{width: 50%;text-align:center;color: #0C84FF;border-top: 1px solid #C7C7CC;padding:8px 24px ;}
.create_acc_popup_btn>*:first-child{border-right: 1px solid #C7C7CC;}
.signin_bio_popup_after{color: #fff;    background: rgba(0,0,0,0.50);left: 28%;padding: 24px 48px;}
.signin_bio_popup>img{width: 80px}
.cart_right_div{max-width: 335px;width: 100%}

.a_block_02{display: block;height: 42px; width: 100%; position: absolute; max-width: 236px;}
@media screen and (max-width: 1024px) {
  .inbox_ontop{padding:0;}
  .inbox_content{margin-top: -25px;}
  .inbox_ontop .inbox_item_box{padding:0 16px;}
  .activate_sp.bg-yellow{background: transparent;padding:0;}
  .friend_code_box{width: calc(100% - 64px);}
  .dashboard_phone_menu .db_menu_item{padding: 10px 16px}
  .inclination_ontop.listing{margin-bottom: -515px;}
  .inclination_ontop.cart_ontop{margin-bottom: -548px;}
  .signin_signup_button{width: 100%;max-width: initial;}
  .card-header-wrapper, .primary-plan .offer_card_heading, .secondary-plan .plan-title.checkout-card-header, .icon-inline{position: static;top:auto;}
  .flash_close{position: absolute;top: 24px;left: 17px;z-index: 1;/*display: block;*/display: none;}
  .offer_detail_headerimg_nav_bg{
    background: -moz-linear-gradient(top, rgba(0,0,0,3) 0%, rgba(0,0,0,0.0) 100%)!important;
    background: -webkit-linear-gradient(top, rgba(0,0,0,3) 0%,rgba(0,0,0,0.0) 100%)!important;
    background: linear-gradient(to bottom, rgba(0,0,0,3) 0%,rgba(0,0,0,0.0) 100%)!important;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 )!important;
  }
  .offer_detail_headerimg_nav_bg .menu_title{display: none}
  .offer_detail_headerimg{padding-top: 0}
  .cart_left{padding-right: 0}
  .dashboard_phone_menu{position: relative;/*margin-bottom: -630px*/;top: -630px;z-index: 2;}
  .dashboard_phone_menu_arrow{position: absolute;right: 16px}
  .dashboard_phone_menu div{color: #fff}
  .dashboard_phone_menu div.extra_b_16{text-shadow: 0.4px 0 #fff;}
  .dashboard_phone_menu div.dashboard_phone_menu_no{line-height: 1.3em;}
  .dashboard_phone_menu div:last-child{color: #eee}
  .logged:hover .logged-menu {display: none;}
  .menu_title{padding: 2px 4px; margin: 17px 16px 1px 0; float: left;text-shadow: 0.4px 0 #fff;letter-spacing:0.2px;}
  footer{padding: 30px 24px}
  .footer-link{padding-left: 0}
  .footer-icon{padding-right: 0}
  .nav_back img{width: 25px}
  .w3-bar .nav_back{margin-left: 12px;margin-top: 22px;}
  .dashboard_phone_menu .cart_total_box{position: fixed;width: 100%;z-index: 1000;}
  .cart_border_top_sp{border-top: 2px solid #000;}
}

@media (max-width: 1024px) and (min-width: 481px){
  .w3-hide-medium {display: none!important;}
  .db_travel_msg{top: 80px;padding: 16px 16px;}
  .inclination_bg.slick_listing:after{height: 706px!important;}
  .nav_menu{margin-top: 11px!important; margin-left: 8px!important;padding-left: 16px!important;}
  .signin_signup_right.page_width_7over12, .signin_signup_left.page_width_7over12{padding:90px 16px;padding-bottom: 0}
  .signin_signup_right.page_width_7over12{background-color: transparent;border-top: none;}
  .inclination_ontop.signin_signup{margin-bottom: -355px;}
  .inclination_ontop.dashboard_btn_ontop{top: -527px; margin-bottom: -469px;}
  .inclination_bg_btn:before{top: 95px}
  .inclination_bg_btn:after{top: -36px;}
  .shopping-cart{margin-right:24px;}
}
@media (max-width: 480px){
  .w3-hide-small{display: none!important}
  .db_travel_msg{top: 80px;padding: 16px}
  .no_discount{min-height:initial;}
}
@media screen and (max-width: 480px) {

  .footer_padding{padding-bottom: 106px;}
  .footer_padding.listing{padding-bottom: 70px;}
  footer{position: fixed; bottom: 0; z-index: 999; width: 100%;}
  h1, .offer-header{font-size: 48px;}
  .card-price{font-size: 43px;text-shadow: 0.8px 0 #000;}
  .detail_heading, .activate_header_sp{font-size: 28px;}
  .detail_heading{width: calc(100% - 68px);}
  h2, .offer_heading{font-size: 36px}
  h3, .card-header{font-size: 24px}
  .offer_card_heading span, .warning_date{font-size: 24px}
  .cart_total_box .card-header, .font-20, .dashboard_phone_menu_no, .menu_title{font-size: 18px;}
  .plan_detail_title{font-size: 16px}
  .detail_auto .auto-renew{font-size: 14px;text-shadow:0.8px 0 #000;letter-spacing: 0.3px;}
  body, .text-input input, .text-input, .cart_heading_p, .cart_btn{font-size: 14px;}
  .subtext, .footer_sp_title{font-size: 12px;}
  #item_id_04{background-color: #fff}
  .flex_column_sp>*{max-width:initial;width: 100%}
  .menu_title{padding: 2px 4px; margin: 22px 16px 1px 0; float: left;text-shadow: 0.4px 0 #fff;letter-spacing:0.2px;}
  .warning_btn>div:first-child{margin-bottom: 16px;}
  .detail_heading_a{padding-top:16px;margin-top:8px;}
  .detail_left{padding-bottom:16px;padding-top: 16px}
  .inclination_bg:after{transform: rotate(-5deg);}
  .inclination_bg.slick_listing:after{height: 510px !important;}
  .inclination_ontop.signin_signup{margin-bottom: -551px;}
  .activate_sp img:first-child{width: 112px;}
  .select-input{background: #fff;}
  .minheight, .port_upload{min-height: 200px;}
  .inclination_bg:before{background-size: 100%;left:97px;}
  footer{height: 70px!important; margin-top: -70px;padding:8px 16px;}
  /*.dashboard_ontop{position: relative;margin-bottom: 0;top: 16px;}*/
  .inclination_ontop.dashboard_btn_ontop{top: -527px;margin-bottom: -546px;}
  .inclination_ontop.dashboard_ontop{top: -605px;margin-bottom: -575px;}
  .inclination_ontop.no_footer_ontop_sp{margin-bottom: -591px;}
  .inclination_ontop.listing.slick_listing{margin-bottom: -523px;}
  .inclination_bg.inclination_bg_submenu.slick_listing:before{top: 62px;}
  .no_footer_padding_sp{padding-bottom: 0}
  .popup_headerimg{width: 114px;margin: 0 auto}
  .faq_livechat{bottom: 75px;}
  .create_account_card p.offer-header-p{margin-top: 4px;}
  .icon-shadow{width: 60px;}
  .card-header-wrapper.width-70{width: calc(100% - 68px)}
  .db_delivery_copy_box{margin-top: 4px;padding: 4px;width: calc(100% - 68px);text-align: center}
  .db_right .detail-banner{height: 120px;}
  .db_paynow{position: absolute;right: 0}
  .primary-plan{min-height: initial;}
  .no_discount .card-price{position: static;}
  .birth{margin-bottom:35px!important;}  
  .dashboard_phone_menu .db_menu_item{padding: 10px 16px}
  .dashboard_phone_menu_arrow{position: absolute;right: 16px}
  .detail_main_p{margin-top: 8px!important}
  .effective_date .fa-calendar-alt{top:13px;}
  .db_autopay_max{border-bottom: 0; padding-bottom: 0;}
}


div#slider {
    overflow: hidden;
    position: relative;
    width: 1130px;
    background: none;
    height: 460px;
    background-color: transparent;
}


.offer_slider_box.w3-hide-small.w3-hide-medium {
    width: 1150px;
    max-height: 490px;
    margin: 0 auto;
}

.offer_slider_dot {
    position: absolute;
    bottom: 20px;
    right: 35px;
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
  </style>
  <!--------------------------->
  <!-- Page content -->
  <div class="w3-content">

      
      <div class="bg_light_greys">
          <!-- <section class="inclination_bg inclination_bg_submenu listing slick_listing">
      </section> -->

          <div class="w3-hide-small w3-hide-medium offer_slider_box">
          <skeleton-carousel class="slider_sp_box" dots auto loop>
              <div id="slider">
                  <div class="offer_slider_dot">
                      <ul class="slider-nav">
                          <li><i class="fas fa-circle"></i></li>
                          <li><i class="fas fa-circle"></i></li>
                          <li><i class="fas fa-circle"></i></li>
                          <li><i class="fas fa-circle"></i></li>
                      </ul>
                  </div>
                  <div class="slider_content">
                      <div><a href="offer-details-createplan.html"><img src="../../../assets/images/h3hk/offer_slider/slider_01_pc.png"
                                  class="img_switch"></a></div>
                      <div><a href="offer-details-createplan.html"><img src="../../../assets/images/h3hk/offer_slider/slider_02_pc.png"
                                  class="img_switch"></a></div>
                      <div><a href="offer-details-createplan.html"><img src="../../../assets/images/h3hk/offer_slider/slider_03_pc.png"
                                  class="img_switch"></a></div>
                      <div><a href="offer-details-createplan.html"><img src="../../../assets/images/h3hk/offer_slider/slider_04_pc.png"
                                  class="img_switch"></a></div>
                      <div><a href="offer-details-createplan.html"><img src="../../../assets/images/h3hk/offer_slider/slider_01_pc.png"
                                  class="img_switch"></a></div>
                  </div>
              </div>

              <div class="slider_bg">
                  <img src="../../../assets/images/h3hk/offer_slider/slider_01_pc.png" class="img_switch">
              </div>
              </skeleton-carousel>
          </div>

          <div class="w3-hide-large w3-hide-small">
          <skeleton-carousel class="slider_sp_box" dots auto loop>
              <section class="slider_tb">
                  <div class="slider_tb_box">
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_01">
                              </article>
                          </a>
                      </div>
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_02">
                                  <div class="text_box">
                                      <div class="offer_card_heading">Slider 2</div>
                                      <div>This is banner text. This is banner text. This is banner text.</div>
                                  </div>
                                  <div class="text_bg"></div>
                              </article>
                          </a>
                      </div>
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_03">
                                  <div class="text_box">
                                      <div class="offer_card_heading">Slider 3</div>
                                      <div>This is banner text. This is banner text. This is banner text.</div>
                                  </div>
                                  <div class="text_bg"></div>
                              </article>
                          </a>
                      </div>
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_04">
                                  <div class="text_box">
                                      <div class="offer_card_heading">Slider 4</div>
                                      <div>This is banner text. This is banner text. This is banner text.</div>
                                  </div>
                                  <div class="text_bg"></div>
                              </article>
                          </a>
                      </div>
                  </div>

              </section>
              </skeleton-carousel>
          </div>

          <div class="w3-hide-large w3-hide-medium">
          <skeleton-carousel class="slider_sp_box" dots auto loop>
              <section class="slider_sp">
                  <div class="slider_sp_box">
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_01">
                              </article>
                          </a>
                      </div>
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_02">
                                  <div class="text_box">
                                      <div class="offer_card_heading">Slider 2</div>
                                      <div>This is banner text. This is banner text. This is banner text.</div>
                                  </div>
                                  <div class="text_bg"></div>
                              </article>
                          </a>
                      </div>
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_03">
                                  <div class="text_box">
                                      <div class="offer_card_heading">Slider 3</div>
                                      <div>This is banner text. This is banner text. This is banner text.</div>
                                  </div>
                                  <div class="text_bg"></div>
                              </article>
                          </a>
                      </div>
                      <div>
                          <a href="offer-details-createplan.html">
                              <article class="bg_04">
                                  <div class="text_box">
                                      <div class="offer_card_heading">Slider 4</div>
                                      <div>This is banner text. This is banner text. This is banner text.</div>
                                  </div>
                                  <div class="text_bg"></div>
                              </article>
                          </a>
                      </div>
                  </div>

              </section>
              </skeleton-carousel>
          </div>
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
customElements.define('demo-element', DemoElement);
