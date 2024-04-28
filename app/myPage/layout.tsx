export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <>
      <h2 className="mt-3 ms-3">縄文株式会社</h2>
      <div className="">
        {children}
      </div>
    </>

  );
}