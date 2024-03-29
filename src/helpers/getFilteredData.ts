import { User } from "@prisma/client";

const getFilteredData = (data: User) => {
    const res: any = {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role
    }
    if (!data.hashedPassword) {
        res['createPassword'] = true
    }
    return res
}

export default getFilteredData;