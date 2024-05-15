"use client";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function () {
    type StatsProp = {
        members: number;
        guilds: number;
    };
    const [stats, setStats] = useState<StatsProp>();
    useEffect(() => {
        fetch("https://api.karstest.pro/v1/stats")
            .then((response) => response.json())
            .then((d) => {
                setStats(d);
            })
            .catch((error) => {
                console.error("Error fetching data from API:", error);
            });
    }, []);

    const totalMembers = stats?.members;
    const totalGuilds = stats?.guilds;
    return (
        <main className="flex flex-col items-center justify-center min-h-[100dvh] bg-[#1c1c1c] text-gray-50 py-12 md:py-24">
            <div className="container px-4 md:px-6 text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        Awesome Discord Bot
                    </h1>
                    <p className="max-w-[600px] mx-auto text-gray-400 md:text-xl">
                        A powerful and versatile Discord bot that enhances your
                        server experience.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://discord.com/api/oauth2/authorize?client_id=123456789&permissions=8&scope=bot">
                        <Button className="w-full sm:w-auto" variant="default">
                            Invite
                        </Button>
                    </a>
                    <a href="https://kars.bio">
                        <Button
                            className="w-full sm:w-auto"
                            variant="secondary"
                        >
                            Documentation
                        </Button>
                    </a>
                    <a href="https://discord.gg/kars">
                        <Button
                            className="w-full sm:w-auto"
                            variant="secondary"
                        >
                            Discord
                        </Button>
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-400">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-gray-50">
                            {totalMembers?.toLocaleString() || "1000"}+
                        </span>
                        <span>Members</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-gray-50">
                            {totalGuilds?.toLocaleString() || "500"}+
                        </span>
                        <span>Guilds</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold text-gray-50">
                            99.9%
                        </span>
                        <span>Uptime</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
