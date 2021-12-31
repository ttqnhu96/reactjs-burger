export const renderIngredientAction = (type, isAdded) => {
    return  {
          type:type,
          isAdded
      }
  }

export const viewBillAction = (type) => {
    return  {
          type:type
      }
  }