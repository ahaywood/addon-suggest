"use client";

import { BackButton } from "../../components/BackButton";
import { Button } from "@/app/components/ui/button";
import { Camera } from "lucide-react";
import { Avatar } from "../../components/Avatar";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";

const AccountPage = () => {
  return (
    <div>
      <BackButton />

      <div className="mb-10">
        <h1 className="page-title">Account</h1>
        <p className="page-description">
          Manage your account information and profile details.
        </p>
      </div>

      <div className="box p-5">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col gap-7">
            <h2 className="text-sm font-bold mb-0 uppercase font-mono tracking-wider">
              Profile Information
            </h2>

            {/* avatar */}
            <div className="flex gap-5 items-center">
              <div>
                <Avatar className="size-20" />
              </div>
              <div>
                <Button variant="secondary" className="mb-2">
                  <Camera />
                  Change Avatar
                </Button>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG or GIF. Max size 2MB.
                </p>
              </div>
            </div>

            {/* name */}
            <div className="flex gap-10 w-full">
              <div className="field flex-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="First Name" />
              </div>
              <div className="field flex-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Last Name" />
              </div>
            </div>

            {/* username */}
            <div className="field">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
              <p className="text-sm text-muted-foreground">
                This is your unique identifier and will be visible to other
                users.
              </p>
            </div>

            {/* email */}
            <div className="field">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="Email Address" />
            </div>

            {/* password */}
            <div className="flex gap-10 w-full">
              <div className="field flex-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="New Password" />
              </div>
              <div className="field flex-1">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" placeholder="Confirm Password" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button>Save</Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AccountPage };
