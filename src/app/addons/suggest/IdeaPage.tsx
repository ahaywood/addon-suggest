"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { link } from "@/app/shared/links";
import {
  ArrowLeft,
  ChevronUp,
  Edit,
  MessageCircle,
  Plus,
  Trash,
} from "lucide-react";
import { RequestInfo } from "rwsdk/worker";
import { CommentList } from "./components/CommentList";
import { CommentForm } from "./components/CommentForm";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { AlertDialogTrigger } from "@/app/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { AlertDialog } from "@/app/components/ui/alert-dialog";

const IdeaPage = ({ params }: RequestInfo) => {
  console.log(params);
  return (
    <>
      <Button variant="ghost" className="absolute top-3 left-3" asChild>
        <a href={link("/suggest/dashboard")}>
          <ArrowLeft />
          Back
        </a>
      </Button>

      <header className="flex gap-x-5 items-center !mb-4">
        <div>
          <Button
            variant="ghost"
            className="flex flex-col min-h-[100px] gap-1 hover:bg-violet-50 cursor-pointer"
          >
            <div className="-mb-2">
              <ChevronUp size={30} className="size-8" />
            </div>
            <div className="font-bold text-xl">4</div>
            <div>Vote</div>
          </Button>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h1 className="page-title mb-3">IndividualPage</h1>
            <div className="flex gap-x-3">
              <Button variant="default" asChild>
                <a href={link("/suggest/new")}>
                  <Plus />
                  New Idea
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <div className="flex items-center gap-2">
                <Badge>YouTube Video</Badge>
                <Badge>YouTube Video</Badge>
                <Badge>YouTube Video</Badge>
              </div>
              <p className="page-description">Posted 7 hours ago</p>
            </div>
          </div>
        </div>
      </header>

      <div className="pl-[80px]">
        <p className="mb-10">
          I've been seeing a lot of content about crabbing lately. Should I make
          a video explaining the trend and maybe even try it out myself? I'd
          love to hear your thoughts!
        </p>

        <div className="flex gap-x-3 mb-10">
          <Button variant="secondary">
            <Edit />
            Edit
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost">
                <Trash />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-destructive">
                  Are you absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
    </>
  );
};

export { IdeaPage };
