import Head from "next/head";
import Link from "next/link";
import React from "react";

function Layout({title,children}) {
  
  return (
  <>
  <Head>
    <title>{title?title + ' amazona':'amazona'}</title>
  </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <header>
            <nav className="flex items-center justify-between h-12 shadow-md px-4">
                <Link href='/' legacyBehavior><a className="text-lg font-bold">Amazona</a></Link>
                <div>
                <Link href='/cart' className="p-2">Cart</Link>
                <Link href='/login' className="p-2">Login</Link>
            </div>
            </nav>
           
        </header>
        <main className="container m-auto mt-4 px-4">
            {children}
        </main>
        <footer className="flex justify-center items-center shadow-inner h-10">
          <p>copyright {'\u00a9'} 2023 seemab</p>
        </footer>
    </div>
  </>
  )
}

export default Layout;
