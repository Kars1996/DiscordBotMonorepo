import { failedStats, getStats, succesStats } from "@/modules/Utils/Stats";
import { type NextRequest } from "next/server";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

const envKey = process.env.key || "admin";

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("key");
    if (query?.toLowerCase() === envKey) {
        succesStats()
        return new Response(
            JSON.stringify({
                response: getStats(),
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    if ((query.length = 0)) {
        failedStats()
        return new Response(JSON.stringify({ response: "Not Authenticated" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } else {
        failedStats()
        return new Response(
            JSON.stringify({ response: "Incorrect Authentication" }),
            {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
