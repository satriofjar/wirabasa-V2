import { Link } from "@inertiajs/react";
import P2MW from '@/../assets/logo-p2mw.jpg';
import WhatsApp from '@/../assets/wa.png';
import Instagram from '@/../assets/instagram.png';
import Tiktok from '@/../assets/tiktok.png';
import Mail from '@/../assets/mail.png';
import Phone from '@/../assets/phone.png';



const Footer = () => {
  return (
            <footer id="footer" className="bg-[#145DA0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tentang Kami */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Tentang Kami</h3>
                        <p className="flex items-center mb-2">
                            <img src={Mail} alt="mail" className="w-5 h-5 mr-2" /> info@wirabasa.com
                        </p>
                        <p className="flex items-center">
                            <img src={Phone} alt="phone" className="w-5 h-5 mr-2" /> +62 8570 2891 223
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://wa.me/085702891223" target="_blank" rel="noreferrer">
                                <img src={WhatsApp} alt="whatsapp" className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/wira.basa/" target="_blank" rel="noreferrer">
                                <img src={Instagram} alt="instagram" className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer">
                                <img src={Tiktok} alt="tiktok" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Produk WiraBasa */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Produk WiraBasa</h3>
                        <ul className="space-y-2 text-white">
                            <li>
                                <Link href="/layanan#jasa-sunting">Jasa Penyuntingan</Link>
                            </li>
                            <li>
                                <Link href="/layanan#kelas-sunting">Kelas Penyuntingan</Link>
                            </li>
                            <li>
                                <Link href="/layanan#jasa-kepewaraan">Jasa Kepewaraan</Link>
                            </li>
                            <li>
                                <Link href="/layanan#kelas-kepewaraan">Kelas Kepewaraan</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Lain-lain */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Lain-lain</h3>
                        <ul className="space-y-2 text-white">
                            <li>
                                <Link href="/reading-test">Tes kecepatan membaca</Link>
                            </li>
                            <li>
                                <Link href="/quiz">Kuis</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-200" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-center items-center text-sm text-white">
                    <p>© wirabasa.com, 2023.</p>
                    <span className="mx-2 hidden md:inline">|</span>
                    <p className="flex items-center mt-2 md:mt-0">
                        Powered by <img src={P2MW} alt="p2mw" className="ml-2 w-20 rounded" />
                    </p>
                </div>
            </footer>
  )
}

export default Footer
