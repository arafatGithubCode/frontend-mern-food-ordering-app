import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNabLinks";

const MobileNav = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <div className="w-7 h-7">
                <img
                  className="w-full rounded-full object-cover"
                  src={user?.picture}
                  alt={user?.name}
                />
              </div>
              {user?.email}
            </span>
          ) : (
            <span> Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button onClick={async () => loginWithRedirect()}> Log In</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
