import { useEffect, useRef, useState, type FC } from 'react';
// import {useTheme} from "@nextui/use-theme";
import { Avatar, Switch, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Link } from 'react-router-dom';
import { useSidebar } from '../../context/SiderbarContext';

interface Props { }

const AppHeader: FC<Props> = () => {

    const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

    const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

    const handleToggle = () => {
        if (window.innerWidth >= 1024) {
            toggleSidebar();
        } else {
            toggleMobileSidebar();
        }
    };

    const toggleApplicationMenu = () => {
        setApplicationMenuOpen(!isApplicationMenuOpen);
    };

    const inputRef = useRef<HTMLInputElement>(null);
    const { theme, setTheme } = useTheme();

    const darkBg = "#121a2b";

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && (event.key === "k")) {
                event.preventDefault();
                inputRef.current?.focus();
            }

            document.addEventListener("keydown", handleKeyDown);

            return () => {
                document.removeEventListener("keydown", handleKeyDown);
            }
        }
    }, [])
    return (
        <>
            <header className='sticky top-0 flex w-full bg-white border-gray-200 z-9999 dark:border-gray-800 lg:border-b' style={{ backgroundColor: theme === 'dark' ? darkBg : 'white' }}>
                <div className='flex flex-col items-center justify-between lg:flex-row lg:px-6 grow'>
                    <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
                        <button
                            className="items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
                            onClick={handleToggle}
                            aria-label="Toggle Sidebar"
                        >
                            {isMobileOpen ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            )}
                        </button>

                        <Link to="/" className="lg:hidden">
                            <img
                                className="dark:hidden"
                                src="./images/logo/logo.svg"
                                alt="Logo"
                            />
                            <img
                                className="hidden dark:block"
                                src="./images/logo/logo-dark.svg"
                                alt="Logo"
                            />
                        </Link>

                        <button
                            onClick={toggleApplicationMenu}
                            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className='flex flex-row items-center justify-center gap-5'>
                        <Link to="/accounts/topUp" className='flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg'>
                            <span className="text-lg text-gray-500">Balance</span>
                            <span className="font-sans text-[25px] text-gray-900">$0</span>
                            <span className="text-lg text-gray-500">.00</span>
                            <span className="text-lg text-blue-600">›</span>
                        </Link>
                        <Link to="/grades" className="flex items-center gap-2">
                            <span className="text-lg text-gray-500">Account</span>
                            <span className="text-lg text-gray-500">level</span>
                            <span className="font-sans text-2xl">Standard</span>
                            <span className="text-lg text-blue-600">›</span>
                        </Link>
                    </div>

                    <div
                        className={`${isApplicationMenuOpen ? "flex" : "hidden"
                            } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
                    >
                        <div className="flex items-center gap-x-6 2xsm:gap-3">
                            <Switch
                                isSelected={theme === "dark"}
                                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                                thumbIcon={({ isSelected }) =>
                                    isSelected ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#515be6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" /></svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#515be6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun-medium-icon lucide-sun-medium"><circle cx="12" cy="12" r="4" /><path d="M12 3v1" /><path d="M12 20v1" /><path d="M3 12h1" /><path d="M20 12h1" /><path d="m18.364 5.636-.707.707" /><path d="m6.343 17.657-.707.707" /><path d="m5.636 5.636.707.707" /><path d="m17.657 17.657.707.707" /></svg>
                                }
                                size='md'
                            />
                            <Avatar isBordered color="success"
                                size={'md'}
                                icon={
                                    <Image
                                        src="./images/user/owner.jpg"
                                        fallbackSrc="/default-avatar.jpg"
                                        alt="User avatar"
                                        className="object-cover"
                                        width={40}
                                        height={40}
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

};

export default AppHeader;