import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MyLinks } from "../components/MyLink";
import Navigation from "../components/navigation";

export default function Home(props) {
  const { t } = useTranslation(['common', 'home']);

  return (
    <>
      <Navigation />
      <div className="mt-5">
        <h1>{t("home.Home title")}</h1>
        <p>{t("home.Home description")}</p>
        <p>{t("home.Home description")}</p>
        <p>{t("home.Home description")}</p>
        <p>{t("common:home.Home description")}</p>
        <p>{t("common:about.About description")}</p>
        <p>{t("home:myAge")}</p>
        <p>{t("home:myName")}</p>
        <p>{props.hihi}</p>
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
