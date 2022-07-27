/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const aboutPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = 'Reservations: 333.666.9999';

    const address = document.createElement('p');
    address.textContent = '123 Main St'

    const location = document.createElement('img');
    location.classList.add('map');
    location.src = '../dist/images/location.png';
    location.alt = 'Eggplant restuarant location';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);
    return contact;
};

const renderAboutPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(aboutPage());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutPage);

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// const createHeader = () => {
//     const header = document.createElement('div');
//     header.classList.add('header');
//     header.textContent = 'Eggplant';

//     return header;
// };

// const createNav = () => {
//     const nav = document.createElement('nav');
//     nav.classList.add('nav');
    
//     const homeButton = document.createElement('button');
//     homeButton.classList.add('nav-button');
//     homeButton.textContent = 'Home';
//     homeButton.addEventListener('click', (e) => {
//         if (e.target.classList.contains('active')) return;
//         setActiveButton(homeButton);
//         renderHomePage();
//     });

//     const menuButton = document.createElement('button');
//     menuButton.classList.add('nav-button');
//     menuButton.textContent = 'Menu';
//     menuButton.addEventListener('click', (e) => {
//         if (e.target.classList.contains('active')) return;
//         setActiveButton(menuButton);
//         renderMenuPage();
//     });

//     const aboutButton = document.createElement('button');
//     aboutButton.classList.add('nav-button');
//     aboutButton.textContent = 'About';
//     aboutButton.addEventListener('click', (e) => {
//         if (e.target.classList.contains('active')) return;
//         setActiveButton(aboutButton);
//         renderAboutPage();
//     });

//     nav.appendChild(homeButton);
//     nav.appendChild(menuButton);
//     nav.appendChild(aboutButton);

//     return nav;
// };

// const setActiveButton = (button) => {
//     const buttons = document.querySelectorAll('.button-nav');

//     buttons.forEach((button) => {
//         if (button !== this) {
//             button.classList.remove('active');
//         }
//     });
//     button.classList.add('active');
// };

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const scallopDish = document.createElement('img');
    scallopDish.src = '../dist/images/scallop.png';
    scallopDish.alt = 'scallop dish';

    main.appendChild(scallopDish);
    return main;
};

// const createFooter = () => {
//     const footer = document.createElement('div');
//     footer.classList.add('footer');

//     const copyright = document.createElement('p');
//     copyright.innerHTML = '© 2022 <a href="https://github.com/trroev">trroev</a>'

//     footer.appendChild(copyright)

//     return footer;
// };

const renderHomePage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMain());
    // const content = document.querySelector('#content');
    
    // const header = createHeader();
    // content.appendChild(header)

    // const nav = createNav();
    // header.appendChild(nav)

    // const main = createMain();
    // content.appendChild(main);

    // const footer = createFooter();
    // content.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuDescription = document.createElement('h3');
    menuDescription.textContent = ('Chef\'s tasting: $195/person');

    const crabSalad = document.createElement('img');
    crabSalad.src = '../dist/images/crab-salad.jpeg';
    crabSalad.alt = 'crab salad';
    const crabDescription = document.createElement('p');
    crabDescription.textContent = ('Crab, Nasturtium, Soft Herbs');

    const quail = document.createElement('img');
    quail.src = '../dist/images/lamb.jpeg';
    quail.alt = 'quail and carrot';
    const quailDescription = document.createElement('p');
    quailDescription.textContent = ('Quail, Celeriac, Carrot, Sorrel');

    const iceCream = document.createElement('img');
    iceCream.src = '../dist/images/ice-cream.jpeg';
    iceCream.alt = 'ice cream';
    const iceCreamDescription = document.createElement('p');
    iceCreamDescription.textContent = ('Vanilla, Raspberry, Date, Pea Shoots');
    
    menu.appendChild(menuDescription);
    menu.appendChild(crabSalad);
    menu.appendChild(crabDescription);
    menu.appendChild(quail);
    menu.appendChild(quailDescription);
    menu.appendChild(iceCream);
    menu.appendChild(iceCreamDescription);
    return menu;
}

const renderMenuPage = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");




const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Yonder Tavern';
    header.appendChild(createNav());

    return header;
};

const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('about-button');
    aboutButton.textContent = 'About';
    aboutButton.addEventListener('click', () => {
        (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
};

const createMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    return main;
};

const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.innerHTML = '© 2022 <a href="https://github.com/trroev">trroev</a>'

    footer.appendChild(copyright)

    return footer;
};

