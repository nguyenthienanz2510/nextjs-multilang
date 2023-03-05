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
          <span key={'locale-' + locale}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a
                onClick={() => {
                  console.log('CLICK');
                  window.location.href=`/${locale}/${asPath}`
                }}
              >
                {locale === 'en'
                  ? 'English'
                  : locale === 'de'
                  ? 'German'
                  : locale === 'vi'
                  ? 'Tieng Viet'
                  : null}
              </a>
            </Link>
          </span>
        );
      })}
    </span>
  );
}
