/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

type StatsProp = {
    members: number;
    guilds: number;
};

// TODO: Make Dynamic and Pull from MongoDB

const Stats: StatsProp = {
    members: 16520921,
    guilds: 7421,
};

export async function GET(): Promise<Response> {
    return new Response(JSON.stringify(Stats), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
