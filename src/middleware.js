import { withLocales } from "nextra/locales";
import { NextResponse } from "next/server";

export const middleware = withLocales((request) => {
  // Your middleware code...
  const response = NextResponse.next();
  return response;
});
