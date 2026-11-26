import { LOGO_DATA_URI } from '@/lib/logo-data';

export default function Logo({ size = 28, className = '' }: { size?: number; className?: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={LOGO_DATA_URI} alt="" width={size} height={size} decoding="async" className={className} />;
}