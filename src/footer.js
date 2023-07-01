import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='footer-class text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Made with ❤️ by {''}
        <a className='text-dark' href='https://github.com/aditya-2403' rel='noreferrer' target='_blank'>
          Aditya
        </a>
      </div>
    </MDBFooter>
  );
}