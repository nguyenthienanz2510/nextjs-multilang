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
        <p>{t("home:welcome")}</p>
        <p>{t("home:introduction")}</p>
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
