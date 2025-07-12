// import clientPromise from "@/lib/mongodb"

// export async function POST(request) {

//     const body=await request.json()
//     console.log(body)


//     const client= await clientPromise;
//     const db=client.db("biturl")
//     const collection = db.collection("url")

//     const doc = await collection.findOne({shorturl: body.shorturl})
//     if(doc){
//         return Response.json({success:false, error:true, message: "URL already exist"})
//     }

//     const result = await collection.insertOne({
//         url:body.url,
//         shorturl:body.shorturl
//     })

//     return Response.json({success: true, error: false, message: "URL generated successfully"})
// }
export const runtime = "nodejs";

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("BODY:", body);

    const client = await clientPromise;
    const db = client.db("biturl");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return NextResponse.json({
        success: false,
        error: true,
        message: "URL already exists",
      });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: "URL generated successfully",
    });
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      {
        success: false,
        error: true,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
