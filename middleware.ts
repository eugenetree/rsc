import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // console.log("debug:middleware", request, globalThis.__incrementalCache);
  return NextResponse.next();
}
