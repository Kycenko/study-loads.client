import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getSubjectName(subjectId: number): Promise<string> {
	const subject: any = await prisma.subject.findUnique({
		where: { id: subjectId },
	})

	return subject ? subject.name : 'N/A'
}

export { getSubjectName }
