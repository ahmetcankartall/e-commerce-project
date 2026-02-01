
import BreadcrumbProduct from  '../components/productdetail/BreadcrumbProduct'
import Header from '../layout/Header';

import PageContent from '../layout/PageContent';
import NavBar from '../components/shoppage/NavBar';







export default function ProductDetail() {
  return (
    <PageContent header={<Header/>} navbar={<NavBar />} breadcrumb={<BreadcrumbProduct />} footerClass="bg-white text-black" footerBottomClass="bg-[#fafafa]" footerLinkClass="">
      
    
    </PageContent>
  );
}
