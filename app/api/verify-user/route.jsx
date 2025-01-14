import { Users } from "../../../config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "../../../config/db";
import { User } from "lucide-react";

export async function POST(req) {
  const { user } = await req.json();
  console.log("from backend");

  try {
    //if user exists
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))
      .execute();

    console.log("userInfo", userInfo);

    //if not
    if (userInfo?.length == 0) {
      const saveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({ Users });

      return NextResponse.json({ result: saveResult[0] });
    }

    return NextResponse.json({ result: userInfo });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
