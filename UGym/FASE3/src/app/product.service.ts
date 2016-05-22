import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class CategoryProduct {
  constructor(public id:number, public nameC:string, public descriptionC:string, public products:Product []){}
}

export class Product {
    constructor(public id:number, public name:string, public description:string,
                public price:string, public image:string, public tProducto:boolean, public tEntrenamiento:boolean,
                public tDieta:boolean){}
}

@Injectable()
export class ProductService{

    /*private productos = [
        new Product(1,'Camiseta de entrenamiento','Camiseta fitness ideal para tu entrenamiento diaro. Permite una amplia variedad de movimientos. Transpirable. Tallas s, m, l y xl','9.95€','camisetaF.jpg',true,false,false),
        new Product(2,'Proteina en polvo','Complemento de entrenamiento para aumentar masa muscular.','12.75€','mejor-proteina-nitrotech-300x300.jpg',true,false,false),
        new Product(3,'Entrenamiento de definición','Los entrenamientos de definición están orientados a la pérdida de peso a través de ejercicios con un gran número de repeticiones y poco peso. Ofrecemos una tabla de entrenamiento con ejercicios de todos los grupos musculares y descripciones claras y concisas de cada ejercicio.','19.75€','img_rutina_de_ejercicios_con_pesas_40209_300_square.jpg',false,true,false),
        new Product(4,'Entrenamiento de volumen','Un entrenamiento de volumen es lo ideal si quieres coger una gran cantidad de masa muscular. Te ofrecemos una rutina de entrenamiento guiada con la que podrás obtener los resultados deseados en un par de meses.','19.75€','rutina-para-aumento-de-masa-muscular.jpg',false,true,false),
        new Product(5,'Dieta Mediterránea','La dieta mediterránea es una forma muy saludable y equilibrada de cuidarnos día a día. Esta dieta en muy variada ya que combina el consumo de carnes y pescados con las legumbres y hortalizas. Protege de enfermedades cardiovasculares además de reducir los niveles de colesterol. Y por otra, es rica en fibra y antioxidantes que protegen del envejecimiento de las células..','10€','Dieta-mediterranea-para-adelgazar.jpg',false,false,true),
        new Product(6,'Dieta de la piña','Se trata de un método de adelgazamiento basado en un único producto, en este caso la piña, cuyos resultados se alcanzan de inmediato, cuya eficacia es reducida. La piña es un producto diurético y como tal nos ayudará a deshincharnos. Por un lado, lo hará de forma rápida, ya que su principal misión es eliminar la retención de líquidos, pero otro lado, tenemos que ser conscientes de que lo hará de forma momentánea.','12€','pina.jpg',false,false,true)
    ];*/

    private categories = [
      new CategoryProduct(1,'Productos','UGym te ofrece una amplia variedad de productos con los que complementar y mejorar tu entrenamiento diaro por poco dinero.',
        [new Product(1,'Camiseta de entrenamiento','Camiseta fitness ideal para tu entrenamiento diaro. Permite una amplia variedad de movimientos. Transpirable. Tallas s, m, l y xl','9.95€','camisetaF.jpg',true,false,false),
        new Product(2,'Proteina en polvo','Complemento de entrenamiento para aumentar masa muscular.','12.75€','mejor-proteina-nitrotech-300x300.jpg',true,false,false),]),
      new CategoryProduct(2,'Entrenamientos','Un entrenamiento guiado y adecuado te permitirá lograr los objetivos marcados. Por ello, en UGym ofrecemos una amplia variedad de entrenamientos con los que desarrollar al máximo tu potencial.',
        [new Product(1,'Entrenamiento de definición','Los entrenamientos de definición están orientados a la pérdida de peso a través de ejercicios con un gran número de repeticiones y poco peso. Ofrecemos una tabla de entrenamiento con ejercicios de todos los grupos musculares y descripciones claras y concisas de cada ejercicio.','19.75€','img_rutina_de_ejercicios_con_pesas_40209_300_square.jpg',false,true,false),
        new Product(2,'Entrenamiento de volumen','Un entrenamiento de volumen es lo ideal si quieres coger una gran cantidad de masa muscular. Te ofrecemos una rutina de entrenamiento guiada con la que podrás obtener los resultados deseados en un par de meses.','19.75€','rutina-para-aumento-de-masa-muscular.jpg',false,true,false)]),
      new CategoryProduct(3,'Dietas','La dieta mediterránea es una forma muy saludable y equilibrada de cuidarnos día a día. Esta dieta en muy variada ya que combina el consumo de carnes y pescados con las legumbres y hortalizas. Protege de enfermedades cardiovasculares además de reducir los niveles de colesterol. Y por otra, es rica en fibra y antioxidantes que protegen del envejecimiento de las células..',
        [new Product(1,'Dieta Mediterránea','La dieta mediterránea es una forma muy saludable y equilibrada de cuidarnos día a día. Esta dieta en muy variada ya que combina el consumo de carnes y pescados con las legumbres y hortalizas. Protege de enfermedades cardiovasculares además de reducir los niveles de colesterol. Y por otra, es rica en fibra y antioxidantes que protegen del envejecimiento de las células..','10€','Dieta-mediterranea-para-adelgazar.jpg',false,false,true),
        new Product(2,'Dieta de la piña','Se trata de un método de adelgazamiento basado en un único producto, en este caso la piña, cuyos resultados se alcanzan de inmediato, cuya eficacia es reducida. La piña es un producto diurético y como tal nos ayudará a deshincharnos. Por un lado, lo hará de forma rápida, ya que su principal misión es eliminar la retención de líquidos, pero otro lado, tenemos que ser conscientes de que lo hará de forma momentánea.','12€','pina.jpg',false,false,true)])
    ];

