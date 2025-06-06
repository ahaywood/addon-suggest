import { BackButton } from "../../components/BackButton";

const AccountPage = () => {
  return (
    <div>
      <BackButton />

      <div className="mb-10">
        <h1 className="page-title">Account</h1>
        <p className="page-description">Something something</p>
      </div>

      <div className="box p-5">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold">Account</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AccountPage };