const renderPage = () => {
    const content = document.querySelector('#content');
    
    const header = createHeader();
    content.appendChild(header)

    const main = createMain();
    content.appendChild(main);

    const footer = createFooter();
    content.appendChild(footer);

    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");





(0,_modules_render__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzNCZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3BHZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNxQjtBQUNBO0FBQ0U7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxpREFBYztBQUNsQjs7QUFFQSxpRUFBZTs7Ozs7O1VDL0VmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDRjtBQUNFO0FBQ0U7O0FBRTlDLDJEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhYm91dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb25zOiAzMzMuNjY2Ljk5OTknO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJzEyMyBNYWluIFN0J1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgICBsb2NhdGlvbi5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvbG9jYXRpb24ucG5nJztcbiAgICBsb2NhdGlvbi5hbHQgPSAnRWdncGxhbnQgcmVzdHVhcmFudCBsb2NhdGlvbic7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIHJldHVybiBjb250YWN0O1xufTtcblxuY29uc3QgcmVuZGVyQWJvdXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0UGFnZSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0UGFnZSIsIi8vIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4vLyAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0VnZ3BsYW50JztcblxuLy8gICAgIHJldHVybiBoZWFkZXI7XG4vLyB9O1xuXG4vLyBjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4vLyAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgIFxuLy8gICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vICAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbi8vICAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuLy8gICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuLy8gICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4vLyAgICAgICAgIHJlbmRlckhvbWVQYWdlKCk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4vLyAgICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51Jztcbi8vICAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbi8vICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuLy8gICAgICAgICByZW5kZXJNZW51UGFnZSgpO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbi8vICAgICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4vLyAgICAgYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuLy8gICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbi8vICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGFib3V0QnV0dG9uKTtcbi8vICAgICAgICAgcmVuZGVyQWJvdXRQYWdlKCk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4vLyAgICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuLy8gICAgIG5hdi5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbik7XG5cbi8vICAgICByZXR1cm4gbmF2O1xuLy8gfTtcblxuLy8gY29uc3Qgc2V0QWN0aXZlQnV0dG9uID0gKGJ1dHRvbikgPT4ge1xuLy8gICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLW5hdicpO1xuXG4vLyAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbi8vICAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuLy8gICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gfTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBjb25zdCBzY2FsbG9wRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNjYWxsb3BEaXNoLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9zY2FsbG9wLnBuZyc7XG4gICAgc2NhbGxvcERpc2guYWx0ID0gJ3NjYWxsb3AgZGlzaCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHNjYWxsb3BEaXNoKTtcbiAgICByZXR1cm4gbWFpbjtcbn07XG5cbi8vIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbi8vICAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4vLyAgICAgY29weXJpZ2h0LmlubmVySFRNTCA9ICfCqSAyMDIyIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdHJyb2V2XCI+dHJyb2V2PC9hPidcblxuLy8gICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpXG5cbi8vICAgICByZXR1cm4gZm9vdGVyO1xuLy8gfTtcblxuY29uc3QgcmVuZGVySG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICAvLyBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcblxuICAgIC8vIGNvbnN0IG5hdiA9IGNyZWF0ZU5hdigpO1xuICAgIC8vIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpXG5cbiAgICAvLyBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICAvLyBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lUGFnZSIsImNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtZW51RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAoJ0NoZWZcXCdzIHRhc3Rpbmc6ICQxOTUvcGVyc29uJyk7XG5cbiAgICBjb25zdCBjcmFiU2FsYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjcmFiU2FsYWQuc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2NyYWItc2FsYWQuanBlZyc7XG4gICAgY3JhYlNhbGFkLmFsdCA9ICdjcmFiIHNhbGFkJztcbiAgICBjb25zdCBjcmFiRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY3JhYkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gKCdDcmFiLCBOYXN0dXJ0aXVtLCBTb2Z0IEhlcmJzJyk7XG5cbiAgICBjb25zdCBxdWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHF1YWlsLnNyYyA9ICcuLi9kaXN0L2ltYWdlcy9sYW1iLmpwZWcnO1xuICAgIHF1YWlsLmFsdCA9ICdxdWFpbCBhbmQgY2Fycm90JztcbiAgICBjb25zdCBxdWFpbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHF1YWlsRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAoJ1F1YWlsLCBDZWxlcmlhYywgQ2Fycm90LCBTb3JyZWwnKTtcblxuICAgIGNvbnN0IGljZUNyZWFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNlQ3JlYW0uc3JjID0gJy4uL2Rpc3QvaW1hZ2VzL2ljZS1jcmVhbS5qcGVnJztcbiAgICBpY2VDcmVhbS5hbHQgPSAnaWNlIGNyZWFtJztcbiAgICBjb25zdCBpY2VDcmVhbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGljZUNyZWFtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAoJ1ZhbmlsbGEsIFJhc3BiZXJyeSwgRGF0ZSwgUGVhIFNob290cycpO1xuICAgIFxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyYWJTYWxhZCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmFiRGVzY3JpcHRpb24pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocXVhaWwpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocXVhaWxEZXNjcmlwdGlvbik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpY2VDcmVhbSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpY2VDcmVhbURlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gbWVudTtcbn1cblxuY29uc3QgcmVuZGVyTWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnVQYWdlIiwiaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgcmVuZGVyQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0XCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1lvbmRlciBUYXZlcm4nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICBcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVuZGVySG9tZVBhZ2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW5kZXJNZW51UGFnZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1idXR0b24nKTtcbiAgICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckFib3V0UGFnZSgpO1xuICAgIH0pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5hdjtcbn07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodC5pbm5lckhUTUwgPSAnwqkgMjAyMiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Rycm9ldlwiPnRycm9ldjwvYT4nXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KVxuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICByZW5kZXJIb21lUGFnZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGFnZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gJy4vbW9kdWxlcy9ob21lJztcbmltcG9ydCByZW5kZXJQYWdlIGZyb20gJy4vbW9kdWxlcy9yZW5kZXInO1xuaW1wb3J0IHJlbmRlck1lbnVQYWdlIGZyb20gJy4vbW9kdWxlcy9tZW51JztcbmltcG9ydCByZW5kZXJBYm91dFBhZ2UgZnJvbSAnLi9tb2R1bGVzL2Fib3V0JztcblxucmVuZGVyUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==