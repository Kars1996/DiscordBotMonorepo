import { type NextRequest } from "next/server";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

interface ResponseProp {
    response: any;
    status?: number;
}

const Data: ResponseProp = {
    response: "Hi",
    status: 200,
};

export function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("key");
    if (query?.toLowerCase() === "kars") {
        return new Response(
            JSON.stringify({ response: "How cool well done :D", status: 200 }),
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
    return new Response(JSON.stringify(Data), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
