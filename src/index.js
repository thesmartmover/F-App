import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const product = {
    'Title': 'Apple Macbook Pro 16\'',
    'Cover': 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111932_sp809-mbp16touch-silver-2019.jpeg',
    'Price': '2800',
    'Description': 'The 16-inch MacBook Pro is a high-performance Apple laptop designed for professionals, featuring advanced M1/M2/M3 Pro or Max chips. It boasts a 16.2-inch Liquid Retina XDR display (3456×2234) with ProMotion (120Hz), exceptional battery life (up to 22 hours), and abundant ports including Thunderbolt 4, HDMI, and MagSafe 3',
    'Discount': true
};

const root = createRoot(document.getElementById('root'));
root.render(
    <App product={product} />
);

