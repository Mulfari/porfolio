import { Metadata } from 'next';
import { metadata as i18nMetadata } from '../i18n/metadata';

export const metadata: Metadata = {
  title: {
    template: '%s | Salvador Mulfari',
    default: i18nMetadata.en.title,
  },
  description: i18nMetadata.en.description,
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 