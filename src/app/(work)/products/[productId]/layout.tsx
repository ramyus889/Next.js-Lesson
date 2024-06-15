export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {children}
      <div className="ms-20">Features Products</div>
    </div>
  );
}
