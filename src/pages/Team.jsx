import TeamBreadCrumb from "../components/teampage/TeamBreadCrumb";
import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import ShopPageFooter from '../components/shoppage/ShopPageFooter';
import TeamGallery from '../components/teampage/TeamGallery';
import MeetTeam from "../components/teampage/MeetTeam";
import FreeTrial from "../components/teampage/FreeTrial";
export default function Team({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<ShopPageFooter />}>
        <TeamBreadCrumb />
        <TeamGallery />
        <MeetTeam />
        <FreeTrial />
    </PageContent>
  );
}
