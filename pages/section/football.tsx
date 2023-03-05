import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import Navigation from '../../components/navigation'

export default function page1() {
  return (
    <div><Navigation /> page1</div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      hihi: 'hehehe',
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

