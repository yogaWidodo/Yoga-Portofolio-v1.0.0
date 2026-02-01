import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
        return NextResponse.json({ error: "Username is required" }, { status: 400 });
    }

    try {
        const response = await fetch(
            `https://github-contributions.vercel.app/api/v1/${username}`
        );

        if (!response.ok) {
            throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch contributions" },
            { status: 500 }
        );
    }
}
