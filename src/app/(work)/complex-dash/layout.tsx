export default function About({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div className="inline-block">
      <div className="">{children}</div>
      <div className="ms-20 mt-20  flex gap-4">
        <div className="flex flex-col gap-2">
          <div className="rounded-xl border border-slate-500 px-6 py-3  text-center">
            {users}
          </div>
          <div className="rounded-xl border border-slate-500 px-6 py-3 text-center">
            {revenue}
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl border border-slate-500 px-10 py-5 text-center">
          {notifications}
        </div>
      </div>
    </div>
  ) : (
    <div className="">{login}</div>
  );
}
