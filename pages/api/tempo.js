async function tempo(request, response) {
    const apiSecret = process.env.YOUTUBE_API_KEY;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8Jd-aVn0IsYLtVyABvWmVA&key=${apiSecret}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.items[0].statistics.subscriberCount;

response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

     response.json({
         date: dynamicDate.toGMTString(),
         inscritos: inscritos
     });
}

export default tempo;

