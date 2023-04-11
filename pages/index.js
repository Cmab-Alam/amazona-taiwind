import Layout from "@/components/Layout";
import data from "@/utils/data";
import ProductItem from "@/components/ProductItem";



export default function Home() {
  return (
    <Layout title='Home page'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {data.products.map((product)=>
        <ProductItem product= {product} key={product.slug} />
      )}
      </div>
    </Layout>
  )
}





{/* <main className="flex min-h-screen flex-col items-center justify-between p-24">

</main> */}
