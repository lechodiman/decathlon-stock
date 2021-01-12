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
];

const checkStock = async (product) => {
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

products.forEach(checkStock);
