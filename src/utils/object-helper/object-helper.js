export let updateObjectInArray = (items,itemId,objPropName,newObjProps) => {
    return items.map(u => {
            if (u[objPropName] === itemId) {
                return {
                    ...u,
                    ...newObjProps
                }
            } else {
                return u;
            }
    })
} 