interface MainLayoutProps {
  chatSlot: React.ReactNode;
  workspaceSlot: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ chatSlot, workspaceSlot }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">
      <div className="w-95 h-full shrink-0 border-r border-white/5">
        {chatSlot}
      </div>
      <div className="flex-1 h-full">
        {workspaceSlot}
      </div>
    </div>
  );
};