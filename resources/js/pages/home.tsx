import React, { useEffect, useState } from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Certificate from "@/../assets/sertifikat.png";
import OnlineClass from "@/../assets/online-class.png";
import Berbahasa from "@/../assets/berbahasa.jpg";
import Pendampingan from "@/../assets/pendampingan.jpg";
import MainImage from "@/../assets/mainImage.png";
import Writing from "@/../assets/writing.jpg";
import Mc from "@/../assets/mc.jpg";
import ReadingBg from "@/../assets/reading-bg.png";
import Quote from "@/../assets/icon-quote.png";
import Wave from "@/../assets/wave.svg"
import Profile from "@/../assets/user.png";

const Home = () => {
    const [showAlert, setShowAlert] = useState(true);
    const benefits = [
        {
            img: Certificate,
            title: "Pelatihan Bersertifikat",
            desc: "Dapatkan sertifikat dari kelas dan pelatihan yang Kanca Rasa ikuti!",
        },
        {
            img: OnlineClass,
            title: "Pelatihan Online",
            desc: "Ikuti kelas secara fleksibel, di mana saja dan kapan saja!",
        },
        {
            img: Berbahasa,
            title: "Terampil Berbahasa",
            desc: "Raih kreativitas berbahasa tulis maupun lisan melalui WiraBasa!",
        },
        {
            img: Pendampingan,
            title: "Pendampingan Eksklusif",
            desc: "Dapatkan kesempatan bimbingan secara eksklusif untuk meningkatkan kompetensi berbahasa!",
        },
    ]

    const classes = [
        {
            id: "1",
            title: "Kelas pewara",
            schedule: "08.00 - 23 July 2025",
            thumbnail: "https://placehold.co/600x400",
        },
        {
            id: "2",
            title: "Kelas Menulis",
            schedule: "08.00 - 23 July 2025",
            thumbnail: "https://placehold.co/600x400",
        },
        {
            id: "3",
            title: "Kelas Logika",
            schedule: "08.00 - 23 October 2025",
            thumbnail: "https://placehold.co/600x400",
        },
    ]


    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <React.Fragment>

            <Head title="Beranda" />

            {showAlert && (
                <div className="bg-red-200">
                    <div className="max-w-7xl flex mx-auto px-4 sm:px-6 lg:px-8">
                        <span className="mx-auto py-5 text-black">
                            🚧 <strong>This website is a showcase version</strong> — some features may not work as intended.
                        </span>
                            <button type="button" onClick={() => setShowAlert(false)} className="text-black my-auto border-1 rounded-sm px-[5px] hover:border-2">X</button>
                    </div>
                </div>
            )}

            <Navbar />

            {/* Hero Section */}
            <section className="mb-12 pt-4 bg-gradient-to-b from-[rgba(0,123,255,0.3)] to-white" id="main">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Hero Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl text-black leading-snug">
                                Asah kompetensi berbahasa dan sempurnakan tulisanmu.
                            </h2>
                            <p className="text-gray-600 text-xl">
                                Butuh jasa pewara (MC)? Jasa penyuntingan naskah? Atau ingin
                                belajar menjadi pewara, penyunting, dan penulis karya tulis
                                ilmiah kompetitif? WiraBasa jawabannya.
                            </p>
                            <Link
                                href="/layanan"
                                className="inline-block border-1 border-[#2e8bc0] border-solid text-[#2e8bc0] text-xl hover:bg-[#2e8bc0] hover:text-white px-6 py-2 rounded-md transition duration-200"
                            >
                                Pesan Sekarang!
                            </Link>
                        </div>

                        {/* Hero Image */}
                        <div className="text-center">
                            <img
                                src={MainImage}
                                alt="Main Hero"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Layanan Section */}
            <section id="main-content">
                <div className="pb-16 pt-15 bg-[#ceefff4d]" id="layanan">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl text-[#3b566e] md:text-3xl font-bold">
                                <span className="text-[#145DA0]">Layanan </span>
                                <span className="border-b-4 pb-2 border-yellow-500">yang Tersedia</span>
                            </h2>
                        </div>

                        {/* Layanan 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 shadow-lg p-6 lg:px-15 py-8 rounded-2xl mb-12">
                            <div className="">
                                <img
                                    src={Writing}
                                    alt="Penyuntingan"
                                    className="rounded-lg w-full lg:w-100 object-contain"
                                />

                            </div>
                            <div className="content-center ">
                                <h3 className="text-2xl text-gray-700 font-semibold mt-4">Penyuntingan</h3>
                                <div className="w-12 h-1 bg-yellow-400 my-3 rounded-full"></div>
                                <p className="text-gray-600 text-xl leading-relaxed">
                                    Layanan penyuntingan untuk tulisan Sobat Rasa yang masih
                                    mengandung ketidakefektifan kalimat, ketidakpaduan paragraf,
                                    dan kekurangtepatan penggunaan ejaan.
                                </p>
                                <button
                                    onClick={() =>
                                        alert(
                                            "Site is still under construction so here is the email: admin@wirabasa.com"
                                        )
                                    }
                                    className="mt-4 px-5 py-2 border border-gray-700 text-gray-700 rounded-sm hover:bg-gray-700 hover:text-white transition"
                                >
                                    PELAJARI LEBIH LANJUT
                                </button>
                            </div>
                        </div>

                        {/* Layanan 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 shadow-lg p-6 lg:px-15 py-8 rounded-2xl mb-12">
                            <div className="order-2 md:order-1 content-center">
                                <h3 className="text-2xl text-gray-700 font-semibold mt-4">Kepewaraan</h3>
                                <div className="w-12 h-1 bg-yellow-400 my-3 rounded-full"></div>
                                <p className="text-gray-600 text-xl leading-relaxed">
                                    WiraBasa juga menyediakan layanan kepewaraan, seperti MC
                                    (master of ceremony), moderator, pemantik diskusi, dan layanan
                                    lainnya.
                                </p>
                                <button
                                    onClick={() =>
                                        alert(
                                            "Site is still under construction so here is the email: admin@wirabasa.com"
                                        )
                                    }
                                    className="mt-4 px-5 py-2 border border-gray-700 text-gray-700 rounded-sm hover:bg-gray-700 hover:text-white transition"
                                >
                                    PELAJARI LEBIH LANJUT
                                </button>
                            </div>
                            <div className="order-1 md:order-2 item-center mx-auto">
                                <img
                                    src={Mc}
                                    alt="Kepewaraan"
                                    className="rounded-lg w-full lg:w-100 object-contain "
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Benefit Section */}
            <div className="mb-16 mt-15 bg-white" id="benefit">
                <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <h2 className="text-3xl text-gray-700 text-center max-w-3xl font-bold mx-auto">
                            Keuntungan yang akan Anda dapatkan jika menggunakan layanan WiraBasa
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Benefit Item */}
                        {benefits.map((item, i) => (
                            <div
                                key={i}
                                className="grid grid-cols-1 md:grid-cols-2 md:flex gap-4 bg-gray-50 p-5 rounded-xl shadow hover:shadow-md transition"
                            >
                                <div className="w-40 h-30 mx-auto flex-shrink-0">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="px-6">
                                    <h5 className="font-semibold text-[#145DA0] text-xl">{item.title}</h5>
                                    <p className="text-gray-600 text-lg">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimoni */}
            <section id="testimoni" className="py-16 bg-[rgba(0,123,255,0.3)] w-full overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Kata mereka yang pernah menggunakan WiraBasa
                    </h2>

                    <div className="mt-10">
                        <Slider {...settings}>

                            {/* Card 1 */}
                            <div className="bg-white relative shadow-md rounded-sm my-10 h-100 px-6 pt-3 pb-8 mx-auto max-w-[320px]">
                                <div className="flex justify-end my-0 mb-5">

                                    <img src={Quote} alt="" className="" />
                                </div>
                                <p className="text-gray-600 text-left mb-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry&apos;s standard dummy text.
                                </p>
                                <div className="flex absolute bottom-5">
                                    <img src={Profile} alt="" className="rounded-full w-12 h-12" />
                                    <div className="ml-3 text-left">
                                        <h5 className="font-semibold text-gray-800">Summer Violet</h5>
                                        <p className="text-sm text-gray-500">Marketing Juxt Corporate</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 1 */}
                            <div className="bg-white relative shadow-md rounded-sm my-10 h-100 px-6 pt-3 pb-8 mx-auto max-w-[320px]">
                                <div className="flex justify-end my-0 mb-5">

                                    <img src={Quote} alt="" className="" />
                                </div>
                                <p className="text-gray-600 text-left mb-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry&apos;s standard dummy text.
                                </p>
                                <div className="flex absolute bottom-5">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                                    <div className="ml-3 text-left">
                                        <h5 className="font-semibold text-gray-800">Summer Violet</h5>
                                        <p className="text-sm text-gray-500">Marketing Juxt Corporate</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 1 */}
                            <div className="bg-white relative shadow-md rounded-sm my-10 h-100 px-6 pt-3 pb-8 mx-auto max-w-[320px]">
                                <div className="flex justify-end my-0 mb-5">

                                    <img src={Quote} alt="" className="" />
                                </div>
                                <p className="text-gray-600 text-left mb-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry&apos;s standard dummy text.
                                </p>
                                <div className="flex absolute bottom-5">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                                    <div className="ml-3 text-left">
                                        <h5 className="font-semibold text-gray-800">Summer Violet</h5>
                                        <p className="text-sm text-gray-500">Marketing Juxt Corporate</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 1 */}
                            <div className="bg-white relative shadow-md rounded-sm my-10 h-100 px-6 pt-3 pb-8 mx-auto max-w-[320px]">
                                <div className="flex justify-end my-0 mb-5">

                                    <img src={Quote} alt="" className="" />
                                </div>
                                <p className="text-gray-600 text-left mb-6">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry&apos;s standard dummy text.
                                </p>
                                <div className="flex absolute bottom-5">
                                    <div className="w-12 h-12 bg-gray-300 rounded-full" />
                                    <div className="ml-3 text-left">
                                        <h5 className="font-semibold text-gray-800">Summer Violet</h5>
                                        <p className="text-sm text-gray-500">Marketing Juxt Corporate</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Upcomming Classes */}
            <section id="Upcomming-classes" className="">
                <div className="py-5">
                    <div className="text-center my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                            Kelas yang akan datang
                        </h2>
                    </div>

                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {classes.map((cls, i) =>
                                <div key={i} className="w-full max-w-sm mx-auto rounded-sm shadow-md">
                                    <img src={cls.thumbnail} alt="" className="w-full rounded-sm" />
                                    <div className="m-5">
                                        <h3 className="text-black text-xl">{cls.title}</h3>
                                        <span className="text-gray-600 text-sm">{cls.schedule}</span>
                                        <p className="text-gray-700">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                        <Link
                                            href={cls.id}
                                            className="inline-block border-1 border-yellow-500 border-solid text-yellow-500 text-xl hover:bg-yellow-500 hover:text-white mt-4 px-6 py-2 rounded-md transition duration-200"
                                        >
                                            Daftar Sekarang!
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </section>

            {/* Reading Test */}
            <section id="sec-read" className="bg-no-repeat" style={{ backgroundImage: `url(${Wave})` }}>

                <div className="mb-16 mt-5 pt-15 ">
                    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-700">
                                Uji Kecepatan dan Pemahaman Membaca Anda
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <img
                                src={ReadingBg}
                                alt="Reading Test"
                                className="rounded-lg object-cover"
                            />
                            <div>
                                <p className="text-gray-600 text-xl leading-relaxed">
                                    Sebelum menghitung kecepatan membaca, bersiaplah. Kemudian,
                                    klik tombol mulai jika sudah siap membaca. Saat menekan tombol
                                    dimulai, pengatur waktu akan dimulai pula. Jangan cepat-cepat
                                    saat membaca, tetapi membacalah secara normal untuk menemukan
                                    tingkat membaca Anda saat ini.
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <Link
                                href="/layanan"
                                className="inline-block border-1 border-[#2e8bc0] border-solid text-[#2e8bc0] text-xl hover:bg-[#2e8bc0] hover:text-white px-6 py-2 rounded-md transition duration-200"
                            >
                                Mulai Sekarang!
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </React.Fragment>
    );
};

export default Home;
