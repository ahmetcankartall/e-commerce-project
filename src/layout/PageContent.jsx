// layout/PageContent.jsx
import Footer from '../layout/Footer';

export default function PageContent({navbar, header, breadcrumb, children }) {
  return (
    <div>
      {navbar && <div>{navbar}</div>}
      {header && <div>{header}</div>}
      {breadcrumb && <div>{breadcrumb}</div>}
      <div>{children}</div>
      <Footer />
    </div>
  );
}
