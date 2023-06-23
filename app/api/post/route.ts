import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export const GET = async (req: NextRequest) => {
    const todos = await prisma.todo.findMany({})
    return NextResponse.json({ todos })
}

export const POST = async (req: NextRequest) => {
    const { desc, date, time } = await req.json()

    const todo = await prisma.todo.create({
        data: {
            desc, date, time
        }
    })

    return NextResponse.json({ todo })
}

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url).searchParams
    const id = Number(url.get('id')) || 0

    const todo = await prisma.todo.delete({
        where: {
            id: id
        }
    })

    if (!todo) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }

    return NextResponse.json({})
}

export const PUT = async (req: NextRequest) => {
    const { desc, date, id } = await req.json()

    const todo = await prisma.todo.update({
        where: {
            id: Number(id)
        },
        data: {
            desc, date
        }
    })

    return NextResponse.json({ todo })
}