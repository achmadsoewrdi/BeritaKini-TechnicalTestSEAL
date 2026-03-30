export default async function handler(req, res) {
    const path = req.url.replace(/^\//, '');  // hapus leading slash saja
    const targetUrl = `https://berita-indo-api-next.vercel.app/${path}`;

    console.log('req.url:', req.url);
    console.log('targetUrl:', targetUrl);

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}