import logo from "../../assets/Logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  return (
    <nav className="w-screen flex justify-center">
      <NavigationMenu className="absolute top-2 border-2 rounded-md">
        <NavigationMenuList>
          <div className="flex items-center text-primary-main pr-4">
            <img className="h-14" src={logo} alt="" />
            <p className="text-sm font-bold">NBA STATS</p>
          </div>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold text-white bg-transparent mr-2">
              Search
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-3 md:w-[500px] md:grid-cols-[.75fr_1fr] h-fit">
                <div className="grid grid-cols-1 gap-1">
                  <div className="option p-2 h-fit hover:bg-neutral-700 cursor-pointer rounded-md flex flex-col justify-center">
                    <div className="flex items-center">
                      <PersonOutlineOutlinedIcon className="p-1" />
                      <p className="optionTitle text-xs">Player Search</p>
                    </div>
                    <p className="optionDesc pl-6 text-[10px]">Find Players</p>
                  </div>
                  <div className="option p-2 h-fit hover:bg-neutral-700 cursor-pointer rounded-md flex flex-col justify-center">
                    <div className="flex items-center">
                      <PersonOutlineOutlinedIcon className="p-1" />
                      <p className="optionTitle text-xs">Player Search</p>
                    </div>
                    <p className="optionDesc pl-6 text-[10px]">Find Players</p>
                  </div>
                </div>
                <li className="">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md  bg-custom-radial p-5 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-sm font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-xs leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold text-white bg-transparent mr-2">
              Search
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px]">asdas</div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold text-white bg-transparent mr-2">
              Search
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px]">asdas</div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
