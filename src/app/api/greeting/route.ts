import { NextResponse, NextRequest } from "next/server";

export const GET =(request: NextRequest )=>{
   const name= request.nextUrl.searchParams.get('name');
    
   if(name){
   return NextResponse.json({
        message:'Hellow ${name}!',
    });
}
else{
    return NextResponse.json({
        message: 'Name not Found',},
        {
            status:400,
        },
    );
}
};
export const POST = async (request: NextRequest )=>{
    const body = await request.json();

    return NextResponse.json({
        data: body,
        message:' Data created Successfully',
    });
};
export const PUT = async (request: NextRequest )=>{
    const body = await request.json();

    return NextResponse.json({
        message:' Data updated Successfully',
    });
};