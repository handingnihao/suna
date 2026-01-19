// Force dynamic rendering for all admin/utils routes
// This prevents static export errors during build

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

export default function AdminUtilsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
