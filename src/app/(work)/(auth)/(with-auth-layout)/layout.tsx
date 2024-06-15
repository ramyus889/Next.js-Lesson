export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="">Inner Layout</div>
      {children}
    </div>
  );
}
