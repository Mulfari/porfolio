import { Metadata } from 'next';
import { metadata as i18nMetadata } from '../i18n/metadata';

export const metadata: Metadata = {
  title: {
    template: '%s | Salvador Mulfari',
    default: i18nMetadata.de.title,
  },
  description: i18nMetadata.de.description,
};

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 