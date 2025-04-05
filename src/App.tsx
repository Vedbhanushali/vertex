import { AppSidebar } from "./components/app-sidebar";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="items-center justify-between sticky top-0 flex h-16 shrink-0 gap-2 border-b bg-background px-4">
          <div>
            <span className="text-base font-semibold text-white">
              Analytics
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-white p-2">
              Activity
            </span>
            <span className="text-base font-semibold text-white p-2">
              logout
            </span>
          </div>
        </header>
        <header className="items-center justify-between sticky top-0 flex h-16 shrink-0 gap-2 border-b bg-background px-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-white p-2">
              Overview
            </span>
            <span className="text-base font-semibold text-gray-500 p-2">
              Demographics
            </span>
          </div>
          <div>
            <span className="text-base font-semibold text-white p-2">More</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-muted/50" />
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
