import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Pricing",
    "Contact Us",
    
  ];

  return (
   <div className="px-4">
        <Navbar maxWidth={'full'}
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        
        >
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
            
            <p className="font-bold text-inherit text-primary">JuaHub</p>
            </NavbarBrand>
        </NavbarContent>
    
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarBrand>
            
            <p className="font-bold text-inherit text-primary">JuaHub</p>
            </NavbarBrand>
        
                <NavbarItem>
                <Link color="foreground" href="#">
                    Home
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    About Us
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    Services
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    Pricing
                </Link>
                </NavbarItem>

                <NavbarItem>
                <Link color="foreground" href="#">
                    Contact Us
                </Link>
                </NavbarItem>
        
        </NavbarContent>

        {isMenuOpen && <NavbarContent justify="end">
            
            <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
                Get Started
            </Button>
            </NavbarItem>
        </NavbarContent>}

        <NavbarMenu>
            {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                className="w-full text-danger"
                // color={
                //     index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                // }
                href="#"
                size="lg"
                >
                {item}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarMenu>
        </Navbar>
    </div>
  );
}
