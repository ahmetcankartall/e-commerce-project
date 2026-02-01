

export default function PageContent({navbar, header, breadcrumb, children,footer}) {
  return (
    <div>
      {navbar && <div>{navbar}</div>}
      {header && <div>{header}</div>}
      {breadcrumb && <div>{breadcrumb}</div>}
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  );
}
