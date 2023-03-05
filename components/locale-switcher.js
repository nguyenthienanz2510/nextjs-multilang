// import Link from "next/link";
import Link from 'next-translate-routes/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== 'default'
  );

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        console.log(pathname, query, asPath);
        return (
              <a
                href={`/${locale}${asPath}`}
                key={'locale-' + locale}
              >
                {locale === 'en'
                  ? 'English'
                  : locale === 'de'
                  ? 'German'
                  : locale === 'vi'
                  ? 'Tieng Viet'
                  : null}
              </a>
        );
      })}
    </span>
  );
}
