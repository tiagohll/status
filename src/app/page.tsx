import { Router } from "lucide-react";

export default function Home() {
    return (
        <div className="bg-zinc-100 flex flex-col gap-10 justify-between items-center min-h-screen w-full text-black py-14">
            <h1 className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                    {" "}
                    <Router className="text-green-500" />
                    <span className="text-2xl font-medium">
                        Status dos Serviços
                    </span>
                </div>

                <span className="uppercase">
                    Atualizado 12 de janeiro de 2025
                    18:14:00 BRST{" "}
                </span>
            </h1>
            <div className="border flex flex-col items-center justify-center w-1/2 h-1/2 p-10">
                <div className="flex items-center border-b border-zinc-300 my-2 w-full p-2 gap-5">
                    <div className="bg-green-700 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        Tiagohll Website
                    </p>
                </div>
                <div className="flex items-center border-b border-zinc-300 my-2 w-full p-2 gap-5">
                    <div className="bg-red-700 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        Tiagohll Web Server
                    </p>
                </div>
                <div className="flex items-center border-b border-zinc-300 my-2 w-full p-2 gap-5">
                    <div className="bg-yellow-500 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        Admins Dashboard
                    </p>
                </div>
                <div className="flex items-center border-b border-zinc-300 my-2 w-full p-2 gap-5">
                    <div className="bg-green-700 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        Agencia Hadar
                    </p>
                </div>
            </div>
            <div className="border flex items-center justify-center h-1/2 gap-10 p-2">
                <div className="flex items-center gap-2">
                    <div className="bg-green-700 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        On
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-red-700 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        Off
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="bg-yellow-500 w-2 h-2 rounded" />
                    <p className="font-medium text-sm">
                        Manuntenção
                    </p>
                </div>
            </div>
        </div>
    );
}
