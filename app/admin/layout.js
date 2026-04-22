import AdminProviders from "./providers";


export default function AdminLayout({ children }) {
  return (
    <div className="admin-root">
      <AdminProviders>
        {children}
      </AdminProviders>
    </div>
  );
}