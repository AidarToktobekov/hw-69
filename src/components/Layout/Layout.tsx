import React from 'react';
import Form from '../Form/Form';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <header className='bg-dark py-3'>
        <div className="container text-center">
            <a href="/" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-3'>TV Shows</a>
        </div>
      </header>

      <Form></Form>

      <main className="container my-5">
        {children}
      </main>
    </>
  );
};

export default Layout;