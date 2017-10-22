---
title: Bootstrap
---
## Bootstrap

Bootstrap merupakan framework web yang terkenal. Berisi komponen - komponen web yang keren dan mudah kita add dalam projek web kita. Bootstrap support dapat digunakan di berbagai browser modern seperti Chrome, Firefox, Opera, Safari , dan bahkan Internet Explorer (supported form IE8 on).

Di Bootstrap terdata responsive grid system untuk mengatur layout agar responsive dan ini dapat menjadi langkah awal untuk membuat mobile website yang friendly.


#### Versi


Terkadang disebut sebagai Twitter Bootstrap,  karena framework ini memang aslinya dibuat oleh Twitter sebagai internal tool. Dan rilis sebagai open source project pada Agustus 2011. 

Bootstrap 2 rilis pada pada Januari 2012 dan memperkenalkan the 12 column responsive grid system.

Bootstrap 3 muncul pada August 2013, merupah tampilan menjadi flat design dan mobile-first approach.

Bootstrap 4 telah ada versi betanya pada Agustus 2017 dan sekarang sudah terdapat Sass dan flexbox.


#### Instalasi

Ada 2 cara untuk menambahkan bootstrap kedalam projek web kita. Kamu dapat menambahkan Botstrap CSS dengan `<link>` elemen didalam `<head>` dari halaman webmu via (CDN) :

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">`

Begitu juga pada saat kita menambahkan Bootstrap JavaScript ,dengan cara memasukkan `<script>` yang ditaruh sebelum menutup tag `<body> `. Pertama, kamu butuh untuk memasukkan 2 dependencies -jQuery and Popper - 

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
```


Atau gampangnya, kamu bisa download semua sourcenya Bootstrap yang sudah termasuk Sass, JavaSciprt, dan build system dengan Bower, Composer, Meteor, atau npm. Ini direkomendasikan karena keluwesaannya dalam mengontrol untuk menginclude atau mengexclude module yang dibutuhkan.

`npm install bootstrap@4.0.0-beta`

`gem install bootstrap -v 4.0.0.beta`

`bower install bootstrap#v4.0.0-beta`

(Itu merupakan beberapa contoh. Kamu dapat mengecek <a href='https://getbootstrap.com/' target='_blank' rel='nofollow'>Bootstrap website</a>)

#### Informasi Tambahan:

Bootstrap punya dokumentasi dengan banyak <a href='https://getbootstrap.com/docs/4.0/examples/' target='_blank' rel='nofollow'>contoh contoh</a> dan  <a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/' target='_blank' rel='nofollow'>HTML template untuk dioprek</a>. 

Dan sebagai tambahan,  kamu bisa menemukan keduanya di<a href='https://bootswatch.com/' target='_blank' rel='nofollow'>free</a> dan <a href='https://themes.getbootstrap.com/' target='_blank' rel='nofollow'>paid</a>
temanya dibuat dengan Bootstrap framework yang menyediakan tampilan yang dapat di customize dan tentunya stylist
