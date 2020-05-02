# Cards Carousel
[![Netlify Status](https://api.netlify.com/api/v1/badges/c094ab0e-951e-467d-b8eb-885b26860636/deploy-status)](https://app.netlify.com/sites/cards-carousel/deploys)

Cards Carousel is a reusable Carousel component made with Vanilla JavaScript, SASS and CSS Flexbox. 

Scrolling is achieved by clicking or long pressing the arrows on the left or on the right of the carousel. When scrolling to right is terminated, additional cards are loaded simulating a fake API call (cards placeholders are displayed before loading new cards). 

## Installation

Install all packages:

```bash
npm install
```

## Build
Webpack is configured to bundle the JavaScript code into dist/bundle.js and the compiled CSS into dist/bundle.css

#### Development Build

```bash
npm run build
```

#### Production Build

```bash
npm run build-production
```

## Usage

#### HTML (index.html)

```html
<div id="my-carousel"></div>
```

#### JavaScript (index.js)

```javascript
let options1 = {
    container: "my-carousel",
    icon: "lightbulb",
    title: "Fresh and just uploaded content",
    subtitle: "Lorem ipsum...."
}
let carousel1 = new Carousel(options1);
```

## License
[MIT](https://choosealicense.com/licenses/mit/)