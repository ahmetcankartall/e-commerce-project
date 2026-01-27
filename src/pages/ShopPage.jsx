

import Breadcrumb from '../components/shoppage/Breadcrumb';
import NavBar from '../components/shoppage/navbar';
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';





function ShopPage() {
  return (
<PageContent header={<Header />} navbar={<NavBar />} breadcrumb={<Breadcrumb />}>
     
    </PageContent>

  );
}

export default ShopPage;