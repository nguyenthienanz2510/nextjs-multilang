import Link from 'next-translate-routes/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const MyLinks = (props) => {
  const { locales } = useRouter();

  return (
    <>
      <Link href="/">Current locale</Link>
      <br />
      {locales.map((locale) => (
        <div key={locale}>
          <Link
            href={{
              pathname: '/',
              query: { dynamic: props.param, otherQueryParam: 'foo' },
            }}
            locale={locale}
          >
            {locale}
          </Link>
        </div>
      ))}
    </>
  );
};
