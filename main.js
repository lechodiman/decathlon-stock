const axios = require('axios');

const products = [
  {
    name: 'Barra De Musculación De 1,55 M Y 28 Mm',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=8289896&id_combination=19305&rand=1610418381407',
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
  },
  {
    name: 'Disco De Aleación Musculación 10 KG',
    stockUrl:
      'https://www.decathlon.cl/modules/cronos/cronos-ajax.php?id_product=1042303&id_combination=20481&rand=1610419942699',
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
      .replace('(Lunes a Viernes)', '')
      .replace('(Lun a Vie)', '')
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
