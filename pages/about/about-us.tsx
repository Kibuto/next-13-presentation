import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

const AboutUs: NextPageWithLayout = () => {
  return <p>About US</p>;
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div>About Us Layout</div>
      {page}
    </>
  );
};
