const Product = require('./model/product');

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingText1: '111111111111111111111111111111111111111111',
        headingText2: '222222222222222222222222222222222222222222',
        headingText3: '333333333333333333333333333333333333333333',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingText1: '111111111111111111111111111111111111111111',
        headingText2: '222222222222222222222222222222222222222222',
        headingText3: '333333333333333333333333333333333333333333',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingText1: '111111111111111111111111111111111111111111',
        headingText2: '222222222222222222222222222222222222222222',
        headingText3: '333333333333333333333333333333333333333333',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: '',
        heading1: 'サンプルテキスト１',
        heading2: 'サンプルテキスト２',
        heading3: 'サンプルテキスト３',
        headingText1: '111111111111111111111111111111111111111111',
        headingText2: '222222222222222222222222222222222222222222',
        headingText3: '333333333333333333333333333333333333333333',
      },
    ]
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product);
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }
}

module.exports = FakeDb;
