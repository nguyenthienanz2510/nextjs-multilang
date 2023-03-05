import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import { MyLinks } from "../components/MyLink";

export default function About() {
  const { t } = useTranslation("");

  return (
    <>
      <Navigation />
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
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
