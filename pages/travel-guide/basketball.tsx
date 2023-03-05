import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import { MyLinks } from '../../components/MyLink';
import Navigation from '../../components/navigation'

export default function Basketball() {
  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <Navigation />
      <h2>Basketball</h2>
      <div className="mt-5">
        <p>{t("home:welcome")}</p>
        <p>{t("home:introduction")}</p>
        <MyLinks />
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      hihi: 'hehehe',
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}