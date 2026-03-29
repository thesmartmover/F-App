require('@babel/register')();

const express = require('express');
const app = express();

const render = require('./render').default;

app.get('/', (req, res) => {
    const htmlContent = render();
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>First App</title>
            </head>
            <body>
                <div id="root">${htmlContent}</div>
            </body>
        </html>
    `)
});

app.listen(3000, () => console.log('Server is ready on 3000'));
