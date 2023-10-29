import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getGroupName(groupId: number): Promise<string> {
	const group: any = await prisma.group.findUnique({
		where: { id: groupId },
	})

	return group ? group.name : 'N/A'
}

export { getGroupName }
