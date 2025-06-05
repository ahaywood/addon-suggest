import { LayoutProps } from "rwsdk/router";

const AddOnLayout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-[250px_1fr] size-screen fixed inset-0">
      <aside className="border-r-1 border-zinc-200">
        <ul>
          <li>
            <a href="/suggest">Suggest</a>
          </li>
        </ul>
      </aside>

      <main className="relative overflow-y-auto">{children}</main>
    </div>
  );
};

export { AddOnLayout };
