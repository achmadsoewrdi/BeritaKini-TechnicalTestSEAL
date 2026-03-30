export default async function handler(req, res) {
    const path = req.url.replace(/^\//, '');
    const targetUrl = `https://berita-indo-api-next.vercel.app/${path}`;

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}