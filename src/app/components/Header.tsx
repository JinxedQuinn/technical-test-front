import { Film } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <main>
      <div className="lg:hidden bg-yellow-200 text-center p-6 text-3xl flex items-center justify-center h-full">
        <p className="flex items-center">
          <Film className="mr-2" size={24} />
          MOVIE NIGHT
        </p>
      </div>
      <div className="hidden lg:flex lg:flex-col lg:w-1/4 lg:bg-yellow-200 lg:text-center lg:p-6 lg:text-3xl lg:items-center lg:justify-center lg:h-screen">
        <p className="flex items-center">
          <Film className="mr-2" size={24} />
          MOVIE NIGHT
        </p>
      </div>
    </main>
  );
};