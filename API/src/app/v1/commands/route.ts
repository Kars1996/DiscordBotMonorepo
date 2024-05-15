import { failedStats, succesStats } from "@/modules/Utils/Stats";
import { type NextRequest } from "next/server";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

type CommandProps = {
    name: string;
    args?: string;
    desc: string;
    perms?: string;
    catId?: number; // ! Possibly Depreciated
};

// TODO: Make it pull information from MongoDB
// TODO: For now it will just be some predifined commands

const commandsList: CommandProps[] = [
    {
        name: "ping",
        desc: "Get the bots ping.",
    },
    {
        name: "help",
        desc: "Get the bots Commands.",
    },
    {
        name: "botinfo",
        desc: "Get the bots information.",
    },
    {
        name: "ban",
        args: "member* reason",
        desc: "Bans a user.",
        perms: "Ban Members",
    },
    {
        name: "kick",
        args: "member* reason",
        desc: "Kicks a user.",
        perms: "Kick Members",
    },
    {
        name: "warn",
        args: "member* reason",
        desc: "Warns a user.",
        perms: "Manage Messages",
    },
    {
        name: "unban",
        args: "member* reason",
        desc: "UnBans a user.",
        perms: "Ban Members",
    },
    {
        name: "mute",
        args: "member* duration* reason",
        desc: "Times out a user.",
        perms: "Ban Members",
    },
    {
        name: "sad",
        desc: "Get a random sad anime gif.",
    },
];

const stats: { cmds: number } = {
    cmds: commandsList.length,
};

export async function GET(): Promise<Response> {
    succesStats();
    return new Response(
        JSON.stringify({
            response: commandsList,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}
