import Image from "next/image";
import Link from "next/link";
import { FooterButton } from "./footer-button";
import { MenuItem } from '../../types/menu-item'

export const Footer = () => {
    const menu: MenuItem[] = [
        { label: "Camisas", href: "/categories/camisas" },
        { label: "Kits", href: "/categories/kit" },
      ];
    return (
        <footer>
            <div className="bg-white border-t border-gray-200 px-6 py-14">
                <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-6">
                    <Image
                        src={'/assets/ui/mail-send-line.png'}
                        alt=""
                        width={68}
                        height={68}
                    />
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-2xl mb-6 md:mb-2">Fique por dentro das promoções</h3>
                        <p className="text-gray-400">Coloque seu e-mail e seja o primeiro a saber</p>
                    </div>
                    <form method="POST" className="w-full flex-1 flex flex-col gap-4 md:flex-row">
                        <input
                            type="text"
                            className="flex-1 border border-gray-200 rounded-sm px-6 py-5 outline-0"
                            placeholder="Qual seu e-mail?"
                        />
                        <input
                            type="submit"
                            value="Enviar"
                            className="w-full md:w-50 px-6 py-5 bg-blue-600 text-white border-0 rounded-sm"
                        />
                    </form>
                </div>
            </div>
            <div className="bg-black text-white">
                <div className="w-full max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-16 md:py-10 border-b border-gray-700">
                        <Link href="/">
                            <Image
                                src={'/assets/ui/logo-white.png'}
                                alt="B7Store"
                                width={143}
                                height={48}
                            />
                        </Link>
                        <ul className="flex flex-col md:flex-row gap-8 items-center">
                            {menu.map((item, index) => (
                                <li key={index}><Link href={item.href}>{item.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 py-16 md:py-10 border-b border-gray-700">
                        <div className="flex-1">
                            <h4 className="mb-6 text-center md:text-left">Precisa de ajuda?</h4>
                            <div className="flex flex-col md:flex-row gap-6">
                                <FooterButton
                                    href="mailto:micaelabud21@gmail.com"
                                    icon="/assets/ui/mail-line.png"
                                    label="micaelabud21@gmail.com"
                                />
                                <FooterButton
                                    href="https://api.whatsapp.com/send?phone=5561994060294&text=ol%C3%A1%2C%20queria%20entrar%20em%20contato%20para%20falar%20sobre%20meu%20projeto"
                                    icon="/assets/ui/phone-line.png"
                                    label="(61) 9406-0294"
                                />
                            </div>
                        </div>
                        <div className="">
                            <h4 className="mb-6 text-center md:text-left">Acompanhe nas redes sociais</h4>
                            <div className="flex flex-row justify-between gap-6">
                                <FooterButton
                                    href="https://instagram.com/micas.tsx"
                                    icon="/assets/ui/instagram-line.png"
                                />
                                <FooterButton
                                    href="https://linkedin/in/micael-abud"
                                    icon="/assets/ui/linkedin-line.png"
                                />
                                <FooterButton
                                    href="https://github.com/micas-tsx"
                                    icon="/assets/ui/github-icon-2.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-14 justify-end items-center py-16 md:py-10">
                        <div className="flex justify-center">
                            <FooterButton
                                href="/"
                                icon="/assets/ui/arrow-up-line.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}