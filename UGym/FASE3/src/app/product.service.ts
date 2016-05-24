import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from './utils';

export class CategoryProduct {
  constructor(public id:number, public nameC:string, public descriptionC:string, public products:Product []){}
}

export class Product {
    constructor(public id:number, public name:string, public description:string,
                public price:string, public image:string, public category:string){}
}

@Injectable()
export class ProductService{

    private categories = [
      new CategoryProduct(1,'Productos','UGym te ofrece una amplia variedad de productos con los que complementar y mejorar tu entrenamiento diaro por poco dinero.',
        [new Product(1,'Camiseta de entrenamiento','Camiseta fitness ideal para tu entrenamiento diaro. Permite una amplia variedad de movimientos. Transpirable. Tallas s, m, l y xl','9.95€','camisetaF.jpg','Productos'),
        new Product(2,'Proteina en polvo','Complemento de entrenamiento para aumentar masa muscular.','12.75€','mejor-proteina-nitrotech-300x300.jpg','Productos'),]),
      new CategoryProduct(2,'Entrenamientos','Un entrenamiento guiado y adecuado te permitirá lograr los objetivos marcados. Por ello, en UGym ofrecemos una amplia variedad de entrenamientos con los que desarrollar al máximo tu potencial.',
        [new Product(1,'Entrenamiento de definición','Los entrenamientos de definición están orientados a la pérdida de peso a través de ejercicios con un gran número de repeticiones y poco peso. Ofrecemos una tabla de entrenamiento con ejercicios de todos los grupos musculares y descripciones claras y concisas de cada ejercicio.','19.75€','img_rutina_de_ejercicios_con_pesas_40209_300_square.jpg','Entrenamientos'),
        new Product(2,'Entrenamiento de volumen','Un entrenamiento de volumen es lo ideal si quieres coger una gran cantidad de masa muscular. Te ofrecemos una rutina de entrenamiento guiada con la que podrás obtener los resultados deseados en un par de meses.','19.75€','rutina-para-aumento-de-masa-muscular.jpg','Entrenamientos')]),
      new CategoryProduct(3,'Dietas','La dieta mediterránea es una forma muy saludable y equilibrada de cuidarnos día a día. Esta dieta en muy variada ya que combina el consumo de carnes y pescados con las legumbres y hortalizas. Protege de enfermedades cardiovasculares además de reducir los niveles de colesterol. Y por otra, es rica en fibra y antioxidantes que protegen del envejecimiento de las células..',
        [new Product(1,'Dieta Mediterránea','La dieta mediterránea es una forma muy saludable y equilibrada de cuidarnos día a día. Esta dieta en muy variada ya que combina el consumo de carnes y pescados con las legumbres y hortalizas. Protege de enfermedades cardiovasculares además de reducir los niveles de colesterol. Y por otra, es rica en fibra y antioxidantes que protegen del envejecimiento de las células..','10€','Dieta-mediterranea-para-adelgazar.jpg','Dietas'),
        new Product(2,'Dieta de la piña','Se trata de un método de adelgazamiento basado en un único producto, en este caso la piña, cuyos resultados se alcanzan de inmediato, cuya eficacia es reducida. La piña es un producto diurético y como tal nos ayudará a deshincharnos. Por un lado, lo hará de forma rápida, ya que su principal misión es eliminar la retención de líquidos, pero otro lado, tenemos que ser conscientes de que lo hará de forma momentánea.','12€','pina.jpg','Dietas')])
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

    saveProducto(product: Product){
      let oldProduct;
      let listProducts;
      if(product.id){//si se esta modificando un producto
          for(let i=0; i<this.categories.length; i++){
            oldProduct = this.categories[i].products.filter(h => h.id === product.id)[0];
            if((this.categories[i].nameC === oldProduct.category) && (oldProduct.id === product.id)){//si el producto no ha cambiado de categoria
              oldProduct.name = product.name;
              oldProduct.description = product.description;
              oldProduct.price = product.price;
              oldProduct.image = product.image;
              oldProduct.category = product.category;
              break;
            }
            if((this.categories[i].nameC !== oldProduct.category) && (oldProduct.id === product.id)){//si la categoria es distinta:
            //guardamos el nuevo en la categoria correcta y borramos el viejo, buscandolo en las demas categorias
              product.id = this.categories[i].products.length + 1;
              this.categories[i].products.push(product);

              this.removeOnSave(oldProduct);
            }
          }
      } else {//si se esta guardando un nuevo producto
          for(let i=0; i<this.categories.length; i++){
              if(this.categories[i].nameC === product.category){
                product.id = this.categories[i].products.length + 1;
                this.categories[i].products.push(product);
                break;
              }
          }
      }
      return withObserver(product);
    }

    removeBook(product: Product){
      for(let i=0; i<this.categories.length; i++){
        for(let j=0; j<this.categories[i].products.length; i++){
            if((this.categories[i].products[j].id === product.id) && (this.categories[i].products[j].category === product.category)){
              this.categories[i].products.splice(j,1);
              break;
            }
        }
      }
      return withObserver(undefined);
    }

    removeOnSave(product:Product){//son objetos iguales si el nombre o la descripcion son iguales
      for(let i=0; i<this.categories.length; i++){
        for(let j=0; j<this.categories[i].products.length; i++){
            if((this.categories[i].products[j].name === product.name) !== (this.categories[i].products[j].description === product.description)){
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
        return withObserver(undefined);
    }

}
