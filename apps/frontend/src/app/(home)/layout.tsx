// Force dynamic rendering to prevent static export errors during build
export const dynamic = 'force-dynamic';

import { HomeLayoutClient } from './layout-client';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HomeLayoutClient>{children}</HomeLayoutClient>;
}
