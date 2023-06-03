import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div style={{flex: 1}}>
            <Header />
            <main>{children}</main>
        </div>
      <Footer />
    </div>
  );
};

export default Layout;