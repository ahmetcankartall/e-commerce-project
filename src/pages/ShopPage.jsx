

import Breadcrumb from '../components/shoppage/Breadcrumb';
import NavBar from '../components/shoppage/NavBar';
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';
import CategoryBlock from '../components/shoppage/CategoryBlock';
import ProductCards from '../components/shoppage/ProductCards';
import Clients from '../components/home/Clients';
import Filter from '../components/shoppage/Filter';





function ShopPage() {
  return (
<PageContent header={<Header />} navbar={<NavBar />} breadcrumb={<Breadcrumb />}>
     <CategoryBlock />
     <Filter />
     <ProductCards />
     <Clients />
    </PageContent>
    

  );
}

export default ShopPage;