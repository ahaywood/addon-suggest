import { link } from "@/app/shared/links";
import { Avatar } from "../../../components/Avatar";

const UserBlock = () => {
  return (
    <div className="flex items-center gap-3 border-border border-1 rounded-md p-3">
      <Avatar />
      <h2 className="text-xl font-bold mb-2">
        <a
          href={link("/suggest/user/:id", { id: "1" })}
          className="hover:text-violet-600"
        >
          Amy Dutton
        </a>
      </h2>
    </div>
  );
};

export { UserBlock };
