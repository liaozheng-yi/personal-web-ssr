const fs = require('fs');
const path = require('path');
const express = require('express');
const { createServer: createViteServer } = require('vite');

async function createServer() {
    const app = express();

    const vite = await createViteServer({
        server: { middlewareMode: 'ssr' }
    })
    app.use(vite.middlewares)

    app.use('*', async (req, res) => {
        const url = req.originalUrl;

        try {
            let template = fs.readFileSync(
                path.resolve(__dirname, 'index.html'),
                'utf-8'
            )
            template = await vite.transformIndexHtml(url, template)
            const { render } = await vite.ssrLoadModule('/src/entry-server.js')
            const { appHtml, cssHtml } = await render(url)
            const html = template
                .replace(`<!--ssr-outlet-->`, appHtml)
                .replace(`<!--css-outlet-->`, cssHtml)
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            vite.ssrFixStacktrace(e)
            res.status(500).end(e.message)
        }
    })

    app.listen(3000, () => {
        console.log('http://localhost:3000')
    })
}

createServer()