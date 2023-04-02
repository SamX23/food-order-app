const NUMBER_WHATSAPP = process.env.NEXT_PUBLIC_NUMBER_WA;
const WA_LINK = `https://api.whatsapp.com/send?phone=${NUMBER_WHATSAPP}&text=`;

export const TEMPLATE_WA_LINK = (items: string, price: number) =>
  `${WA_LINK}Bismillah%0A%0AHalo%2C%20saya%20mau%20pesan%20kue%20${items}%0AJadi%20total%20pembeliannya%20Rp.%20${price}%0A%0ADikirim%20ke%20Cianjur%20berapa%20ongkirnya%20%3F%0A%0ATerima%20kasih`;
