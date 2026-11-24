import { NextResponse } from "next/server";

let todos = ["Learn Next.js", "Learn React"];

export async function GET() {
      return NextResponse.rewrite(
        new URL("/vid", "https://www.youtube.com/watch?v=0NFxcNheoLc&list=RD3pWyydi7HBs&index=16")
    );
}

export async function POST(request) {
    const { todo } = await request.json();

    todos.push(todo);

    return NextResponse.json({ message: "Todo added" });
}