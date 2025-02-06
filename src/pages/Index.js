import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations16 from '../components/navigations/IndexSectionNavigations16';
import IndexSectionHeadersDark17 from '../components/headers-dark/IndexSectionHeadersDark17';
import IndexSectionLogoCloudsDark2 from '../components/logo-clouds-dark/IndexSectionLogoCloudsDark2';
import IndexSectionFeaturesDark5 from '../components/features-dark/IndexSectionFeaturesDark5';
import IndexSectionFeaturesDark15 from '../components/features-dark/IndexSectionFeaturesDark15';
import IndexSectionStatsDark14 from '../components/stats-dark/IndexSectionStatsDark14';
import IndexSectionHowItWorksDark7 from '../components/how-it-works-dark/IndexSectionHowItWorksDark7';
import IndexSectionFeaturesDark8 from '../components/features-dark/IndexSectionFeaturesDark8';
import IndexSectionPricingDark9 from '../components/pricing-dark/IndexSectionPricingDark9';
import IndexSectionTestimonialsDark10 from '../components/testimonials-dark/IndexSectionTestimonialsDark10';
import IndexSectionCtaDark11 from '../components/cta-dark/IndexSectionCtaDark11';
import IndexSectionFaqDark12 from '../components/faq-dark/IndexSectionFaqDark12';
import IndexSectionFooterDark13 from '../components/footer-dark/IndexSectionFooterDark13';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations16 />
      <IndexSectionHeadersDark17 />
      <IndexSectionLogoCloudsDark2 />
      <IndexSectionFeaturesDark5 />
      <IndexSectionFeaturesDark15 />
      <IndexSectionStatsDark14 />
      <IndexSectionHowItWorksDark7 />
      <IndexSectionFeaturesDark8 />
      <IndexSectionPricingDark9 />
      <IndexSectionTestimonialsDark10 />
      <IndexSectionCtaDark11 />
      <IndexSectionFaqDark12 />
      <IndexSectionFooterDark13 />
    </React.Fragment>
  );
}

