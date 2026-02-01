// layout/PageContent.jsx
import Footer from '../layout/Footer';

export default function PageContent({navbar, header, breadcrumb, children,footerClass,footerBottomClass,footerLinkClass}) {
  return (
    <div>
      {navbar && <div>{navbar}</div>}
      {header && <div>{header}</div>}
      {breadcrumb && <div>{breadcrumb}</div>}
      <div>{children}</div>
      <Footer className={footerClass} bottomBarClass={footerBottomClass} footerLinkClass={footerLinkClass} />
    </div>
  );
}
