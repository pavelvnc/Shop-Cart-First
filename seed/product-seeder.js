var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://orig08.deviantart.net/837c/f/2013/089/a/6/starcraft_2___icon_by_blagoicons-d5zttfx.png',
        title: 'Starcraft II. Wing of Liberty',
        description: 'Strategy game',
        price: 10
    }),
    new Product({
        imagePath: 'http://orig09.deviantart.net/3f3c/f/2011/328/4/b/starcraft_2_dock_icon_by_spencergough-d4h7dic.png',
        title: 'Starcraft II. Heart of the Swarm',
        description: 'Strategy game',
        price: 20
    }),
    new Product({
        imagePath: 'http://orig12.deviantart.net/9be9/f/2015/112/2/4/icon_starcraft_ii___legacy_of_the_void_by_alexielios-d8qnhaf.png',
        title: 'Starcraft II. Legacy of the Void',
        description: 'Strategy game',
        price: 40
    }),
    new Product({
        imagePath: 'http://orig12.deviantart.net/9587/f/2016/035/d/c/world_of_warcraft__legion___icon_by_blagoicons-d9qh0ym.png',
        title: 'World of Warcraft: Legion',
        description: 'Mass Online RPG',
        price: 15
    }),
    new Product({
        imagePath: 'http://orig00.deviantart.net/80d5/f/2012/001/f/2/diablo_iii_icon_by_fallenshard-d4kzb6w.png',
        title: 'Diablo III',
        description: 'Role Play Game',
        price: 50
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
