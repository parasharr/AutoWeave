'use server'

import { db } from '@/src/lib/db'
import { currentUser } from '@clerk/nextjs/server'

export const onCreateWorkflow = async (name: string, description: string) => {
    try {
        const user = await currentUser()

        if (user) {
            const workflow = await db.workflows.create({
                data: {
                    name,
                    description,
                    userId: user.id,
                },
            })

            if (workflow) return { message: 'Workflow created successfully' }
            return { message: 'Failed to create workflow' }
        }

        return { message: 'You must be authenticated to create a workflow' }
    } catch (error) {
        console.error("Error creating workflow:", error);
        return { message: 'An error occurred while authenticating or creating workflow' }
    }
}
