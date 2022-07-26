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
    phoneNumber.textContent = '📞 666.666.6666';

    const address = document.createElement('p');
    address.textContent = ''

    const location = document.createElement('img');
    location.src = '../dist/images/location.png';
    location.alt = 'Eggplant restuarant location';

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
    menu.textContent = 'Eggplant';
    
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
    header.textContent = 'Eggplant';
    header.appendChild(createNav());

    return header;
};

const createNav = () => {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    // homeButton.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('active')) return;
    //     setActiveButton(homeButton);
    //     renderHomePage();
    // });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    // menuButton.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('active')) return;
    //     setActiveButton(menuButton);
    //     renderMenuPage();
    // });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.textContent = 'About';
    // aboutButton.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('active')) return;
    //     setActiveButton(aboutButton);
    //     renderAboutPage();
    // });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
};

// function setActiveButton(button) {
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

    // setActiveButton(document.querySelector('.button-nav'));
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
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");


(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNwR2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcUI7QUFDQTtBQUNFOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlEQUFjO0FBQ2xCOztBQUVBLGlFQUFlOzs7Ozs7VUNsR2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUMsMkRBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFib3V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICfwn5OeIDY2Ni42NjYuNjY2Nic7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2NhdGlvbi5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvbG9jYXRpb24ucG5nJztcbiAgICBsb2NhdGlvbi5hbHQgPSAnRWdncGxhbnQgcmVzdHVhcmFudCBsb2NhdGlvbic7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn07XG5cbmNvbnN0IHJlbmRlckFib3V0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFBhZ2UoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJBYm91dFBhZ2UiLCIvLyBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuLy8gICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdFZ2dwbGFudCc7XG5cbi8vICAgICByZXR1cm4gaGVhZGVyO1xuLy8gfTtcblxuLy8gY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuLy8gICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICBcbi8vICAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4vLyAgICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbi8vICAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbi8vICAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdXR0b24pO1xuLy8gICAgICAgICByZW5kZXJIb21lUGFnZSgpO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuLy8gICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG4vLyAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4vLyAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbi8vICAgICAgICAgcmVuZGVyTWVudVBhZ2UoKTtcbi8vICAgICB9KTtcblxuLy8gICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuLy8gICAgIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gJ0Fib3V0Jztcbi8vICAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4vLyAgICAgICAgIHNldEFjdGl2ZUJ1dHRvbihhYm91dEJ1dHRvbik7XG4vLyAgICAgICAgIHJlbmRlckFib3V0UGFnZSgpO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuLy8gICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbi8vICAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pO1xuXG4vLyAgICAgcmV0dXJuIG5hdjtcbi8vIH07XG5cbi8vIGNvbnN0IHNldEFjdGl2ZUJ1dHRvbiA9IChidXR0b24pID0+IHtcbi8vICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1uYXYnKTtcblxuLy8gICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4vLyAgICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbi8vICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuLy8gICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vIH07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgY29uc3Qgc2NhbGxvcERpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzY2FsbG9wRGlzaC5zcmMgPSAnLi4vZGlzdC9pbWFnZXMvc2NhbGxvcC5wbmcnO1xuICAgIHNjYWxsb3BEaXNoLmFsdCA9ICdzY2FsbG9wIGRpc2gnO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzY2FsbG9wRGlzaCk7XG4gICAgcmV0dXJuIG1haW47XG59O1xuXG4vLyBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4vLyAgICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLy8gICAgIGNvcHlyaWdodC5pbm5lckhUTUwgPSAnwqkgMjAyMiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Rycm9ldlwiPnRycm9ldjwvYT4nXG5cbi8vICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KVxuXG4vLyAgICAgcmV0dXJuIGZvb3Rlcjtcbi8vIH07XG5cbmNvbnN0IHJlbmRlckhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgLy8gY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgLy8gY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICAvLyBjb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcbiAgICAvLyBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxuXG4gICAgLy8gY29uc3QgbWFpbiA9IGNyZWF0ZU1haW4oKTtcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgLy8gY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVBhZ2UiLCJjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ0VnZ3BsYW50JztcbiAgICBcbiAgICByZXR1cm4gbWVudTtcbn1cblxuY29uc3QgcmVuZGVyTWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnVQYWdlIiwiaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgcmVuZGVyQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0XCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0VnZ3BsYW50JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgLy8gaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgLy8gICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgLy8gICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICAvLyAgICAgcmVuZGVySG9tZVBhZ2UoKTtcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIC8vIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIC8vICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgLy8gICAgIHJlbmRlck1lbnVQYWdlKCk7XG4gICAgLy8gfSk7XG5cbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgLy8gYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgIC8vICAgICBzZXRBY3RpdmVCdXR0b24oYWJvdXRCdXR0b24pO1xuICAgIC8vICAgICByZW5kZXJBYm91dFBhZ2UoKTtcbiAgICAvLyB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuICAgIHJldHVybiBuYXY7XG59O1xuXG4vLyBmdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4vLyAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tbmF2Jyk7XG5cbi8vICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuLy8gICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4vLyAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbi8vIH07XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gICAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodC5pbm5lckhUTUwgPSAnwqkgMjAyMiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Rycm9ldlwiPnRycm9ldjwvYT4nXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KVxuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG5cbiAgICBjb25zdCBtYWluID0gY3JlYXRlTWFpbigpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAvLyBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1uYXYnKSk7XG4gICAgcmVuZGVySG9tZVBhZ2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclBhZ2UiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJQYWdlIGZyb20gJy4vbW9kdWxlcy9yZW5kZXInO1xuXG5yZW5kZXJQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9