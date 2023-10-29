import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getTeacherName(teacherId: number): Promise<string> {
	const teacher: any = await prisma.teacher.findUnique({
		where: { id: teacherId },
	})

	return teacher ? teacher.fullName : 'N/A'
}

export { getTeacherName }
