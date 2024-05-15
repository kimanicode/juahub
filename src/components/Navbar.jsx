import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem,  Button} from "@nextui-org/react";
import { Link } from "react-router-dom"


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick =() =>{
    setIsMenuOpen(false)
  }

  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Services', route: '/services' },
    { name: 'Pricing', route: '/pricing' },
    { name: 'About Us', route: '/about-us' },
    { name: 'Contact Us', route: '/contact-us' }
    
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
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-primary" />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
            
            <Link to='/'><p className="font-bold text-inherit text-primary">JuaHub</p></Link>
            </NavbarBrand>
        </NavbarContent>
    
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <Link to='/'> <p className="font-bold text-inherit text-primary">JuaHub</p>
</Link>
            <NavbarBrand>
            
            </NavbarBrand>
        
                <NavbarItem>
                <Link color="foreground" href="#" to='/'>
                    Home
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#" to='/about-us'>
                    About Us
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link href="#" aria-current="page" to='services'>
                    Services
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#" to='pricing'>
                    Pricing
                </Link>
                </NavbarItem>

                <NavbarItem>
                <Link color="foreground" href="#" to='contact-us'>
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
                
                to={item.route}
                size="lg"
                onClick={handleClick}
                >
                {item.name}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarMenu>
        </Navbar>
    </div>
  );
}
