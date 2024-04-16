import './page-layout.scss';

function PageLayout({children}) {

  return (
    <div className="page-layout">
      {children}
    </div>
  );
}

export default PageLayout;
