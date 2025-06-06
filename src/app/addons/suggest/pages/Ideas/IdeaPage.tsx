import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { link } from "@/app/shared/links";
import { Edit, MessageCircle } from "lucide-react";
import { CommentList } from "../../components/CommentList";
import { CommentForm } from "./components/CommentForm";
import { IdeaDetails } from "./components/IdeaDetails";
import { DeleteIdeaButton } from "./components/DeleteIdeaButton";
import { BackButton } from "../../components/BackButton";

const IdeaPage = () => {
  return (
    <div className="grid grid-cols-[3fr_300px] gap-x-[100px]">
      <BackButton />

      <div>
        <IdeaDetails />

        <div className="pl-[80px]">
          <p className="mb-10">
            I've been seeing a lot of content about crabbing lately. Should I
            make a video explaining the trend and maybe even try it out myself?
            I'd love to hear your thoughts!
          </p>

          <div className="flex gap-x-3 mb-10">
            <Button variant="secondary" asChild>
              <a href={link("/suggest/new")}>
                <Edit />
                Edit
              </a>
            </Button>

            <DeleteIdeaButton />
          </div>

          <Separator className="mb-10" />

          <h2 className="font-bold text-xl flex gap-x-2 mb-6">
            <MessageCircle />
            Comments
          </h2>

          <CommentList />

          <Separator className="mb-10" />

          <CommentForm />
        </div>
      </div>

      {/* stats in the sidebar - admin only */}
      <aside></aside>
    </div>
  );
};

export { IdeaPage };