    getCategories(){
      return withObserver(this.categories);
    }

    getProductosTipo(tipo: CategoryProduct){
        let listProducts;
        for(let i=0; i<this.categories.length; i++){
          if(this.categories[i].id === tipo.id){
            return withObserver(this.categories[i].products);
          }
        }
    }

    /*getProductos(){
      let products: Product[];
      for (let i=0; i<this.categories.length; i++){
        for (let j=0; j<this.categories[i].products.length; j++){
          products.push(this.categories[i].products[j]);
        }
      }
      return withObserver(products);
    }

    getProductosTproducto(){
      let tProductos;
      for(let i=0; i<this.categories.length; i++){
        if(this.categories[i].nameC === 'Productos'){
          tProductos.push(this.categories[i].products);
          break;
        }
      }
      return withObserver(tProductos);
    }

    getProductosTentrenamiento(){
      let tEntrenamientos;
      for(let i=0; i<this.categories.length; i++){
        if(this.categories[i].nameC === 'Entrenamientos'){
          tEntrenamientos.push(this.categories[i].products);
          break;
        }
      }
      return withObserver(tEntrenamientos);
    }

    getProductosTdieta(){
      let tDietas;
      for(let i=0; i<this.categories.length; i++){
        if(this.categories[i].nameC === 'Dietas'){
          tDietas.push(this.categories[i].products);
          break;
        }
      }
      return withObserver(tDietas);
    }

    saveProducto(product: Product){//controlar el cambio de categoria y cambiar para hacer busqueda generica
      let oldProduct;
      let listProducts;
      if(product.id){
        if(product.tProducto){
          listProducts = this.getProductosTproducto();
          oldProduct = listProducts.filter(h => h.id === listProducts.id)[0];
          oldProduct.name = product.name;
          oldProduct.description = product.description;
          oldProduct.price = product.price;
          oldProduct.image = product.image;
          oldProduct.tProducto = product.tProducto;
          oldProduct.tDieta = product.tDieta;
          oldProduct.tEntrenamiento = product.tEntrenamiento;
        }
        else if(product.tEntrenamiento){
          listProducts = this.getProductosTentrenamiento;
          oldProduct = listProducts.filter(h => h.id === listProducts.id)[0];
          oldProduct.name = product.name;
          oldProduct.description = product.description;
          oldProduct.price = product.price;
          oldProduct.image = product.image;
          oldProduct.tProducto = product.tProducto;
          oldProduct.tDieta = product.tDieta;
          oldProduct.tEntrenamiento = product.tEntrenamiento;
        }
        else{
          listProducts = this.getProductosTdieta();
          oldProduct = listProducts.filter(h => h.id === listProducts.id)[0];
          oldProduct.name = product.name;
          oldProduct.description = product.description;
          oldProduct.price = product.price;
          oldProduct.image = product.image;
          oldProduct.tProducto = product.tProducto;
          oldProduct.tDieta = product.tDieta;
          oldProduct.tEntrenamiento = product.tEntrenamiento;
        }
      } else {
        if(product.tProducto){
          listProducts = this.getProductosTproducto();
          product.id = listProducts.length+1;
          listProducts.push(product);
        }
        else if(product.tEntrenamiento){
          listProducts = this.getProductosTentrenamiento();
          product.id = listProducts.length+1;
          listProducts.push(product);
        }
        else {
          listProducts = this.getProductosTdieta();
          product.id = listProducts.length+1;
          listProducts.push(product);
        }
      }
      return withObserver(product);
    }

    removeBook(product: Product){
      for(let i=0; i<this.categories.length; i++){
        for(let j=0; j<this.categories[i].products.length; i++){
            if((this.categories[i].products[j].id === product.id) && (this.categories[i].products[j].tProducto === product.tProducto)){
              this.categories[i].products.splice(j,1);
              break;
            }
            else if((this.categories[i].products[j].id === product.id) && (this.categories[i].products[j].tEntrenamiento === product.tEntrenamiento)){
              this.categories[i].products.splice(j,1);
              break;
            }
            else if((this.categories[i].products[j].id === product.id) && (this.categories[i].products[j].tDieta === product.tDieta)){
              this.categories[i].products.splice(j,1);
              break;
            }
        }
      }
      return withObserver(undefined);
    }

    removeCategory(oCategory: CategoryProduct){
        for(let i=0; i<this.categories.length; i++){
            if(oCategory.id === this.categories[i].id){
              this.categories.splice(i,1);
              break;
            }
        }
    }*/

}
