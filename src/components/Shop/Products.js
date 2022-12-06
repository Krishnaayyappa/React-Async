import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_products = [
  {id:"p1",
  price:6,
  title:"Book1",
  description:"About Sci-fi fiction"
},
{
  id:"p2",
  price:10,
  title:"Book2",
  description:"about social networking"
}
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{Dummy_products.map(product => 
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
