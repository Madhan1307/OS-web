import Image from "next/image";


export const Logo = ({ className }: { className?: string }) => {
  return (
   <Image src="/logo.png" alt="Logo" className={className} width={200} height={200} />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image src="/logo.png" alt="Logo" className={className} width={200} height={200} />
);
};
