
import BreadcrumbProduct from  '../components/productdetail/BreadcrumbProduct'
import Header from '../layout/Header';

import PageContent from '../layout/PageContent';
import NavBar from '../components/shoppage/NavBar';
import ShopPageFooter from '../components/shoppage/ShopPageFooter';
import Clients from '../components/home/Clients';






export default function ProductDetail() {
  return (
    <PageContent header={<Header/>} navbar={<NavBar />} breadcrumb={<BreadcrumbProduct />} footer={<ShopPageFooter />}>
      
    <Clients />
    </PageContent>
  );
}
