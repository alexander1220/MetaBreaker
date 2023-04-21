import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { BugType } from "../../../components/types/enums/bug-type";

const prisma = new PrismaClient();

const bugReportSchema = z.object({
    bug_type: z.enum([BugType.Bug, BugType.Suggestion]),
    description: z.string().max(2000),
}).required();


export async function POST(req: NextRequest) {
    const content = await req.json();

    await prisma.bug_reports.create({ data: bugReportSchema.parse(content) });

    return NextResponse.json({ success: true });
}