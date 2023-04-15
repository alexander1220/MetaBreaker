import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export function BugReportSubmitButton({ bug_type, description }: { bug_type: string, description: string }) {

    async function saveBugReport() {
        await prisma.bug_reports.create({ data: { bug_type, description } });
    }

    return <button onClick={saveBugReport} />;
}