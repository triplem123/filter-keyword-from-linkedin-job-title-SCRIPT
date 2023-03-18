// const cheerio = require('cheerio');
// const axios = require('axios');
import cheerio from cheerio;
import axios from axios;

const searchQuery = 'healthcare%20providers%20amherst%20mass&rlz=1C1CHBF_enUS987US987&oq=healthc&aqs=chrome.0.69i59j0i20i263i433i512j69i57j0i67j0i10i512j0i20i263i433i512j0i433i512j0i512j0i67j0i512.2592j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzXztR-Qm0dD_i6cbKYEClQkxC6kyQ:1679168960037&rflfq=1&num=10&rldimm=14998433551381089573&lqi=CiFoZWFsdGhjYXJlIHByb3ZpZGVycyBhbWhlcnN0IG1hc3MZ7J34ewqRzHZIwZeo6uWAgIAIWisQABABGAIYAyIhaGVhbHRoY2FyZSBwcm92aWRlcnMgYW1oZXJzdCBtYXNzkgEObWVkaWNhbF9jZW50ZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUlJjVFJEYld0blJSQUKqAUgKCS9tLzAxbXcyeBABKhgiFGhlYWx0aGNhcmUgcHJvdmlkZXJzKAAyHxABIhuLSKyaeBa0LrypF-Gb0Q56UOKXafgsTO6ttGrgAQA&ved=2ahUKEwixrIXrn-b9AhV1MlkFHf6VDKgQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:;mv:[[42.475241323207364,-72.41782811444344],[42.276906454970295,-72.66193059247078]]'; // replace with your search query

async function scrapeGoogleResults() {
  try {
    const searchUrl = `https://www.google.com/search?q=${searchQuery}&num=10`;
    const response = await axios.get(searchUrl);


    const $ = cheerio.load(response.data);

    const results = $('div.g');

    const scrapedData = [];
    console.log('response recieved');

    results.each((index, element) => {
      const title = $(element).find('h3').text();
      const address = $(element).find('div.yuRUbf > a > div.tF2Cxc').text();
      const websiteUrl = $(element).find('div.yuRUbf > a').attr('href');
      const phone = $(element).find('div.bAhLNe.kx8XBd > span').text();

      scrapedData.push({
        title,
        address,
        websiteUrl,
        phone,
      });
    });

    console.log(scrapedData);
  } catch (error) {
    console.log(error);
  }
}

scrapeGoogleResults();
