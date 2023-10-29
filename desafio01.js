//PRODUCT MANAGER
class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct(productoAgregado) {
        if (!productoAgregado.code || !productoAgregado.title || !productoAgregado.price || !productoAgregado.thumbnail || !productoAgregado.stock || !productoAgregado.description) {
            console.log('Faltan valores obligatorios.')
           return 'Faltan valores obligatorios.'
        }

        const existingProduct = this.products.find((product) => product.code === productoAgregado.code);
        
        if (existingProduct) {
            console.log(`El código "${productoAgregado.code}" ya está en uso. Por favor, elija un código único.`)
            return `El código "${productoAgregado.code}" ya está en uso. Por favor, elija un código único.`
        }

        if (this.products.length === 0) {
            productoAgregado.id = 1
        } else{
            productoAgregado.id = this.products[this.products.length - 1].id + 1
        }

        this.products.push(productoAgregado)
    }

    getProducts () {
        return this.products
    }

    getProductById (id) {

        return this.products.find((product) => product.id === id) || 'Not found'
    }
}
class Product {
    constructor(code, title, description, price, thumbnail, stock) 
    {
        this.code = code,
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.stock = stock
    }
}


//Pruebas
console.log('Se crea ProductManager')
const productManager = new ProductManager()

console.log('Se devuelve el array de productos vacio')
console.log(productManager.getProducts())

console.log('Se agrega el producto abc123')
productManager.addProduct(new Product('abc123', 'producto prueba', 'Este es un producto prueba', 200,  'Sin imagen', 25)); 

console.log('Se muestra el array de productos con el producto abc123')
console.log(productManager.getProducts())

console.log('Se intenta cargar un nuevo producto sin nombre')
productManager.addProduct(new Product('abc124', 'Este es un producto prueba', 200,  'Sin imagen', 25)); 

console.log('Se muestra el array de productos con el producto abc123 (porque no se agregó el nuevo')
console.log(productManager.getProducts())

console.log('Se intenta cargar un nuevo producto con codigo repetido')
productManager.addProduct(new Product('abc123',  'producto prueba',  'Este es un producto prueba', 200,  'Sin imagen', 25)); 

console.log('Se muestra el array de productos con el producto abc123 (porque no se agregó el nuevo con código repetido')
console.log(productManager.getProducts())

console.log('Se agrega el producto abc124 correctamente')
productManager.addProduct(new Product('abc124',  'producto prueba 124',  'Este es un producto prueba', 200,  'Sin imagen', 25)); 

console.log('Se muestra el array de productos con los 2 productos')
console.log(productManager.getProducts())

console.log('Se muestra el producto con id  1')
console.log(productManager.getProductById(1))

console.log('Se muestra el producto con id  25 (error)')
console.log(productManager.getProductById(25))

