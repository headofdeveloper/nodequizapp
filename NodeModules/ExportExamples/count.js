let count = 0;

const inc = () => ++count;
const dec = () => --count;

// burada tanımlanan değişkenler bu module'ün scope'undadır. Dışarıdan erişilemez.
// dışarıdan erişilebilmesini istediklerimizi export ediyoruz ve reuqire ile import edenler onu kullanabilir hale geliyor.
// mesela count'un değerine erişmesini sitiyorsam onu export etmeliyim veya onu döndüren bir getter daha mantıklı bir seçenek
const getCount = () => count;

// sadece bir string değil obje export ediyorum.
// bu module içerisinde nelerin erişilebilir olmasını istiyorsam onları obje içinde ekliyoruö
module.exports = {
    inc,
    dec,
    getCount
};