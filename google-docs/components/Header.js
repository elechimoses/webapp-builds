import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
            color="grey"
            buttonType="outline"
            rounded={true}
            ripple="dark"
            className="hiden md:inline-flex h-20 w-20 border-0" 
            >
                <Icon name="menu" size="3xl" />
            </Button>
            <Icon name="description" size="4xl" color="blue" />
            <h1 className=" ml-2 text-gray-700" text-2xl>
                Docs
            </h1>
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="darkgray" />
                <input type="text" className="flex-grow px-5 text-base bg-transparent outline-none" placeholder="Search"/>
            </div>

            <Button color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className=" ml-5 md:ml-20 h-20 w-20 border-0" >
                <Icon name="apps" size="3xl" color="gray" />
            </Button>

            <img
            loading="lazy"
            className="cursor-pointer h-12 w-12 rounded-full ml-2"
            src="https://avatars.githubusercontent.com/u/36916047?v=4"
            />
        </header>
    ) 
}

export default Header

