
import BreadcrumbProduct from  '../components/productdetail/BreadcrumbProduct'
import Header from '../layout/Header';

import PageContent from '../layout/PageContent';
import NavBar from '../components/shoppage/NavBar';
import ShopPageFooter from '../components/shoppage/ShopPageFooter';
import Clients from '../components/home/Clients';
import ProductSummary from '../components/productdetail/ProductSummary';
import ProductInfo from '../components/productdetail/ProductInfo';
import BestSellerProductDetail from '../components/productdetail/BestSellerProductDetail';





export default function ProductDetail({onCartOpen}) {

  return (
    <PageContent header={<Header onCartOpen={onCartOpen}/>}  navbar={<NavBar />} breadcrumb={<BreadcrumbProduct />} footer={<ShopPageFooter />}>
      <ProductSummary />
     <ProductInfo />
     <BestSellerProductDetail />
    <Clients />
    </PageContent>
  );
}
