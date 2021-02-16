async function tempo(request, response) {
     const dynamicDate = new Date();

    const subscribersResponse = await fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8Jd-aVn0IsYLtVyABvWmVA&key=AIzaSyAnmDCkM-vYLmLlbsT1nTEu-amTtMynqR0");
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.items[0].statistics.subscriberCount;

     response.json({
         date: dynamicDate.toGMTString(),
         inscritos: inscritos
     });
}

export default tempo;


//https://api.convertkit.com/v3/subscribers?api_secret=ZJwLOhiO1EvB90Clpsyw1e0fGRzPfw1Q
//https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8Jd-aVn0IsYLtVyABvWmVA&key=AIzaSyAnmDCkM-vYLmLlbsT1nTEu-amTtMynqR0
//items.statistics.subscriberCount