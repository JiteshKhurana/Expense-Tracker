import DashboardHeader from "./_components/DashboardHeader";
import Sidenav from "./_components/Sidenav";

function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block shadow-sm border">
        <Sidenav />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashBoardLayout;
