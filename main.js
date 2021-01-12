const axios = require('axios');

const products = [
  {
    name: 'Barra De Musculación De 1,55 M Y 28 Mm',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=8289896&id_combination=19305&rand=1610418381407',
    productUrl:
      'https://www.decathlon.cl/p/8289896_barra-de-musculacion-de-155-m-y-28-mm.html',
  },
  {
    name: 'Barra De Musculación 2 M 28 Mm',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=8289900&id_combination=19308&rand=1610418999339',
  },
  {
    name: 'Banco De Musculación 500 Plegable E Inclinable DOMYOS',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=8380453&id_combination=16283&rand=1610419706457',
    productUrl:
      'https://www.decathlon.cl/p/8380453_banco-de-musculacion-500-plegable-e-inclinable-domyos.html',
  },
  {
    name: 'Banca De Musculación 100',
    stockUrl: '',
    productUrl:
      'https://www.decathlon.cl/p/8333640_banca-de-musculacion-100.html',
  },
  {
    name: 'Disco De Aleación Musculación 10 KG',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=1042303&id_combination=20481&rand=1610419942699',
    productUrl:
      'https://www.decathlon.cl/p/1042303_disco-de-aleacion-musculacion-05-kg-28-mm-valor-varia-segun-peso.html',
  },
  {
    name: 'Reposabarra De Musculación Rack 100',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=8380450&id_combination=16280&rand=1610462949911',
  },
];

const checkStock = async (product) => {
  console.log('\n');
  console.log(`Checking stock for: ${product.name}`);
  const response = await axios.post(product.stockUrl);

  const stores = response.data.stores;

  Object.entries(stores).forEach(([key, storeInfo]) => {
    const storeName = storeInfo.name
      .replace('Decathlon', '')
      .replace(/\(Lun.* a Vie.*\)/i, '')
      .replace('Estacionamiento Open Pick Up', '')
      .trim();

    console.log(`${storeName}: ${storeInfo.info_stock}`);
  });
};

const run = async () => {
  for (const product of products) {
    await checkStock(product);
  }
};

run();
