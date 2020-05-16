import toggleSearch_Devices from './func.js';
// import Dom7 from 'dom7';

let $$ = Dom7;

let app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'store.xtrasell', // App name
  theme: 'auto', // Automatic theme detection

  navbar: {
      mdCenterTitle: true,
  },
  // smartSelect: {
  //   pageTitle: 'Select Option',
  //   openIn: 'popup',
  // },
  view: {
      pushState: true,
      pushStateSeparator: '#',
      iosDynamicNavbar: false,
      xhrCache: false,
      // pushStateOnLoad: false
      // animate: false
  },

  // App root data
  data: function () {
      return {
      user: {
          firstName: 'John',
          lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
          {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
          },
          {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
          },
          {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
          },
      ]
      };
  },
  // App root methods
  methods: {
      helloWorld: function () {
      app.dialog.alert('Hello World!');
      },
  },
  // App routes
  routes: routes,


  // Input settings
  input: {
      scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
      scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
  },
  on: {
      init: function () {
          var f7 = this;
          if (f7.device.cordova) {
              // Init cordova APIs (see cordova-app.js)
              cordovaApp.init(f7);
          }
      },
  },
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

// $$('body').jsScroll({
//   height: 'auto',
//   width: '800px',
//   // position: 'top'
// });

$$(document).on('page:init', function(){
  app.preloader.show();
});

$$(document).on('page:afterin', function(e){  
  app.preloader.hide();
  var page = e.detail;
  // console.log(page.name);
  toggleSearch_Devices.toggleSearch_Devices($$(`.page[data-name="home"] .navbar .searchbar .searchbar-inner input`));
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
    },
  });
});

$$(document).on('click', '.page[data-name="home"] .navbar .subnavbar button', function(){
  $$(`.page[data-name='home'] .page-content .container #banner_cats #cats`).toggleClass('show');
});

$$(document).on('click', '.tab-link', function(){
  $$('.tab-link').removeClass('tab-link-active').not($(this).addClass('tab-link-active'));
});

$$(window).resize(function(){
  if(window.matchMedia('(min-width: 768px)').matches){
    $$(`.page[data-name="home"] .navbar .searchbar .searchbar-inner input`).prop('placeholder', 'What are you looking for?');
  }
  else if(window.matchMedia('(min-width: 0px)').matches){
    $$(`.page[data-name="home"] .navbar .searchbar .searchbar-inner input`).prop('placeholder', 'Search here...');
  }
});

$$(document).on('click', `.page[data-name="home"] .navbar .right a:nth-child(4)`, function(e){
    app.views.main.router.navigate('/cart/');
});

$$(document).on('click', `.page[data-name="home"] .navbar .right a:first-child, .page[data-name="home"] .navbar .searchbar`, function(e){
  if(window.matchMedia('(max-width: 768px)').matches){
    // app.views.main.router.navigate('/search-out/');
    app.popup.open('#search-out-popup', false);
    $$(this).off(e.type);
  }
});

$$(document).on('popup:opened', '#search-out-popup', function(){
  $$('.popup input[type="search"]').focus();
});


// $$('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
		