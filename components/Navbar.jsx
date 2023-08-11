import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Image
          src="/album.png"
          width="50"
          height="50"
          alt="icon of this photo album app"
        />
        VGdev Photos
        <div className="ml-auto flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
