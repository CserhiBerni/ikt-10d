const puppeteer = require("puppeteer");
const fastify = require("fastify")();
const prod = false;
const frontendUrl = prod ? "https://bernat.novy.vip" : "http://localhost:3000";
let browser;

fastify.route({
  method: "GET",
  url: "/api",
  schema: {
    querystring: {
      type: "object",
      required: ["game"],
      properties: {
        game: {
          type: "string",
        },
      },
    },
  },
  handler: async (request, reply) => {
    let game = request.query.game;

    console.log(`Game req: ${game}`);
    const result = await scrapeData(`https://gg.deals/game/${game}/`);

    reply.header("Access-Control-Allow-Origin", frontendUrl);

    return result;
  },
});

const scrapeData = async (url) => {
  const page = await browser.newPage();

  await page.goto(url);

  const [officialStore] = await page.$x(
    '//*[@id="game-header-current-prices"]/div/div[1]/a/span/span'
  );
  const [keyshop] = await page.$x(
    '//*[@id="game-header-current-prices"]/div/div[2]/a/span/span'
  );

  const [storeUrl] = await page.$x(
    '//*[@id="official-stores"]/div[2]/div[1]/div[1]/div[3]'
  );

  const [keyshopUrl] = await page.$x(
    '//*[@id="keyshops"]/div[2]/div[1]/div[1]/div[3]'
  );

  const [bgImage] = await page.$x(
    '//*[@id="game-card"]/div[1]/div/div[1]/div/div[1]/div/img[1]'
  );

  const offstrData = await page.evaluate(
    (name) => name.innerText,
    officialStore
  );
  const keyshopData = await page.evaluate(
    (name) => name.innerText, 
    keyshop
  );
  const storeUrlData = await page.evaluate(
    (name) => name.firstChild.href,
    storeUrl
  );
  const keyshopUrlData = await page.evaluate(
    (name) => name.firstChild.href,
    keyshopUrl
  );
  const bgImageData = await page.evaluate(
    (name) => name.src, 
    bgImage
  );

  await page.close();

  return {
    offstrData,
    keyshopData,
    storeUrlData,
    keyshopUrlData,
    bgImageData,
  };
};

const start = async () => {
  try {
    if (prod) {
      browser = await puppeteer.launch({
        headless: true,
        executablePath: "/usr/bin/chromium",
        args: [
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-setuid-sandbox",
          "--no-sandbox",
        ],
      });
    } else {
      browser = await puppeteer.launch({ headless: true });
    }
    await fastify.listen(5000, "0.0.0.0");
    console.log("Fastify running");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
