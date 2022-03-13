//sıralama
//GET /Products?Sort=price_asc //ürünleri artan fiyata göre sıralama

//Filtreleme
//GET /Books?Category=Politic&Location=Turkey //kitap listesini politika ve Türkiye’de bulunanlar olarak filtreleme

//Arama
//GET /Products?Search=Digital Marketing //ürün listesinde Digital Marketing ifadesi olan ürünleri  arama

//Sayfalama
//GET /Books?page=3 //3. sayfayı getirme

//İlişkiler için alt kaynak
//Eğer veriniz başka bir veri ile ilişkiliyse alt kaynak (sub-resources)
//GET /Categories/2/Products  // 2 nolu kategorinin tüm ürünlerini döndürür
//GET /Books/32/Authors/2   // 32 nolu kitabın 2 nolu yazarını döndürür

//Çoğul isimlendirmeler
//GET /products
//GET /authors