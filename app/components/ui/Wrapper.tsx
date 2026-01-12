import Image from 'next/image';

export default function Wrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen relative">
            <div className="fixed inset-0 opacity-40 -z-10">
                <Image
                    src="/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}