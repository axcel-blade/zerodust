'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className='bg-red-950'>
        {/*Destop menu*/}
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
            {/* Logo */}
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ZeroDust</span>
                <img
                alt=""
                src="#"
                className="h-8 w-auto"
                />
            </a>
            </div>
            <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-500">
                Home
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-500">
                About
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-500">
                Services
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-500">
                Contact
            </a>
            </PopoverGroup>
        </nav>

        {/* Mobile menu, show/hide based on menu state. */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">ZeroDust</span>
                    <img
                        alt=""
                        src="#"
                        className="h-8 w-auto"
                    />
                    </a>
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            Home
                            </a>
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            About
                            </a>
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            Services
                            </a>
                            <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                            Contact
                            </a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
        </header>
    )
}
